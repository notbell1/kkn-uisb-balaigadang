import React from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SafeImage } from "../ui/SafeImage";
import { VillageData } from "../../types/village";

interface VillageHeroProps {
  villageData: VillageData;
}

export const VillageHero: React.FC<VillageHeroProps> = ({ villageData }) => {
  return (
    <main className="bg-black text-white">
      <Container size="wide">
        <div className="pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <SectionTitle
                title="Kelurahan Balai Gadang"
                description={`${villageData.subdistrict}, ${villageData.city}, ${villageData.province} • Kode Pos ${villageData.postal_code}`}
                theme="dark"
              />

              <div className="mt-6 sm:mt-7">
                <p className="text-justify text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                  Wilayah kelurahan dengan bentang geografis terluas di Kota
                  Padang yang membentang seluas {villageData.area}, mencakup 14
                  Rukun Warga (RW) dan 58 Rukun Tetangga (RT) dengan potensi
                  agraris dan kemasyarakatan yang kaya.
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-sm sm:aspect-[16/10] lg:aspect-[4/3]">
                <SafeImage
                  src="/images/village/rawr.webp"
                  alt="Bentang Alam dan Wilayah Kelurahan Balai Gadang"
                  containerClassName="h-full w-full"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
