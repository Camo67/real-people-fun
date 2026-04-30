import React from 'react';
import { motion } from 'framer-motion';

export function Incandescent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } }
  };

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden selection:bg-orange-500/30 selection:text-orange-100"
      style={{ backgroundColor: '#130A04' }}
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(220,100,20,0.6) 0%, rgba(150,50,0,0.2) 40%, rgba(26,15,5,0) 70%)'
        }}
      />

      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <motion.div 
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-orange-400 text-xs font-mono font-medium tracking-widest uppercase">
              [ ACCESS AUTHORIZED ]
            </span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tight text-[#FFF5EB] mb-6 leading-[1.1]">
          You Had To <br />
          <span 
            className="italic font-serif tracking-normal"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Be There.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-orange-100/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          The moments that don't make it to the group chat. High-energy gameshows, unscripted chaos, and real human connection for those who know the difference.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-[#1A0F05] transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FF8A00 0%, #FFA800 100%)',
              boxShadow: '0 0 20px rgba(255, 138, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
          >
            Start Your Event
          </button>
          
          <button 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-orange-200 border border-orange-500/30 hover:bg-orange-500/10 transition-all hover:border-orange-500/50 backdrop-blur-sm"
          >
            Watch The Energy
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
