import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { OrganizationChart } from "../components/structure/OrganizationChart";
import { getStructureTree, getFlatStructure } from "../lib/csv/structure";

export const StructurePage: React.FC = () => {
  const tree = getStructureTree();
  const flatNodes = getFlatStructure();

  return (
    <main className="min-h-screen bg-black text-white">
      <Container size="wide">
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <SectionTitle
            title="Struktur Organisasi Tim KKN"
            description="Bagan susunan kepengurusan 21 mahasiswa KKN UISB 2026 di Kelurahan Balai Gadang, mencakup pimpinan tim, sekretariat, bendahara, serta lima divisi operasional."
            align="center"
            theme="dark"
          />

          <section
            aria-label="Struktur organisasi KKN UISB 2026"
            className="mt-8 sm:mt-10 lg:mt-12"
          >
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-zinc-400
                bg-zinc-300
              "
            >
              <div
                className="
                  border-b
                  border-zinc-400
                  px-4
                  py-3
                  sm:px-6
                  sm:py-4
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-purple-700
                        sm:text-[10px]
                      "
                    >
                      Organizational Structure
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-relaxed
                        text-zinc-600
                        sm:text-xs
                      "
                    >
                      Kepengurusan dan pembagian divisi KKN UISB 2026
                    </p>
                  </div>

                  <span
                    className="
                      hidden
                      shrink-0
                      font-mono
                      text-[9px]
                      text-zinc-500
                      sm:block
                      sm:text-[10px]
                    "
                  >
                    21 MEMBERS
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-6 lg:p-8">
                <OrganizationChart tree={tree} flatNodes={flatNodes} />
              </div>

              <div
                className="
                  h-[2px]
                  w-full
                  bg-gradient-to-r
                  from-purple-500
                  via-purple-500/50
                  to-orange-500
                "
              />
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};
