import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils/cn";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = "left",
  theme = "dark",
  className,
}) => {
  const isCenter = align === "center";
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "mb-6 sm:mb-10 md:mb-14",
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {subtitle && (
        <div
          className={cn(
            "text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold mb-2 sm:mb-3 flex items-center gap-2",
            isLight ? "text-[#1E3A5F]" : "text-[#2DD4BF]",
            isCenter && "justify-center"
          )}
        >
          <span className="inline-block w-3 sm:w-4 h-[1px] bg-current opacity-70"></span>
          <span>{subtitle}</span>
          {isCenter && (
            <span className="inline-block w-3 sm:w-4 h-[1px] bg-current opacity-70"></span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-snug sm:leading-tight",
          isLight ? "text-[#0B172A]" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 sm:mt-4 text-xs sm:text-base lg:text-lg leading-relaxed font-light",
            isLight ? "text-slate-600" : "text-slate-300"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
