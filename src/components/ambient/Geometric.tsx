import { motion } from 'framer-motion';

export function Geometric() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(230, 20%, 10%) 0%, hsl(220, 25%, 14%) 100%)',
        }}
      />
      
      {/* Large rotating hexagon */}
      <motion.div
        className="absolute rotate-slow opacity-10"
        style={{
          width: '80vw',
          height: '80vw',
          top: '10%',
          left: '10%',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 180,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="hsl(200, 40%, 50%)"
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>
      
      {/* Medium rotating square */}
      <motion.div
        className="absolute opacity-8"
        style={{
          width: '50vw',
          height: '50vw',
          top: '25%',
          left: '25%',
        }}
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 240,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="hsl(180, 35%, 45%)"
            strokeWidth="0.2"
            opacity="0.15"
          />
        </svg>
      </motion.div>
      
      {/* Floating circles */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border opacity-10"
          style={{
            width: `${15 + i * 8}vw`,
            height: `${15 + i * 8}vw`,
            borderColor: `hsl(${200 + i * 15}, 40%, 50%)`,
            borderWidth: '1px',
            top: `${20 + (i % 3) * 20}%`,
            left: `${15 + (i % 2) * 40}%`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 20 + i * 5,
            delay: i * 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Subtle grid lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(200, 40%, 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(200, 40%, 50%) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 30,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
}
