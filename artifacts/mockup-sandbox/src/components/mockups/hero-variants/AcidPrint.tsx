import React from "react";
import { motion } from "framer-motion";

export function AcidPrint() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Noise Texture Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Distressed Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20 blur-3xl mix-blend-screen">
        <div className="h-[40vh] w-[40vw] rounded-full bg-[#C8FF00] opacity-30 blur-[120px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8 inline-flex items-center justify-center border-2 border-[#C8FF00] bg-[#C8FF00]/10 px-4 py-1.5 backdrop-blur-sm shadow-[4px_4px_0px_0px_#C8FF00]"
        >
          <span className="text-sm font-bold tracking-widest text-[#C8FF00] uppercase">
            [ ACCESS AUTHORIZED ]
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="mb-6 flex flex-col text-7xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl"
        >
          <span className="text-white drop-shadow-[4px_4px_0px_rgba(200,255,0,0.5)]">
            You Had To
          </span>
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="italic text-[#C8FF00] drop-shadow-[6px_6px_0px_rgba(255,255,255,0.15)] pr-4"
          >
            Be There.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl md:text-2xl drop-shadow-md"
        >
          The moments that don't make it to the group chat. High-energy gameshows, unscripted chaos, and real human connection for those who know the difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row w-full max-w-md sm:max-w-none"
        >
          <button className="group relative w-full sm:w-auto font-bold uppercase tracking-wider text-black bg-[#C8FF00] px-8 py-5 transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-none shadow-[-6px_6px_0px_0px_rgba(255,255,255,0.2)]">
            <span className="relative z-10">Start Your Event</span>
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20" />
          </button>
          
          <button className="group w-full sm:w-auto font-bold uppercase tracking-wider text-white border-2 border-zinc-700 bg-transparent px-8 py-5 transition-all hover:border-[#C8FF00] hover:text-[#C8FF00] hover:bg-[#C8FF00]/5">
            Watch The Energy
          </button>
        </motion.div>
      </div>
    </div>
  );
}
