import React from "react";
import { Story } from "../../types/story";

interface StoryContentProps {
  story: Story;
}

export const StoryContent: React.FC<StoryContentProps> = ({ story }) => {
  const paragraphs = story.content
    ? story.content.split(/\n\n+/).filter((paragraph) => paragraph.trim())
    : [];

  return (
    <article className="mx-auto max-w-3xl py-8 text-white sm:py-10 lg:py-12">
      <div className="space-y-6 text-sm leading-7 text-zinc-300 sm:space-y-7 sm:text-base sm:leading-8 lg:text-[17px] lg:leading-8">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-justify">{story.content}</p>
        )}
      </div>

      <div className="relative mt-10 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 px-5 py-5 sm:mt-12 sm:px-6 sm:py-6">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-orange-500" />

        <div className="pl-2">
          <h2 className="text-sm font-semibold tracking-tight text-white sm:text-base">
            Catatan Redaksi Logbook KKN UISB 2026
          </h2>

          <p className="mt-2 text-justify text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
            Dokumentasi ini disusun oleh Tim Publikasi & Dokumentasi KKN UISB
            2026 Kelurahan Balai Gadang sebagai bagian dari pertanggungjawaban
            program dan arsip pengabdian mahasiswa.
          </p>
        </div>
      </div>
    </article>
  );
};
