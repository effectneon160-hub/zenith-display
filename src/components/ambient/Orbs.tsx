import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function Orbs() {
  const orbs = useMemo(() => [
    { 
      color: 'hsl(200, 55%, 45%)', 
      size: 35, 
      x: 15, 
      y: 20, 
      duration: 25,
      delay: 0 
    },
    { 
      color: 'hsl(180, 50%, 40%)', 
      size: 25, 
      x: 70, 
      y: 30, 
      duration: 30,
      delay: 5 
    },
    { 
      color: 'hsl(220, 45%, 50%)', 
      size: 40, 
      x: 40, 
      y: 60, 
      duration: 35,
      delay: 10 
    },
    { 
      color: 'hsl(160, 40%, 40%)', 
      size: 20, 
      x: 80, 
      y: 70, 
      duration: 22,
      delay: 8 
    },
    { 
      color: 'hsl(240, 35%, 45%)', 
      size: 30, 
      x: 25, 
      y: 75, 
      duration: 28,
      delay: 15 
    },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep dark base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(230, 25%, 8%) 0%, hsl(220, 30%, 12%) 100%)',
        }}
      />
      
      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${orb.size}vw`,
            height: `${orb.size}vw`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.35, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Subtle ambient glow at center */}
      <motion.div
        className="absolute w-[60vw] h-[60vh] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(200, 40%, 35%) 0%, transparent 60%)',
          top: '20%',
          left: '20%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
}
