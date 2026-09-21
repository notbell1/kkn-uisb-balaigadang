import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const HomeCta: React.FC = () => {
  return (
    <section className="bg-zinc-300 py-12 sm:py-16 relative overflow-hidden border-t border-zinc-400">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6"
        >
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
            "Setiap kegiatan meninggalkan jejak, setiap cerita menyimpan makna."
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-zinc-700 font-light leading-relaxed max-w-2xl mx-auto">
            Website ini menjadi ruang untuk mengabadikan perjalanan, program
            kerja, dan dedikasi 21 mahasiswa KKN UISB 2026 di Kelurahan Balai
            Gadang, Kecamatan Koto Tangah, Kota Padang.
          </p>

          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              href="/cerita"
              variant="primary"
              size="md"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white border-transparent shadow-md shadow-purple-600/20"
            >
              <span>Jelajahi Arsip Cerita</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              href="/anggota"
              variant="primary"
              size="md"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white border-transparent shadow-md shadow-orange-500/20"
            >
              <Users className="w-4 h-4 text-white" />
              <span>Kenali 21 Anggota Tim</span>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
