import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { StoryHeader } from "../components/stories/StoryHeader";
import { StoryContent } from "../components/stories/StoryContent";
import { getStoryBySlug, getStories } from "../lib/csv/stories";
import { Button } from "../components/ui/Button";

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const allStories = getStories();
  const story = slug ? getStoryBySlug(slug) : null;

  if (!story) {
    return (
      <main className="flex min-h-[70vh] items-center bg-black py-28 text-white sm:py-32">
        <Container size="narrow" className="text-center">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl sm:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Cerita Tidak Ditemukan
            </h1>

            <div className="mx-auto mt-5 h-px w-10 bg-gradient-to-r from-purple-500 to-orange-500" />

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Arsip cerita yang Anda cari mungkin telah diperbarui atau alamat
              tautan tidak sesuai.
            </p>

            <div className="mt-8">
              <Button href="/cerita" variant="primary" size="md">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Daftar Cerita</span>
              </Button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  const currentIndex = allStories.findIndex((item) => item.slug === story.slug);

  const previousStory = currentIndex > 0 ? allStories[currentIndex - 1] : null;

  const nextStory =
    currentIndex >= 0 && currentIndex < allStories.length - 1
      ? allStories[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-black pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
      <Container size="narrow">
        <StoryHeader
          story={story}
          previousStory={previousStory}
          nextStory={nextStory}
        />

        <StoryContent story={story} />
      </Container>
    </main>
  );
};
