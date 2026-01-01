import { motion } from 'framer-motion';
import { VisualTheme, THEME_CONFIGS } from '@/types/ambient';
import { cn } from '@/lib/utils';

interface ThemeSelectorProps {
  currentTheme: VisualTheme;
  onThemeChange: (theme: VisualTheme) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Visual Theme
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {THEME_CONFIGS.map((theme) => (
          <motion.button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={cn(
              'group relative flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-300',
              'border border-border/40 hover:border-border',
              currentTheme === theme.id 
                ? 'bg-secondary border-primary/40' 
                : 'bg-card/50 hover:bg-secondary/50'
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Color preview */}
            <div className="w-8 h-8 rounded-lg overflow-hidden flex">
              {theme.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1 h-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            
            {/* Theme name */}
            <span className={cn(
              'text-[10px] font-medium transition-colors',
              currentTheme === theme.id 
                ? 'text-foreground' 
                : 'text-muted-foreground group-hover:text-foreground'
            )}>
              {theme.name}
            </span>
            
            {/* Active indicator */}
            {currentTheme === theme.id && (
              <motion.div
                className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-primary"
                layoutId="activeTheme"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ x: '-50%' }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
