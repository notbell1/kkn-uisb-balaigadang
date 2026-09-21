import React from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SafeImage } from "../ui/SafeImage";
import { VillageData } from "../../types/village";

interface VillageProfileProps {
  villageData: VillageData;
}

export const VillageProfile: React.FC<VillageProfileProps> = ({
  villageData,
}) => {
  return (
    <section className="border-b border-zinc-400 bg-zinc-300 py-7 text-zinc-900 sm:py-9 lg:py-11">
      <Container size="wide">
        <SectionTitle
          title="Mengenal Balai Gadang"
          description="Sekilas latar belakang, letak geografis, serta visi pembangunan Kelurahan Balai Gadang dalam mewujudkan kemandirian wilayah."
          theme="light"
        />

        <div className="mt-5 grid grid-cols-1 items-start gap-6 sm:mt-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="space-y-5 text-sm leading-6 text-zinc-700 sm:text-[15px] sm:leading-6.5 lg:col-span-7">
            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-px w-4 bg-gradient-to-r from-purple-600 to-orange-500" />

                <h3 className="text-[15px] font-semibold text-zinc-900 sm:text-base">
                  Latar Belakang & Letak Geografis
                </h3>
              </div>

              <p className="text-justify">{villageData.history}</p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-px w-4 bg-gradient-to-r from-purple-600 to-orange-500" />

                <h3 className="text-[15px] font-semibold text-zinc-900 sm:text-base">
                  Visi Kelurahan Balai Gadang
                </h3>
              </div>

              <blockquote className="relative overflow-hidden rounded-lg border border-zinc-400 bg-zinc-200 px-3.5 py-3 text-justify text-sm leading-6 text-zinc-700 shadow-sm sm:px-4 sm:py-3.5">
                <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-600 to-orange-500" />

                <span className="text-purple-600">“</span>
                {villageData.vision}
                <span className="text-orange-500">”</span>
              </blockquote>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-px w-4 bg-gradient-to-r from-purple-600 to-orange-500" />

                <h3 className="text-[15px] font-semibold text-zinc-900 sm:text-base">
                  Kehidupan Kemasyarakatan
                </h3>
              </div>

              <p className="text-justify">
                Masyarakat Balai Gadang menjunjung tinggi falsafah Minangkabau{" "}
                <em className="font-medium text-zinc-800">
                  Adat Basandi Syarak, Syarak Basandi Kitabullah
                </em>
                . Hubungan sosial antartetangga terjalin erat melalui tradisi
                gotong royong, kegiatan wirid pengajian di masjid lingkungan,
                serta peran aktif bundo kanduang dan kepemudaan karang taruna.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-zinc-400 bg-zinc-200 shadow-sm">
              <div className="aspect-[4/3]">
                <SafeImage
                  src="/images/village/kantor-lurah.webp"
                  alt="Kantor Lurah Balai Gadang"
                  containerClassName="h-full w-full"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="border-t border-zinc-400 px-3.5 py-2.5 sm:px-4">
                <p className="text-[11px] leading-5 text-zinc-600 sm:text-xs">
                  Kantor Kelurahan Balai Gadang sebagai pusat pelayanan
                  administrasi dan koordinasi masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
