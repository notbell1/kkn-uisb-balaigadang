import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Story } from "../../types/story";
import { formatDateId } from "../../lib/utils/date";
import { SafeImage } from "../ui/SafeImage";

interface StoryHeaderProps {
  story: Story;
  previousStory?: Story | null;
  nextStory?: Story | null;
}

export const StoryHeader: React.FC<StoryHeaderProps> = ({
  story,
  previousStory,
  nextStory,
}) => {
  return (
    <header className="text-white">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-zinc-500"
      >
        <Link to="/" className="transition-colors hover:text-zinc-200">
          Beranda
        </Link>

        <ChevronRight
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-zinc-700"
        />

        <Link to="/cerita" className="transition-colors hover:text-zinc-200">
          Cerita
        </Link>

        <ChevronRight
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-zinc-700"
        />

        <span className="max-w-[180px] truncate text-zinc-400 sm:max-w-md">
          {story.title}
        </span>
      </nav>

      <div className="mt-7 sm:mt-9 lg:mt-10">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex min-w-0 flex-1 justify-start">
            {previousStory ? (
              <Link
                to={`/cerita/${previousStory.slug}`}
                aria-label="Cerita sebelumnya"
                className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900/60 px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-400 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-zinc-300 sm:h-4 sm:w-4"
                />

                <span className="hidden sm:inline">Sebelumnya</span>

                <span className="sm:hidden">Prev</span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="flex shrink-0 justify-center">
            <Link
              to="/cerita"
              aria-label="Kembali ke daftar cerita"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-500/10 px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-purple-400 transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-300 sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]"
            >
              <span className="hidden sm:inline">Kembali ke Cerita</span>

              <span className="sm:hidden">Kembali</span>
            </Link>
          </div>

          <div className="flex min-w-0 flex-1 justify-end">
            {nextStory ? (
              <Link
                to={`/cerita/${nextStory.slug}`}
                aria-label="Cerita selanjutnya"
                className="group inline-flex items-center gap-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-orange-400 transition-all duration-300 hover:border-orange-400/70 hover:bg-orange-500/15 hover:text-orange-300 sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]"
              >
                <span className="hidden sm:inline">Selanjutnya</span>

                <span className="sm:hidden">Next</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:mt-7 sm:text-xs">
          <span className="text-purple-400">{story.category}</span>

          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-orange-500"
          />

          <time className="font-normal tracking-[0.12em] text-zinc-500">
            {formatDateId(story.date)}
          </time>
        </div>

        <h1 className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl xl:text-6xl">
          {story.title}
        </h1>

        <div className="mt-5 h-px w-12 bg-gradient-to-r from-purple-500 to-orange-500 sm:mt-6" />

        <p className="mt-5 max-w-3xl text-justify text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
          {story.excerpt}
        </p>
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <div className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl sm:aspect-[16/9]">
          <SafeImage
            src={story.image}
            alt={story.title}
            containerClassName="h-full w-full"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-orange-500 opacity-80" />
        </div>
      </div>
    </header>
  );
};
