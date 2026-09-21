import React from "react";
import { cn } from "../../lib/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "default",
  ...props
}) => {
  const maxWidth =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
      ? "max-w-7xl"
      : "max-w-6xl";

  return (
    <div
      className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", maxWidth, className)}
      {...props}
    >
      {children}
    </div>
  );
};
