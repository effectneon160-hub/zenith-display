import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface BrightnessSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function BrightnessSlider({ value, onChange }: BrightnessSliderProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Brightness
      </h3>
      <div className="flex items-center gap-3">
        <Moon className="w-4 h-4 text-muted-foreground" />
        <Slider
          value={[value]}
          onValueChange={([v]) => onChange(v)}
          min={20}
          max={100}
          step={5}
          className="flex-1"
        />
        <Sun className="w-4 h-4 text-muted-foreground" />
      </div>
      <motion.div
        className="text-center text-xs text-muted-foreground"
        key={value}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {value}%
      </motion.div>
    </div>
  );
}
