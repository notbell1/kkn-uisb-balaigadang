import React, { useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ProgramCard } from "../components/programs/ProgramCard";
import { getPrograms } from "../lib/csv/programs";
import { programCategories } from "../lib/constants/categories";
import { cn } from "../lib/utils/cn";

export const ProgramsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  // Seluruh data program dari CSV
  const allPrograms = getPrograms();

  // Filter berdasarkan kategori
  const filteredPrograms =
    activeCategory === "Semua"
      ? allPrograms
      : allPrograms.filter(
          (program) =>
            program.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <main className="min-h-screen bg-black text-white">
      <Container size="wide">
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <SectionTitle
            title="Inisiatif Mahasiswa KKN"
            description="Rancangan program kerja lintas bidang ilmu: Sistem Informasi, Teknik Informatika, Psikologi, Kesehatan Masyarakat, dan Ilmu Hukum."
            theme="dark"
          />

          {programCategories.length > 1 && (
            <nav
              aria-label="Filter kategori program"
              className="mt-7 mb-8 border-y border-zinc-800 py-3 sm:mt-9 sm:mb-10 sm:py-4"
            >
              <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 lg:gap-x-8">
                {programCategories.map((category) => {
                  const isActive =
                    activeCategory.toLowerCase() === category.toLowerCase();

                  // Jumlah program pada kategori ini
                  const categoryCount =
                    category.toLowerCase() === "semua"
                      ? allPrograms.length
                      : allPrograms.filter(
                          (program) =>
                            program.category.toLowerCase() ===
                            category.toLowerCase(),
                        ).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 py-1",
                        "text-[10px] font-semibold uppercase tracking-[0.1em]",
                        "transition-colors duration-200 sm:gap-2 sm:text-xs sm:tracking-[0.14em]",
                        "focus:outline-none focus-visible:ring-2",
                        "focus-visible:ring-purple-500",
                        "focus-visible:ring-offset-2",
                        "focus-visible:ring-offset-black",
                        isActive
                          ? "text-purple-400"
                          : "text-zinc-500 hover:text-white",
                      )}
                    >
                      <span>{category}</span>

                      <span
                        className={cn(
                          "flex h-4 min-w-4 items-center justify-center rounded-full px-1",
                          "text-[8px] font-semibold leading-none",
                          "transition-colors duration-200 sm:h-5 sm:min-w-5 sm:text-[9px]",
                          isActive
                            ? "border border-purple-500/40 bg-purple-500/10 text-purple-300"
                            : "border border-zinc-800 bg-zinc-900 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-300",
                        )}
                      >
                        {categoryCount}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-1 left-0 h-px",
                          "bg-gradient-to-r from-purple-500 to-orange-500",
                          "transition-all duration-300",
                          isActive ? "w-full" : "w-0",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </nav>
          )}

          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
              {activeCategory === "Semua"
                ? `Menampilkan seluruh ${allPrograms.length} program`
                : `Menampilkan ${filteredPrograms.length} program`}
            </p>
          </div>

          {filteredPrograms.length > 0 ? (
            <div
              className={cn(
                "grid grid-cols-2 gap-3",
                "sm:gap-5",
                "lg:grid-cols-3 lg:gap-7",
                "xl:gap-8",
              )}
            >
              {filteredPrograms.map((program, index) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  theme="dark"
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* ===================================================
               EMPTY STATE
            =================================================== */
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-12 text-center sm:py-16">
              <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                Belum ada program untuk kategori ini.
              </p>

              <p className="mx-auto mt-2 max-w-md text-justify text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                Belum terdapat program kerja pada kategori yang dipilih.
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("Semua")}
                className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-400 transition-colors hover:text-orange-400"
              >
                Lihat Semua Program
              </button>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};
