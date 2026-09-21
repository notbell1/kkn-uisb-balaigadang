import React from "react";
import { cn } from "../../lib/utils/cn";

interface SeparatorProps {
  className?: string;
  theme?: "dark" | "light";
}

export const Separator: React.FC<SeparatorProps> = ({
  className,
  theme = "dark",
}) => {
  return (
    <hr
      className={cn(
        "border-0 h-[1px]",
        theme === "dark" ? "bg-slate-800/80" : "bg-slate-200",
        className
      )}
    />
  );
};
