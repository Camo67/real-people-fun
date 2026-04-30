import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Broadcast() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-[#FAFAF8] text-[#0D0D0D] font-sans">
      {/* Subtle grid background to enhance the "studio/broadcast" feel without being overpowering */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #0D0D0D 1px, transparent 1px),
            linear-gradient(to bottom, #0D0D0D 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Soft vignette/glow to focus the center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#FAFAF8_100%)] opacity-80" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[#0D0D0D] bg-white font-mono text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E8132A] animate-pulse shadow-[0_0_8px_#E8132A]" />
            [ ACCESS AUTHORIZED ]
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-[#0D0D0D]">You Had To</span>
          <span className="block italic text-[#E8132A]">Be There.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-[#0D0D0D]/80 font-medium leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          The moments that don't make it to the group chat. High-energy gameshows, unscripted chaos, and real human connection for those who know the difference.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="group relative flex items-center justify-center gap-3 bg-[#0D0D0D] text-[#FAFAF8] px-8 py-4 text-base font-bold uppercase tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-[#E8132A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Event
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 text-base font-bold text-[#0D0D0D] uppercase tracking-wide hover:text-[#E8132A] transition-colors">
            <div className="w-10 h-10 rounded-full border-2 border-[#0D0D0D] group-hover:border-[#E8132A] flex items-center justify-center transition-colors">
              <Play className="w-4 h-4 ml-0.5 fill-current" />
            </div>
            Watch The Energy
          </button>
        </motion.div>

      </div>
      
      {/* Decorative broadcast corners */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-4 border-l-4 border-[#0D0D0D] opacity-20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-4 border-r-4 border-[#0D0D0D] opacity-20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-4 border-l-4 border-[#0D0D0D] opacity-20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-4 border-r-4 border-[#0D0D0D] opacity-20" />
    </div>
  );
}
