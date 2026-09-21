import React from "react";
import { Story } from "../../types/story";
import { StoryCard } from "./StoryCard";
import { SectionTitle } from "../ui/SectionTitle";

interface RelatedStoriesProps {
  stories: Story[];
}

export const RelatedStories: React.FC<RelatedStoriesProps> = ({ stories }) => {
  if (!stories || stories.length === 0) return null;

  return (
    <section className="pt-16 border-t border-slate-800">
      <SectionTitle
        subtitle="Arsip Terkait"
        title="Cerita Lainnya"
        description="Jelajahi catatan dan dokumentasi kegiatan lainnya dari perjalanan KKN di Balai Gadang."
        theme="dark"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} theme="dark" />
        ))}
      </div>
    </section>
  );
};
