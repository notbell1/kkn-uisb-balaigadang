import React from "react";
import { ArrowRight } from "lucide-react";
import { Story } from "../../types/story";
import { getStories } from "../../lib/csv/stories";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { StoryCard } from "../stories/StoryCard";
import { Button } from "../ui/Button";

interface LatestStoriesProps {
  stories: Story[];
}

export const LatestStories: React.FC<LatestStoriesProps> = ({ stories }) => {
  const allStories = getStories();

  return (
    <section className="border-b border-zinc-800 bg-black py-12 text-zinc-100 sm:py-16">
      <Container size="wide">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex-1">
            <SectionTitle
              title="Catatan Perjalanan Terbaru"
              description="Rekam jejak aktivitas harian, dinamika sosial, dan kegiatan mahasiswa di lapangan."
              theme="dark"
              className="mb-0 text-left"
            />
          </div>

          <div className="mt-2 shrink-0 sm:mt-0">
            <Button href="/cerita" variant="outline" size="sm">
              <span>Semua Cerita</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-1.5 text-[9px] font-semibold text-purple-400">
                {allStories.length}
              </span>

              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {stories.map((story, idx) => (
            <StoryCard key={story.id} story={story} theme="dark" index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};
