import React from "react";
import { TimelineItem as TimelineItemType } from "../../types/timeline";
import { TimelineItem } from "./TimelineItem";

interface TimelineProps {
  items: TimelineItemType[];
  theme?: "dark" | "light";
}

export const Timeline: React.FC<TimelineProps> = ({ items, theme = "dark" }) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <TimelineItem key={item.id} item={item} index={idx} theme={theme} />
      ))}
    </div>
  );
};
