import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function NightSky() {
  // Generate random stars
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Night gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(240, 25%, 6%) 0%, hsl(230, 30%, 12%) 50%, hsl(220, 35%, 18%) 100%)',
        }}
      />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: 'hsl(45, 30%, 85%)',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Milky way glow */}
      <motion.div
        className="absolute w-[150%] h-[30%] blur-3xl opacity-10"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(220, 40%, 40%), hsl(200, 30%, 50%), transparent)',
          top: '30%',
          left: '-25%',
          transform: 'rotate(-15deg)',
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 30,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Subtle horizon glow */}
      <motion.div
        className="absolute w-full h-[40%] blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(ellipse at bottom, hsl(215, 50%, 25%) 0%, transparent 70%)',
          bottom: 0,
          left: 0,
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
}
