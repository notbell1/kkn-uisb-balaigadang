import React from "react";
import { motion } from "motion/react";
import { Stethoscope, GraduationCap, Building2, Landmark } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { VillageData } from "../../types/village";

interface VillageFacilitiesProps {
  villageData: VillageData;
}

export const VillageFacilities: React.FC<VillageFacilitiesProps> = ({
  villageData,
}) => {
  const facilityCategories = [
    {
      icon: Stethoscope,
      title: "Fasilitas Kesehatan",
      count: villageData.health_facilities || "7 Fasilitas",
      description:
        "Sarana yang mendukung kebutuhan kesehatan dan pelayanan masyarakat di wilayah kelurahan.",
    },
    {
      icon: GraduationCap,
      title: "Fasilitas Pendidikan",
      count: villageData.education_facilities || "16 Fasilitas",
      description:
        "Sarana yang mendukung kegiatan pendidikan dan pengembangan pengetahuan masyarakat.",
    },
    {
      icon: Landmark,
      title: "Sarana Ibadah",
      count: villageData.worship_facilities || "36 Fasilitas",
      description:
        "Sarana yang mendukung kebutuhan keagamaan dan aktivitas masyarakat di wilayah kelurahan.",
    },
    {
      icon: Building2,
      title: "Pemerintahan & Umum",
      count: villageData.office_facilities || "7 Fasilitas",
      description:
        "Sarana yang mendukung pelayanan pemerintahan dan kebutuhan umum masyarakat di wilayah kelurahan.",
    },
  ];

  return (
    <section className="border-b border-zinc-400 bg-zinc-300 py-10 text-zinc-900 sm:py-14 lg:py-16">
      <Container size="wide">
        <SectionTitle
          title="Fasilitas Kelurahan"
          description={`Inventarisasi ${villageData.facilities} sarana publik yang menunjang aktivitas sosial, kesehatan, pendidikan, dan pemerintahan di Balai Gadang.`}
          theme="light"
        />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {facilityCategories.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group flex min-h-[210px] flex-col rounded-xl border border-zinc-400 bg-zinc-200 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:shadow-md sm:min-h-[220px] sm:p-5"
              >
                <div className="mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-400 bg-zinc-300 text-purple-600 transition-colors duration-300 group-hover:border-purple-500/50 group-hover:text-purple-700 sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div>
                  <h3 className="text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-600 sm:text-xs">
                    {item.count}
                  </div>

                  <p className="mt-3 text-justify text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
