import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { FeaturedStory } from "../components/home/FeaturedStory";
import { LatestStories } from "../components/home/LatestStories";
import { TimelinePreview } from "../components/home/TimelinePreview";
import { ProgramPreview } from "../components/home/ProgramPreview";
import { GalleryPreview } from "../components/home/GalleryPreview";
import { VillagePreview } from "../components/home/VillagePreview";
import { HomeCta } from "../components/home/HomeCta";
import { getFeaturedStory, getLatestStories } from "../lib/csv/stories";
import { getTimelinePreview } from "../lib/csv/timeline";
import { getProgramsPreview } from "../lib/csv/programs";
import { getGalleryPreview } from "../lib/csv/gallery";
import { getVillageData } from "../lib/csv/village";

export const HomePage: React.FC = () => {
  const featuredStory = getFeaturedStory();
  const latestStories = getLatestStories(3);
  const timelineItems = getTimelinePreview(4);
  const programs = getProgramsPreview(3);
  const galleryItems = getGalleryPreview(8);
  const villageData = getVillageData();

  return (
    <main>
      <HeroSection />
      <FeaturedStory story={featuredStory} />
      <LatestStories stories={latestStories} />
      <TimelinePreview items={timelineItems} />
      <ProgramPreview programs={programs} />
      <GalleryPreview items={galleryItems} />
      <VillagePreview villageData={villageData} />
      <HomeCta />
    </main>
  );
};
