import { motion, AnimatePresence } from 'framer-motion';
import { VisualTheme } from '@/types/ambient';
import { WarmGradient } from './WarmGradient';
import { CoolGradient } from './CoolGradient';
import { NightSky } from './NightSky';
import { Aurora } from './Aurora';
import { Ember } from './Ember';
import { Earth } from './Earth';
import { Geometric } from './Geometric';
import { Orbs } from './Orbs';

interface AmbientDisplayProps {
  theme: VisualTheme;
  brightness: number;
}

const themeComponents: Record<VisualTheme, React.ComponentType> = {
  'warm-gradient': WarmGradient,
  'cool-gradient': CoolGradient,
  'night-sky': NightSky,
  'aurora': Aurora,
  'ember': Ember,
  'earth': Earth,
  'geometric': Geometric,
  'orbs': Orbs,
};

export function AmbientDisplay({ theme, brightness }: AmbientDisplayProps) {
  const ThemeComponent = themeComponents[theme];
  
  // Calculate dim overlay opacity (0 brightness = fully dim, 100 = no dim)
  const dimOpacity = 1 - brightness / 100;

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <ThemeComponent />
        </motion.div>
      </AnimatePresence>
      
      {/* Brightness dim overlay */}
      <motion.div
        className="fixed inset-0 bg-background pointer-events-none z-10"
        animate={{ opacity: dimOpacity * 0.8 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
