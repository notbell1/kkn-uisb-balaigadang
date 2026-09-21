import React from "react";
import { motion } from "motion/react";

export const LoadingState: React.FC = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="status"
      aria-label="Memuat arsip logbook..."
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-center select-none overflow-hidden"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[50vh] h-[50vh] bg-gradient-to-tr from-purple-600 to-orange-500 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl border border-zinc-800"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl border border-transparent border-t-purple-500/80 border-b-orange-500/80 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          />

          <div className="flex items-center justify-center gap-2 z-10 p-2">
            <img
              src="/images/logo/uisb.png"
              alt="Logo 1"
              className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            />

            <img
              src="/images/logo/kkn.png"
              alt="Logo 2"
              className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal tracking-tight mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 text-transparent bg-clip-text">
              KKN UISB
            </span>{" "}
            <span className="text-zinc-500">2026</span>
          </h2>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-orange-400 font-medium">
            Kelurahan Balai Gadang
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 w-full">
          <div className="w-48 sm:w-64 h-[1px] bg-zinc-800/80 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-orange-500"
            />
          </div>

          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[9px] uppercase tracking-[0.2em] text-purple-400/80 font-mono"
          >
            Memuat Arsip...
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
