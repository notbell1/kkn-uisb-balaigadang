import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Program } from "../../types/program";
import { getPrograms } from "../../lib/csv/programs";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SafeImage } from "../ui/SafeImage";
import { Button } from "../ui/Button";

interface ProgramPreviewProps {
  programs: Program[];
}

export const ProgramPreview: React.FC<ProgramPreviewProps> = ({ programs }) => {
  /*
   * Ambil seluruh data program langsung dari CSV.
   *
   * `programs` bisa saja sudah dibatasi oleh parent/component lain,
   * sedangkan `allPrograms` selalu mengambil seluruh data yang tersedia.
   */
  const allPrograms = getPrograms();

  return (
    <section className="border-b border-zinc-800 bg-black py-12 text-zinc-100 sm:py-16">
      <Container size="wide">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex-1">
            <SectionTitle
              title="Program Kerja Unggulan"
              description="Realisasi kontribusi mahasiswa yang dirancang berdasarkan kebutuhan nyata warga dan potensi wilayah Balai Gadang."
              theme="dark"
              className="mb-0 text-left"
            />
          </div>

          <div className="mt-2 shrink-0 sm:mt-0">
            <Button href="/program-kerja" variant="outline" size="sm">
              <span>Semua Program</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-1.5 text-[9px] font-semibold text-purple-400">
                {allPrograms.length}
              </span>

              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {programs.slice(0, 3).map((program, index) => (
            <motion.article
              key={program.id}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.08, 0.24),
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-zinc-900 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <Link
                  to={`/program-kerja/${program.slug}`}
                  className="block h-full w-full"
                  aria-label={`Lihat program ${program.title}`}
                >
                  <SafeImage
                    src={program.image}
                    alt={program.title}
                    hoverZoom
                    containerClassName="h-full w-full"
                    className="h-full w-full object-cover object-center"
                  />
                </Link>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px]">
                    <span className="truncate text-purple-400">
                      {program.category}
                    </span>

                    {program.status && (
                      <>
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 shrink-0 rounded-full bg-orange-400"
                        />

                        <span className="shrink-0 font-normal normal-case tracking-normal text-zinc-500">
                          {program.status}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-lg lg:text-xl">
                    <Link
                      to={`/program-kerja/${program.slug}`}
                      className="inline-flex items-start gap-1.5"
                    >
                      <span>{program.title}</span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 translate-x-[-4px] translate-y-1 text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 sm:h-4 sm:w-4"
                      />
                    </Link>
                  </h3>

                  <p className="mt-2.5 line-clamp-3 text-justify text-xs leading-5 text-zinc-400 sm:mt-3 sm:text-sm sm:leading-6">
                    {program.description}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <Link
                    to={`/program-kerja/${program.slug}`}
                    className="group/link inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-purple-400 transition-colors duration-300 hover:text-orange-400 sm:text-[10px]"
                  >
                    <span>Lihat Dokumentasi Program</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
