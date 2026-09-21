import React from "react";
import { motion } from "motion/react";
import { Dpl } from "../../types/dpl";
import { SafeImage } from "../ui/SafeImage";

interface DplProfileProps {
  dpl: Dpl;
}

export const DplProfile: React.FC<DplProfileProps> = ({ dpl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="
        overflow-hidden
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/80
        p-4
        shadow-sm
        sm:p-6
      "
    >
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-5
          sm:gap-7
          md:grid-cols-12
          md:gap-8
        "
      >
        <div className="flex justify-center md:col-span-4">
          <div
            className="
              relative
              aspect-[4/5]
              w-36
              overflow-hidden
              rounded-xl
              border
              border-zinc-700
              bg-zinc-800
              shadow-lg
              sm:w-48
            "
          >
            <SafeImage
              src={dpl.photo}
              alt={`Foto ${dpl.name}`}
              containerClassName="h-full w-full"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="space-y-2.5 text-left md:col-span-8 sm:space-y-3">
          <span
            className="
              inline-block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-purple-400
              sm:text-[11px]
            "
          >
            Dosen Pembimbing Lapangan
          </span>

          <h2
            className="
              text-xl
              font-semibold
              leading-tight
              text-white
              sm:text-2xl
              lg:text-3xl
            "
          >
            {dpl.name}
          </h2>

          {dpl.nip && (
            <p className="font-mono text-[10px] text-zinc-500 sm:text-[11px]">
              {dpl.nip.startsWith("NUPTK") || dpl.nip.startsWith("NIP")
                ? dpl.nip
                : `NUPTK. ${dpl.nip}`}
            </p>
          )}

          <div
            aria-hidden="true"
            className="
              h-px
              w-10
              bg-gradient-to-r
              from-purple-500
              to-orange-500
              sm:w-12
            "
          />

          {dpl.description?.trim() && (
            <p
              className="
                text-justify
                text-sm
                leading-6
                text-zinc-400
                sm:text-base
                sm:leading-7
              "
            >
              {dpl.description}
            </p>
          )}

          <div
            className="
              pt-1
              text-[10px]
              leading-relaxed
              text-zinc-500
              sm:text-[11px]
            "
          >
            <span className="text-zinc-400">Penempatan Wilayah: </span>
            Kelurahan Balai Gadang, Koto Tangah, Padang
          </div>
        </div>
      </div>
    </motion.div>
  );
};
