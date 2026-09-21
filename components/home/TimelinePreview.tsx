import React from "react";
import { ArrowRight } from "lucide-react";
import { TimelineItem as TimelineItemType } from "../../types/timeline";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Timeline } from "../timeline/Timeline";
import { Button } from "../ui/Button";

interface TimelinePreviewProps {
  items: TimelineItemType[];
}

export const TimelinePreview: React.FC<TimelinePreviewProps> = ({ items }) => {
  return (
    // 1. Mengubah background utama menjadi zinc-50 (abu-abu super terang) agar tidak terlalu menyilaukan
    // 2. Memperbesar padding (py-16 sm:py-24) agar tidak terasa sesak
    <section className="relative w-full bg-zinc-300 text-black py-16 sm:py-24 border-b border-zinc-200 overflow-hidden">
      <Container size="default">
        <div className="relative z-10">
          <SectionTitle
            title="Jejak Langkah Satu Bulan"
            description="Rangkuman tahapan perjalanan mulai dari kedatangan mahasiswa, pelaksanaan program lintas divisi, hingga malam pelepasan."
            align="center"
            theme="light"
          />
        </div>

        <div className="relative z-10 mt-10 sm:mt-14 max-w-4xl mx-auto bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
          <Timeline items={items} theme="light" />
        </div>

        <div className="relative z-10 mt-10 sm:mt-12 text-center">
          <Button
            href="/timeline"
            variant="primary"
            className="bg-orange-500 hover:bg-orange-600 shadow-orange-500/20"
            size="md"
          >
            <span>Lihat Seluruh Kronologi</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};
