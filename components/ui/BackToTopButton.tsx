import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../../lib/utils/cn";

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={cn(
        "group fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full",
        "border border-zinc-700 bg-zinc-800 text-zinc-200 shadow-lg",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-purple-500/70 hover:bg-zinc-900 hover:text-purple-300",
        "hover:shadow-[0_8px_30px_rgba(168,85,247,0.18)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "sm:bottom-7 sm:right-7 sm:h-11 sm:w-11",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-orange-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <ArrowUp className="relative h-4 w-4 stroke-[2] transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[18px] sm:w-[18px]" />
    </button>
  );
};
