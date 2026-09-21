import React, { useState } from "react";
import { GalleryItem as GalleryItemType } from "../../types/gallery";
import { GalleryItem } from "./GalleryItem";
import { GalleryLightbox } from "./GalleryLightbox";
import { cn } from "../../lib/utils/cn";

interface GalleryGridProps {
  items: GalleryItemType[];
  showFilter?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  showFilter = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const categories = [
    "Semua",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filteredItems =
    activeCategory.toLowerCase() === "semua"
      ? items
      : items.filter(
          (item) =>
            item.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const handlePrev = () => {
    if (activeIdx === null || filteredItems.length === 0) {
      return;
    }

    setActiveIdx((activeIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (activeIdx === null || filteredItems.length === 0) {
      return;
    }

    setActiveIdx((activeIdx + 1) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {showFilter && categories.length > 1 && (
        <nav
          aria-label="Filter kategori galeri"
          className="mb-7 border-y border-zinc-800 py-3 sm:mb-9 sm:py-4"
        >
          <div
            className={cn(
              "flex w-full flex-wrap items-center",
              "gap-x-4 gap-y-2",
              "sm:gap-x-6 sm:gap-y-3",
              "lg:gap-x-8 lg:gap-y-3",
            )}
          >
            {categories.map((category) => {
              const isActive =
                activeCategory.toLowerCase() === category.toLowerCase();

              const categoryCount =
                category.toLowerCase() === "semua"
                  ? items.length
                  : items.filter(
                      (item) =>
                        item.category.toLowerCase() === category.toLowerCase(),
                    ).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveIdx(null);
                  }}
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
      )}

      <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
        <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
          {activeCategory.toLowerCase() === "semua"
            ? `Menampilkan seluruh ${items.length} foto`
            : `Menampilkan ${filteredItems.length} foto`}
        </p>
      </div>

      {filteredItems.length > 0 ? (
        <div
          className={cn(
            "grid grid-cols-2",
            "gap-3",
            "sm:gap-5",
            "md:grid-cols-3 md:gap-6",
            "lg:grid-cols-4 lg:gap-6",
          )}
        >
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={index}
              onClick={() => setActiveIdx(index)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-12 text-center sm:py-16">
          <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Belum ada dokumentasi.
          </p>

          <p className="mx-auto mt-2 max-w-md text-justify text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
            Belum terdapat foto pada kategori yang dipilih.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("Semua");
              setActiveIdx(null);
            }}
            className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple-400 transition-colors hover:text-orange-400"
          >
            Lihat Semua Foto
          </button>
        </div>
      )}

      <GalleryLightbox
        items={filteredItems}
        currentIndex={activeIdx}
        onClose={() => setActiveIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
