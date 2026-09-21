import rawData from "../../data/timeline.json";
import { TimelineItem } from "../../types/timeline";

interface RawTimelineRecord {
  id?: number;
  date?: string;
  title?: string;
  description?: string;
  category?: string;
}

export function getTimeline(): TimelineItem[] {
  if (!Array.isArray(rawData)) {
    console.error("Timeline JSON bukan array:", rawData);
    return [];
  }

  return (rawData as RawTimelineRecord[])
    .filter((row) => row.title && row.date)
    .map((row) => ({
      id: row.id ?? 0,
      date: row.date?.trim() || "",
      title: row.title?.trim() || "",
      description: row.description?.trim() || "",
      category: row.category?.trim() || "Kegiatan",
    }))
    .sort((a, b) => a.id - b.id);
}

export function getTimelinePreview(limit = 4): TimelineItem[] {
  return getTimeline().slice(0, limit);
}
