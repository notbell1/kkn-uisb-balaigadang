import React from "react";
import { StructureNode } from "../../types/structure";
import { cn } from "../../lib/utils/cn";

interface OrganizationNodeProps {
  node: StructureNode;
  isRoot?: boolean;
}

export const OrganizationNodeCard: React.FC<OrganizationNodeProps> = ({
  node,
  isRoot = false,
}) => {
  return (
    <div
      className={cn(
        "group relative inline-flex max-w-full items-center",
        "gap-3 sm:gap-4",
        "rounded-xl",
        "border",
        "px-3.5 py-3",
        "sm:px-4 sm:py-3.5",
        "bg-white",
        "shadow-sm",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "hover:shadow-lg",
        isRoot
          ? "border-purple-500/60 ring-1 ring-purple-500/20"
          : "border-zinc-400 hover:border-purple-500/50",
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          "h-20 w-20",
          "border-2 bg-zinc-200",
          "transition-colors duration-300",
          isRoot
            ? "border-purple-500/50"
            : "border-zinc-400 group-hover:border-purple-500/40",
        )}
      >
        <img
          src={node.photo}
          alt={`Foto ${node.name}`}
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="min-w-0 text-left">
        <span
          className={cn(
            "block truncate",
            "text-[9px] sm:text-[10px]",
            "font-semibold uppercase",
            "tracking-[0.12em] sm:tracking-[0.14em]",
            isRoot ? "text-orange-600" : "text-purple-700",
          )}
        >
          {node.position}
        </span>

        <h4
          className="
            mt-1
            truncate
            font-editorial
            text-sm
            font-normal
            leading-tight
            text-zinc-900
            transition-colors
            duration-300
            group-hover:text-purple-700
            sm:text-base
          "
        >
          {node.name}
        </h4>

        <span
          className="
            mt-1
            block
            truncate
            font-mono
            text-[10px]
            text-zinc-500
            sm:text-xs
          "
        >
          {node.nim}
        </span>
      </div>

      {isRoot && (
        <span
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-3
            right-3
            h-[2px]
            bg-orange-500
            sm:left-4
            sm:right-4
          "
        />
      )}
    </div>
  );
};
