import React from "react";
import { cn } from "../../lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "dark" | "light" | "transparent";
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "dark",
  interactive = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        variant === "dark" &&
          "bg-[#112240] border border-slate-800/80 text-slate-100",
        variant === "light" &&
          "bg-white border border-slate-200/90 text-slate-900 shadow-sm",
        variant === "transparent" &&
          "bg-transparent border border-slate-800/60 text-slate-200",
        interactive &&
          "hover:-translate-y-1 hover:border-[#2DD4BF]/50 transition-transform duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
