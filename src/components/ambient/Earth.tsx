import { motion } from 'framer-motion';

export function Earth() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Earth tone gradient base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(35, 25%, 12%) 0%, hsl(30, 30%, 18%) 50%, hsl(25, 35%, 22%) 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
        }}
        transition={{
          duration: 120,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Rolling hills layer 1 */}
      <motion.div
        className="absolute w-[200%] h-[40%] blur-xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 100%, hsl(35, 40%, 30%) 0%, transparent 80%)',
          bottom: 0,
          left: '-50%',
        }}
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: 60,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Rolling hills layer 2 */}
      <motion.div
        className="absolute w-[180%] h-[35%] blur-lg opacity-25"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 100%, hsl(30, 35%, 25%) 0%, transparent 70%)',
          bottom: '5%',
          left: '-40%',
        }}
        animate={{
          x: [0, -30, 0],
        }}
        transition={{
          duration: 45,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Warm sun glow */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(40, 70%, 50%) 0%, transparent 60%)',
          top: '10%',
          right: '10%',
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
