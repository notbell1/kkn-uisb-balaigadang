import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  ...props
}) => {
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-[11px] sm:text-xs rounded-md"
      : size === "lg"
        ? "px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base rounded-lg"
        : "px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm rounded-md";

  const variantClasses =
    variant === "primary"
      ? // Diubah menjadi Ungu solid
        "bg-purple-600 text-white font-semibold hover:bg-purple-500 shadow-md transition-all duration-300"
      : variant === "secondary"
        ? "bg-zinc-900 text-slate-200 font-medium hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-orange-500/50 transition-all duration-300"
        : variant === "outline"
          ? "border border-zinc-700 text-slate-300 hover:border-purple-500 hover:text-purple-400 font-medium transition-all duration-300"
          : "text-slate-400 hover:text-purple-400 transition-colors duration-200";
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 tracking-wide cursor-pointer transition-all active:scale-[0.98]",
    sizeClasses,
    variantClasses,
    className,
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};
