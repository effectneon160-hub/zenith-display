import { motion } from 'framer-motion';

export function WarmGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <motion.div
        className="absolute inset-0 ambient-gradient"
        style={{
          background: 'linear-gradient(135deg, hsl(25, 75%, 25%), hsl(38, 80%, 35%), hsl(30, 70%, 30%), hsl(35, 85%, 40%))',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 60,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Overlay orb 1 */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(40, 90%, 50%) 0%, transparent 70%)',
          top: '10%',
          left: '-20%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 45,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Overlay orb 2 */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(30, 85%, 45%) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-15%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 50,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
