import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Timeline } from "../components/timeline/Timeline";
import { getTimeline } from "../lib/csv/timeline";

export const TimelinePage: React.FC = () => {
  const timelineItems = getTimeline();

  return (
    <main className="min-h-screen bg-black text-white">
      <Container size="wide">
        <div className="px-0 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <SectionTitle
            title="Timeline KKN UISB 2026"
            description="Rangkaian catatan kegiatan harian dari hari pertama hingga penutupan resmi selama satu bulan penuh di Kelurahan Balai Gadang."
            align="center"
            theme="dark"
          />

          <section
            aria-label="Timeline kegiatan KKN"
            className="mt-10 sm:mt-12 lg:mt-16"
          >
            <Timeline items={timelineItems} theme="dark" />
          </section>
        </div>
      </Container>
    </main>
  );
};
