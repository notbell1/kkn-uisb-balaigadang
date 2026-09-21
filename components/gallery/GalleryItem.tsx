import React from "react";
import { motion } from "motion/react";
import { ZoomIn } from "lucide-react";
import { GalleryItem as GalleryItemType } from "../../types/gallery";
import { SafeImage } from "../ui/SafeImage";
import { cn } from "../../lib/utils/cn";

interface GalleryItemProps {
  item: GalleryItemType;
  onClick: () => void;
  index?: number;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  onClick,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: Math.min((index % 6) * 0.07, 0.35),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group relative cursor-pointer overflow-hidden",
        "rounded-2xl border",
        "bg-black border-white/15",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-purple-500/60",
        "hover:shadow-xl",
        "focus:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-purple-500",
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
        <SafeImage
          src={item.image}
          alt={item.title}
          hoverZoom
          className="h-full w-full object-cover"
        />

        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            "bg-gradient-to-t",
            "from-black/90 via-black/30 to-transparent",
            "opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100",
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0",
          "flex flex-col justify-end",
          "p-3 sm:p-4",
          "translate-y-2 opacity-0",
          "transition-all duration-300",
          "group-hover:translate-y-0",
          "group-hover:opacity-100",
        )}
      >
        <div
          className={cn(
            "mb-1 flex items-center justify-between gap-2",
            "text-[9px] sm:text-[10px]",
            "font-semibold uppercase",
            "tracking-[0.12em] sm:tracking-[0.15em]",
          )}
        >
          <span className="truncate text-purple-400">{item.category}</span>

          <ZoomIn
            className={cn(
              "h-3.5 w-3.5 shrink-0",
              "sm:h-4 sm:w-4",
              "text-orange-400",
            )}
          />
        </div>

        <h4
          className={cn(
            "font-editorial font-normal leading-tight",
            "text-xs sm:text-base",
            "text-white",
            "line-clamp-2",
          )}
        >
          {item.title}
        </h4>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-0",
          "bg-orange-500",
          "transition-all duration-500",
          "group-hover:w-full",
        )}
      />
    </motion.div>
  );
};
