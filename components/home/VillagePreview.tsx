import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Layers, Users, Home } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SafeImage } from "../ui/SafeImage";
import { Button } from "../ui/Button";
import { VillageData } from "../../types/village";

interface VillagePreviewProps {
  villageData: VillageData;
}

export const VillagePreview: React.FC<VillagePreviewProps> = ({
  villageData,
}) => {
  return (
    <section className="bg-black text-slate-100 py-12 sm:py-16 border-b border-zinc-800 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <SectionTitle
              title="Kelurahan Balai Gadang"
              description="Wilayah terluas di Kecamatan Koto Tangah, membentang seluas 106,9 km² dengan perpaduan lanskap pemukiman, sentra pertanian, dan perbukitan asri di bagian utara Kota Padang."
              theme="dark"
              className="mb-0 w-full"
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
              <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 text-left">
                <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Luas Wilayah</span>
                </div>
                <div className="font-editorial text-xl sm:text-2xl text-white">
                  {villageData.area}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 text-left">
                <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Administrasi</span>
                </div>
                <div className="font-editorial text-xl sm:text-2xl text-white">
                  {villageData.rw} RW / {villageData.rt} RT
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 text-left">
                <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Penduduk</span>
                </div>
                <div className="font-editorial text-xl sm:text-2xl text-white">
                  {villageData.population}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 text-left">
                <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
                  <Home className="w-3.5 h-3.5" />
                  <span>Fasilitas</span>
                </div>
                <div className="font-editorial text-xl sm:text-2xl text-white">
                  {villageData.facilities} Sarana
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/desa" variant="primary" size="md">
                <span>Eksplorasi Profil Kelurahan</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            // Jarak atas tambahan jika di mobile agar tidak menempel dengan tombol
            className="lg:col-span-6 mt-6 lg:mt-0"
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11]">
                <SafeImage
                  src="/images/village/locus.webp"
                  alt="Peta Wilayah Kelurahan Balai Gadang"
                  hoverZoom
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 bg-black border-t border-zinc-800 flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-zinc-400 font-medium">
                  Peta Spasial Balai Gadang
                </span>

                <span className="text-orange-400 uppercase tracking-widest font-semibold">
                  14 RW • 58 RT
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
