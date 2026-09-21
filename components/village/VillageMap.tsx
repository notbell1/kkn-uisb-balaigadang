import React from "react";
import { MapPin, Compass } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SafeImage } from "../ui/SafeImage";
import { VillageData } from "../../types/village";

interface VillageMapProps {
  villageData: VillageData;
}

export const VillageMap: React.FC<VillageMapProps> = ({ villageData }) => {
  return (
    <section className="border-b border-zinc-900 bg-black py-10 text-white sm:py-14 lg:py-16">
      <Container size="wide">
        <SectionTitle
          title="Peta Spasial Kelurahan"
          description="Visualisasi batas administratif dan sebaran 14 Rukun Warga (RW) yang mencakup 106,9 km² area Kelurahan Balai Gadang."
          theme="dark"
        />

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 shadow-sm sm:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-950">
                <SafeImage
                  src="/images/village/locus.webp"
                  alt="Peta Spasial Kelurahan Balai Gadang"
                  containerClassName="absolute inset-0 h-full w-full"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-zinc-800 p-5 sm:p-6 lg:col-span-4 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-purple-400">
                <span>Informasi Geografis</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                Batas Administratif
              </h3>

              <ul className="mt-4 divide-y divide-zinc-800 text-xs sm:text-sm">
                <li className="flex items-start justify-between gap-4 py-3 first:pt-0">
                  <span className="shrink-0 text-zinc-500">Utara</span>

                  <span className="text-right font-medium text-zinc-200">
                    Kabupaten Padang Pariaman
                  </span>
                </li>

                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="shrink-0 text-zinc-500">Selatan</span>

                  <span className="text-right font-medium text-zinc-200">
                    Kelurahan Lubuk Minturun
                  </span>
                </li>

                <li className="flex items-start justify-between gap-4 py-3">
                  <span className="shrink-0 text-zinc-500">Barat</span>

                  <span className="text-right font-medium text-zinc-200">
                    Kelurahan Air Dingin
                  </span>
                </li>

                <li className="flex items-start justify-between gap-4 py-3 last:pb-0">
                  <span className="shrink-0 text-zinc-500">Timur</span>

                  <span className="text-right font-medium text-zinc-200">
                    Perbukitan Bukit Barisan
                  </span>
                </li>
              </ul>

              <div className="relative mt-5 overflow-hidden rounded-lg border border-zinc-800 bg-black/40 p-4">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-orange-500" />

                <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Total Luas Spasial</span>
                </div>

                <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
                  {villageData.area}
                </div>

                <p className="mt-1 text-[11px] leading-5 text-zinc-500">
                  Mencakup 14 RW dan 58 RT yang terdata dalam sistem
                  administrasi kependudukan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
