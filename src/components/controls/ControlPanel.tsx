import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Maximize, Minimize, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeSelector } from './ThemeSelector';
import { BrightnessSlider } from './BrightnessSlider';
import { AmbientSettings, VisualTheme } from '@/types/ambient';
import { cn } from '@/lib/utils';

interface ControlPanelProps {
  settings: AmbientSettings;
  isVisible: boolean;
  isFullscreen: boolean;
  isWakeLockActive: boolean;
  onSettingsChange: (settings: Partial<AmbientSettings>) => void;
  onToggleFullscreen: () => void;
  onToggleActive: () => void;
  onClose: () => void;
}

export function ControlPanel({
  settings,
  isVisible,
  isFullscreen,
  isWakeLockActive,
  onSettingsChange,
  onToggleFullscreen,
  onToggleActive,
  onClose,
}: ControlPanelProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-1/2 z-50 w-full max-w-md px-4"
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="control-panel p-5 space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  settings.isActive && isWakeLockActive
                    ? "bg-primary animate-pulse" 
                    : "bg-muted-foreground"
                )} />
                <span className="text-sm font-medium text-foreground">
                  Digital Paperweight
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-7 w-7 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Theme selector */}
            <ThemeSelector
              currentTheme={settings.theme}
              onThemeChange={(theme: VisualTheme) => onSettingsChange({ theme })}
            />
            
            {/* Brightness control */}
            <BrightnessSlider
              value={settings.brightness}
              onChange={(brightness) => onSettingsChange({ brightness })}
            />
            
            {/* Action buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                variant={settings.isActive ? "secondary" : "default"}
                onClick={onToggleActive}
                className="flex-1 gap-2"
              >
                {settings.isActive ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Stop</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Start</span>
                  </>
                )}
              </Button>
              
              <Button
                variant="secondary"
                onClick={onToggleFullscreen}
                className="gap-2"
              >
                {isFullscreen ? (
                  <Minimize className="w-4 h-4" />
                ) : (
                  <Maximize className="w-4 h-4" />
                )}
              </Button>
            </div>
            
            {/* Status indicator */}
            <div className="text-center text-xs text-muted-foreground pt-1">
              {settings.isActive ? (
                isWakeLockActive ? (
                  <span className="text-primary/80">Screen wake active • Press Esc to exit</span>
                ) : (
                  <span>Wake lock not available in this browser</span>
                )
              ) : (
                <span>Press F for fullscreen • Move mouse to show controls</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
