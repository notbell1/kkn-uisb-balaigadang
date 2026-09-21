import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils/cn";

interface CategoryFilterProps {
  categories: readonly string[] | string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  counts?: Record<string, number>;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
  className,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, categories]);

  // Scroll active item into view when activeCategory changes
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  const scrollByAmount = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("relative mb-8 sm:mb-10 select-none", className)}>
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center pr-3 bg-gradient-to-r from-[#0B172A] via-[#0B172A]/90 to-transparent pointer-events-none">
          <button
            type="button"
            onClick={() => scrollByAmount(-180)}
            aria-label="Gulir ke kiri"
            className="pointer-events-auto p-1.5 rounded-full bg-[#112240] border border-slate-700 text-slate-200 hover:text-white hover:border-[#2DD4BF] transition-all shadow-md active:scale-95"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#2DD4BF]" />
          </button>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Daftar Kategori"
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto touch-pan-scroll no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
      >
        {categories.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
          const count = counts ? counts[cat] : undefined;

          return (
            <button
              key={cat}
              ref={isActive ? activeBtnRef : null}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={cn(
                "group shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 text-xs font-medium rounded-lg transition-all duration-200 border whitespace-nowrap",
                isActive
                  ? "bg-[#2DD4BF]/15 text-[#2DD4BF] border-[#2DD4BF]/70 font-semibold shadow-sm shadow-[#2DD4BF]/10"
                  : "bg-[#112240]/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-[#112240] hover:text-white",
              )}
            >
              <span>{cat}</span>
              {typeof count === "number" && (
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors",
                    isActive
                      ? "bg-[#2DD4BF]/25 text-[#2DD4BF]"
                      : "bg-slate-800 text-slate-400 group-hover:text-slate-300",
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}

        <div
          className="w-4 shrink-0 sm:hidden pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center pl-3 bg-gradient-to-l from-[#0B172A] via-[#0B172A]/90 to-transparent pointer-events-none">
          <button
            type="button"
            onClick={() => scrollByAmount(180)}
            aria-label="Gulir ke kanan"
            className="pointer-events-auto p-1.5 rounded-full bg-[#112240] border border-slate-700 text-slate-200 hover:text-white hover:border-[#2DD4BF] transition-all shadow-md active:scale-95"
          >
            <ChevronRight className="w-3.5 h-3.5 text-[#2DD4BF]" />
          </button>
        </div>
      )}
    </div>
  );
};
