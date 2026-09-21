import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Container } from "../components/ui/Container";
import { ProgramHeader } from "../components/programs/ProgramHeader";
import { getProgramBySlug, getPrograms } from "../lib/csv/programs";
import { Button } from "../components/ui/Button";

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const allPrograms = getPrograms();
  const program = slug ? getProgramBySlug(slug) : null;

  /* =========================================================
     PROGRAM TIDAK DITEMUKAN
  ========================================================= */
  if (!program) {
    return (
      <main className="flex min-h-[70vh] items-center bg-black py-28 text-white sm:py-32">
        <Container size="narrow" className="text-center">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl sm:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Program Kerja Tidak Ditemukan
            </h1>

            <div className="mx-auto mt-5 h-px w-10 bg-gradient-to-r from-purple-500 to-orange-500" />

            <p className="mx-auto mt-5 max-w-md text-justify text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Inisiatif program yang Anda tuju belum terdaftar atau tautan tidak
              valid.
            </p>

            <div className="mt-8">
              <Button href="/program-kerja" variant="primary" size="md">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Daftar Program</span>
              </Button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  /* =========================================================
     FORMAT TANGGAL
  ========================================================= */
  const formattedDate = program.date
    ? new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(`${program.date}T00:00:00`))
    : "-";

  /* =========================================================
     PROGRAM NAVIGATION DATA
  ========================================================= */

  const currentIndex = allPrograms.findIndex(
    (item) => item.slug === program.slug,
  );

  const previousProgram =
    currentIndex > 0 ? allPrograms[currentIndex - 1] : null;

  const nextProgram =
    currentIndex >= 0 && currentIndex < allPrograms.length - 1
      ? allPrograms[currentIndex + 1]
      : null;

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-screen bg-black pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
      <Container size="narrow">
        <ProgramHeader
          program={program}
          previousProgram={previousProgram}
          nextProgram={nextProgram}
        />

        <article className="mx-auto max-w-3xl py-8 sm:py-10 lg:py-12">
          <div className="text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-[17px] lg:leading-8">
            <p className="text-justify">{program.content}</p>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 px-5 py-5 shadow-sm sm:px-6 sm:py-6">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-orange-500" />

            <div className="space-y-4 pl-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Bidang Program
                </span>

                <span className="text-sm font-semibold text-purple-400 sm:text-right">
                  {program.category}
                </span>
              </div>

              <div className="h-px bg-zinc-800" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Tanggal Pelaksanaan
                </span>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 sm:justify-end sm:text-right">
                  <CalendarDays className="h-4 w-4 shrink-0 text-orange-400" />
                  {formattedDate}
                </span>
              </div>

              <div className="h-px bg-zinc-800" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Status Pelaksanaan
                </span>

                <span className="text-sm font-medium text-zinc-300 sm:text-right">
                  {program.status}
                </span>
              </div>

              <div className="h-px bg-zinc-800" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Wilayah Sasaran
                </span>

                <span className="text-sm font-medium text-zinc-300 sm:text-right">
                  Kelurahan Balai Gadang, Padang
                </span>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
};
