import React from "react";
import { motion } from "motion/react";
import { TimelineItem as TimelineItemType } from "../../types/timeline";
import { formatDateId } from "../../lib/utils/date";
import { cn } from "../../lib/utils/cn";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  theme?: "dark" | "light";
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  theme = "dark",
}) => {
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: Math.min((index % 3) * 0.1, 0.3),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative pl-6 sm:pl-12 pb-7 sm:pb-12 last:pb-0 group"
    >
      <div
        className={cn(
          "absolute left-[5px] sm:left-[11px] top-2.5 bottom-0 w-[2px] group-last:hidden",
          isLight ? "bg-zinc-200" : "bg-zinc-800",
        )}
      />

      <div
        className={cn(
          "absolute left-0 sm:left-1 top-1.5 sm:top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 shadow-sm group-hover:scale-110",
          isLight
            ? "border-purple-600 bg-white group-hover:bg-orange-500 group-hover:border-orange-500"
            : "border-purple-500 bg-black group-hover:bg-orange-400 group-hover:border-orange-400",
        )}
      />

      <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-medium mb-1">
        <span
          className={cn(
            "uppercase tracking-widest font-semibold text-[10px] sm:text-[11px]",
            isLight ? "text-purple-600" : "text-purple-400",
          )}
        >
          {item.category}
        </span>
        <span className="text-zinc-300">•</span>
        <time
          className={cn(
            "font-sans tracking-wide",
            isLight ? "text-zinc-500" : "text-zinc-400",
          )}
        >
          {formatDateId(item.date)}
        </time>
      </div>

      <h3
        className={cn(
          "font-editorial text-base sm:text-xl font-normal leading-snug transition-colors",
          isLight
            ? "text-black group-hover:text-purple-600"
            : "text-white group-hover:text-purple-400",
        )}
      >
        {item.title}
      </h3>

      <p
        className={cn(
          "mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed font-light max-w-2xl",
          isLight ? "text-zinc-600" : "text-zinc-400",
        )}
      >
        {item.description}
      </p>
    </motion.div>
  );
};
