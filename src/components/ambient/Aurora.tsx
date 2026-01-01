import { motion } from 'framer-motion';

export function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220, 30%, 8%) 0%, hsl(200, 25%, 12%) 100%)',
        }}
      />
      
      {/* Aurora band 1 - Teal */}
      <motion.div
        className="absolute w-[200%] h-[40%] blur-3xl opacity-40"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(175, 60%, 40%), hsl(180, 55%, 45%), transparent)',
          top: '15%',
          left: '-50%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 30, 0],
          scaleY: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 40,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Aurora band 2 - Green */}
      <motion.div
        className="absolute w-[200%] h-[35%] blur-3xl opacity-35"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(150, 50%, 35%), hsl(160, 55%, 40%), transparent)',
          top: '25%',
          left: '-30%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -20, 0],
          scaleY: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 50,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Aurora band 3 - Blue accent */}
      <motion.div
        className="absolute w-[180%] h-[25%] blur-3xl opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(200, 60%, 45%), hsl(210, 55%, 40%), transparent)',
          top: '35%',
          left: '-40%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 35,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Stars */}
      {Array.from({ length: 40 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            backgroundColor: 'hsl(45, 30%, 80%)',
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
