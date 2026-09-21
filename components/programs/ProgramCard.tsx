import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Program } from "../../types/program";
import { SafeImage } from "../ui/SafeImage";
import { cn } from "../../lib/utils/cn";

interface ProgramCardProps {
  program: Program;
  theme?: "dark" | "light";
  index?: number;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  theme = "dark",
  index = 0,
}) => {
  const isLight = theme === "light";

  const formattedDate = program.date
    ? new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(`${program.date}T00:00:00`))
    : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        isLight
          ? "border-zinc-400 bg-zinc-200 hover:border-purple-500/50 hover:shadow-lg"
          : "border-zinc-800 bg-zinc-900/80 hover:border-purple-500/50 hover:bg-zinc-900 hover:shadow-xl",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <Link
          to={`/program-kerja/${program.slug}`}
          className="block h-full w-full"
          aria-label={`Lihat program ${program.title}`}
        >
          <SafeImage
            src={program.image}
            alt={program.title}
            hoverZoom
            containerClassName="h-full w-full"
            className="h-full w-full object-cover object-center"
          />
        </Link>

        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            "bg-gradient-to-t from-black/45 via-black/5 to-transparent",
            "opacity-60 transition-opacity duration-300",
            "group-hover:opacity-100",
          )}
        />

        <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <div>
          <div className="space-y-1.5">
            <div>
              <span
                className={cn(
                  "text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px]",
                  isLight ? "text-purple-600" : "text-purple-400",
                )}
              >
                {program.category}
              </span>
            </div>

            <div
              className={cn(
                "flex items-center gap-2.5",
                "text-[11px] sm:text-xs",
              )}
            >
              {formattedDate && (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5",
                    "font-semibold tracking-wide",
                    isLight ? "text-zinc-700" : "text-zinc-300",
                  )}
                >
                  <CalendarDays
                    aria-hidden="true"
                    className={cn(
                      "h-3.5 w-3.5 shrink-0",
                      isLight ? "text-orange-500" : "text-orange-400",
                    )}
                  />

                  <span>{formattedDate}</span>
                </span>
              )}

              {formattedDate && program.status && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1 w-1 shrink-0 rounded-full",
                    isLight ? "bg-zinc-400" : "bg-zinc-600",
                  )}
                />
              )}

              {program.status && (
                <span
                  className={cn(
                    "font-normal uppercase tracking-[0.1em]",
                    isLight ? "text-zinc-500" : "text-zinc-500",
                  )}
                >
                  {program.status}
                </span>
              )}
            </div>
          </div>

          <h3
            className={cn(
              "mt-3 text-base font-semibold leading-snug tracking-tight",
              "sm:text-lg lg:text-xl",
              "transition-colors duration-300",
              isLight
                ? "text-zinc-900 group-hover:text-purple-700"
                : "text-white group-hover:text-purple-300",
            )}
          >
            <Link
              to={`/program-kerja/${program.slug}`}
              className="inline-flex items-start gap-1.5"
            >
              <span>{program.title}</span>

              <ArrowUpRight
                aria-hidden="true"
                className={cn(
                  "mt-0.5 h-3.5 w-3.5 shrink-0",
                  "translate-x-[-4px] translate-y-1 opacity-0",
                  "transition-all duration-300",
                  "group-hover:translate-x-0",
                  "group-hover:translate-y-0",
                  "group-hover:opacity-100",
                  isLight ? "text-orange-500" : "text-orange-400",
                )}
              />
            </Link>
          </h3>

          <p
            className={cn(
              "mt-2.5 line-clamp-3 text-justify text-xs leading-5",
              "sm:mt-3 sm:text-sm sm:leading-6",
              isLight ? "text-zinc-600" : "text-zinc-400",
            )}
          >
            {program.description}
          </p>
        </div>

        <div className="mt-auto pt-5">
          <Link
            to={`/program-kerja/${program.slug}`}
            className={cn(
              "group/link inline-flex items-center gap-2",
              "text-[9px] font-semibold uppercase tracking-[0.15em]",
              "transition-colors duration-300 sm:text-[10px]",
              isLight
                ? "text-purple-600 hover:text-orange-500"
                : "text-purple-400 hover:text-orange-400",
            )}
          >
            <span>Pelajari Program</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
