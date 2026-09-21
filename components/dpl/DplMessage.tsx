import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Dpl } from "../../types/dpl";

interface DplMessageProps {
  dpl: Dpl;
}

export const DplMessage: React.FC<DplMessageProps> = ({ dpl }) => {
  if (!dpl.message?.trim()) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="
        relative
        mt-5
        overflow-hidden
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/80
        p-4
        shadow-sm
        sm:mt-6
        sm:p-6
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          bg-gradient-to-b
          from-purple-500
          to-orange-500
        "
      />

      <Quote
        aria-hidden="true"
        className="
          mb-2
          h-6
          w-6
          text-purple-400/40
          sm:h-7
          sm:w-7
        "
      />

      <h3
        className="
          mb-2
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-purple-400
          sm:mb-3
          sm:text-[11px]
        "
      >
        Pesan & Refleksi Pembimbing Lapangan
      </h3>

      <blockquote
        className="
          text-justify
          text-sm
          leading-6
          text-zinc-400
          sm:text-base
          sm:leading-7
        "
      >
        “{dpl.message}”
      </blockquote>

      <div
        className="
          mt-4
          flex
          flex-col
          gap-1.5
          border-t
          border-zinc-800
          pt-3
          text-[10px]
          text-zinc-500
          sm:mt-5
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:gap-0
          sm:pt-4
          sm:text-[11px]
        "
      >
        <span className="font-medium text-zinc-300">{dpl.name}</span>

        <span>UISB • KKN Balai Gadang 2026</span>
      </div>
    </motion.div>
  );
};
