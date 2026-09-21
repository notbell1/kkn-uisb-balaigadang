import React, { useEffect, useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { DplProfile } from "../components/dpl/DplProfile";
import { DplMessage } from "../components/dpl/DplMessage";
import { getDpl } from "../lib/csv/dpl";
import type { Dpl } from "../types/dpl";

export const DplPage: React.FC = () => {
  const [dpl, setDpl] = useState<Dpl | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDpl = async () => {
      try {
        const data = await getDpl();
        setDpl(data);
      } catch (error) {
        console.error("Failed to load DPL:", error);
        setDpl(null);
      } finally {
        setLoading(false);
      }
    };

    loadDpl();
  }, []);

  return (
    <main
      className="
        min-h-screen
        bg-zinc-950
        pb-20
        pt-28
        text-zinc-100
        lg:pb-28
        lg:pt-36
      "
    >
      <Container size="narrow">
        <SectionTitle
          title="Dosen Pembimbing Lapangan"
          description="Profil dan arahan dari dosen pembimbing lapangan yang mengarahkan pelaksanaan KKN UISB 2026 di Kelurahan Balai Gadang."
          align="center"
          theme="dark"
        />

        {loading ? (
          <div
            className="
              mt-10
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              px-6
              py-16
              text-center
              shadow-sm
              sm:mt-12
            "
          >
            <div
              aria-hidden="true"
              className="
                mx-auto
                h-8
                w-8
                animate-spin
                rounded-full
                border-2
                border-zinc-700
                border-t-purple-500
              "
            />

            <p
              className="
                mt-5
                text-sm
                text-zinc-400
              "
            >
              Memuat data DPL...
            </p>
          </div>
        ) : dpl ? (
          <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            <DplProfile dpl={dpl} />
            <DplMessage dpl={dpl} />
          </div>
        ) : (
          <div
            className="
              mt-10
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              px-6
              py-16
              text-center
              shadow-sm
              sm:mt-12
            "
          >
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-5
                h-1
                w-10
                rounded-full
                bg-gradient-to-r
                from-purple-500
                to-orange-500
              "
            />

            <p
              className="
                font-editorial
                text-xl
                font-normal
                text-white
                sm:text-2xl
              "
            >
              Data DPL sedang dalam proses pembaruan.
            </p>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-relaxed
                text-zinc-400
              "
            >
              Informasi dosen pembimbing lapangan akan ditampilkan setelah data
              diperbarui.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
};
