import { motion } from 'framer-motion';

export function CoolGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep ocean base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(210, 50%, 12%), hsl(200, 45%, 18%), hsl(195, 40%, 22%))',
        }}
      />
      
      {/* Animated wave layer 1 */}
      <motion.div
        className="absolute w-full h-[200%] opacity-40"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, hsl(200, 55%, 30%) 50%, transparent 70%)',
          top: '-50%',
        }}
        animate={{
          y: [0, 100, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 40,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Animated wave layer 2 */}
      <motion.div
        className="absolute w-full h-[200%] opacity-30"
        style={{
          background: 'linear-gradient(-135deg, transparent 30%, hsl(190, 50%, 35%) 50%, transparent 70%)',
          top: '-30%',
        }}
        animate={{
          y: [0, -80, 0],
          rotate: [0, -1.5, 0],
        }}
        transition={{
          duration: 55,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Deep glow */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(185, 60%, 40%) 0%, transparent 60%)',
          bottom: '-30%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 35,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
