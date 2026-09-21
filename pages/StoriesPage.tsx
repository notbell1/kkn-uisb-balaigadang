import React, { useMemo, useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { StoryCard } from "../components/stories/StoryCard";
import { getStories } from "../lib/csv/stories";
import { storyCategories } from "../lib/constants/categories";
import { cn } from "../lib/utils/cn";

export const StoriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const allStories = getStories();

  /**
   * Filter cerita berdasarkan kategori aktif.
   */
  const filteredStories = useMemo(() => {
    if (activeCategory === "Semua") {
      return allStories;
    }

    return allStories.filter(
      (story) => story.category.toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [allStories, activeCategory]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Container size="wide">
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <SectionTitle
            title="Cerita Perjalanan KKN"
            description="Kumpulan narasi, catatan harian, dan dokumentasi mendalam mengenai setiap etape pengabdian 21 mahasiswa UISB di Kelurahan Balai Gadang."
            theme="dark"
          />

          <div className="mt-8 mb-8 sm:mt-10 sm:mb-10 lg:mt-12 lg:mb-12">
            <nav
              aria-label="Filter kategori cerita"
              className="border-y border-zinc-800 py-3 sm:py-4"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 lg:gap-x-8">
                {storyCategories.map((category) => {
                  const isActive =
                    activeCategory.toLowerCase() === category.toLowerCase();

                  const categoryCount =
                    category.toLowerCase() === "semua"
                      ? allStories.length
                      : allStories.filter(
                          (story) =>
                            story.category.toLowerCase() ===
                            category.toLowerCase(),
                        ).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 py-1",
                        "text-[10px] font-semibold uppercase tracking-[0.1em]",
                        "transition-colors duration-200 sm:text-xs sm:tracking-[0.14em]",
                        "focus:outline-none",
                        "focus-visible:ring-2",
                        "focus-visible:ring-purple-500",
                        "focus-visible:ring-offset-2",
                        "focus-visible:ring-offset-black",
                        isActive
                          ? "text-purple-400"
                          : "text-zinc-500 hover:text-white",
                      )}
                    >
                      <span>{category}</span>

                      <span
                        className={cn(
                          "flex h-4 min-w-4 items-center justify-center rounded-full px-1",
                          "text-[8px] font-semibold leading-none",
                          "transition-colors duration-200 sm:h-5 sm:min-w-5 sm:text-[9px]",
                          isActive
                            ? "border border-purple-500/40 bg-purple-500/10 text-purple-300"
                            : "border border-zinc-800 bg-zinc-900 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-300",
                        )}
                      >
                        {categoryCount}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-1 left-0 h-px",
                          "bg-gradient-to-r from-purple-500 to-orange-500",
                          "transition-all duration-300",
                          isActive ? "w-full" : "w-0",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
              {activeCategory.toLowerCase() === "semua"
                ? `Menampilkan seluruh ${allStories.length} cerita`
                : `Menampilkan ${filteredStories.length} cerita`}
            </p>
          </div>

          {filteredStories.length > 0 ? (
            <div
              className={cn(
                "grid grid-cols-2 gap-3",
                "sm:gap-5",
                "lg:grid-cols-3 lg:gap-7",
                "xl:gap-8",
              )}
            >
              {filteredStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  theme="dark"
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* ============================================================
               EMPTY STATE
            ============================================================ */
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-12 text-center sm:py-16">
              <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                Belum ada cerita untuk kategori ini.
              </p>

              <p className="mx-auto mt-2 max-w-md text-justify text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
                Silakan pilih kategori lainnya untuk membaca narasi KKN.
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("Semua")}
                className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-400 transition-colors hover:text-orange-400"
              >
                Lihat Semua Cerita
              </button>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};
