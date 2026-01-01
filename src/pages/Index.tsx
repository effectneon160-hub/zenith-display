import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AmbientDisplay } from '@/components/ambient/AmbientDisplay';
import { ControlPanel } from '@/components/controls/ControlPanel';
import { useWakeLock } from '@/hooks/useWakeLock';
import { useFullscreen } from '@/hooks/useFullscreen';
import { useIdleDetection } from '@/hooks/useIdleDetection';
import { AmbientSettings } from '@/types/ambient';

const Index = () => {
  const [settings, setSettings] = useState<AmbientSettings>({
    theme: 'aurora',
    transitionSpeed: 'slow',
    brightness: 80,
    isActive: true,
  });

  const [showControls, setShowControls] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const { isActive: isWakeLockActive, requestWakeLock, releaseWakeLock } = useWakeLock();
  const { isFullscreen, toggleFullscreen, exitFullscreen } = useFullscreen();
  
  // Hide controls after inactivity
  const { isIdle } = useIdleDetection({
    timeout: 4000,
    onIdle: () => {
      if (settings.isActive && hasInteracted) {
        setShowControls(false);
      }
    },
    onActive: () => {
      setShowControls(true);
    },
  });

  // Handle wake lock based on active state
  useEffect(() => {
    if (settings.isActive) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }
  }, [settings.isActive, requestWakeLock, releaseWakeLock]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          if (isFullscreen) {
            exitFullscreen();
          }
          setSettings(prev => ({ ...prev, isActive: false }));
          setShowControls(true);
          break;
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey) {
            toggleFullscreen();
          }
          break;
        case ' ':
          e.preventDefault();
          setSettings(prev => ({ ...prev, isActive: !prev.isActive }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, exitFullscreen, toggleFullscreen]);

  const handleSettingsChange = useCallback((newSettings: Partial<AmbientSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const handleToggleActive = useCallback(() => {
    setHasInteracted(true);
    setSettings(prev => ({ ...prev, isActive: !prev.isActive }));
  }, []);

  const handleClose = useCallback(() => {
    setSettings(prev => ({ ...prev, isActive: false }));
    setShowControls(true);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-background overflow-hidden ${
        settings.isActive && isIdle ? 'cursor-hidden' : ''
      }`}
    >
      {/* SEO */}
      <title>Digital Paperweight - Ambient Screen Wake Tool</title>
      <meta name="description" content="Keep your screen awake with elegant, professional ambient visuals. A calm, distraction-free utility for your desktop." />
      
      {/* Ambient visual display */}
      <AmbientDisplay
        theme={settings.theme}
        brightness={settings.brightness}
      />
      
      {/* Welcome overlay for first-time users */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-3xl font-medium text-foreground/90 tracking-tight">
                Digital Paperweight
              </h1>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Keeping your screen awake with calm, ambient visuals
              </p>
              <motion.div
                className="pt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs text-muted-foreground">
                  Move your mouse to access controls
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Control panel */}
      <ControlPanel
        settings={settings}
        isVisible={showControls}
        isFullscreen={isFullscreen}
        isWakeLockActive={isWakeLockActive}
        onSettingsChange={handleSettingsChange}
        onToggleFullscreen={toggleFullscreen}
        onToggleActive={handleToggleActive}
        onClose={handleClose}
      />
    </div>
  );
};

export default Index;
