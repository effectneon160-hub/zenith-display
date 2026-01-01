import { motion } from 'framer-motion';

export function Ember() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark warm base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(15, 30%, 8%) 0%, hsl(20, 40%, 10%) 50%, hsl(25, 35%, 12%) 100%)',
        }}
      />
      
      {/* Main ember glow */}
      <motion.div
        className="absolute w-[100vw] h-[60vh] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, hsl(20, 90%, 35%) 0%, hsl(15, 85%, 25%) 40%, transparent 70%)',
          bottom: '-20%',
          left: '0%',
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Secondary warm glow */}
      <motion.div
        className="absolute w-[60vw] h-[40vh] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, hsl(35, 95%, 45%) 0%, transparent 60%)',
          bottom: '5%',
          right: '10%',
        }}
        animate={{
          opacity: [0.25, 0.4, 0.25],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Floating embers */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `hsl(${30 + Math.random() * 15}, 90%, ${50 + Math.random() * 20}%)`,
            left: `${20 + Math.random() * 60}%`,
            bottom: '10%',
          }}
          animate={{
            y: [0, -300 - Math.random() * 200],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            delay: Math.random() * 10,
            ease: 'easeOut',
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Subtle smoke layer */}
      <motion.div
        className="absolute w-full h-[50%] opacity-20"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(20, 20%, 15%) 100%)',
          bottom: 0,
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
}
