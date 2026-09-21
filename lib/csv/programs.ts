import rawData from "../../data/programs.json";
import { Program } from "../../types/program";

interface RawProgramRecord {
  id?: number;
  date?: string;
  title?: string;
  slug?: string;
  category?: string;
  status?: string;
  description?: string;
  content?: string;
  image?: string;
}

export function getPrograms(): Program[] {
  if (!Array.isArray(rawData)) {
    console.error("Programs JSON bukan array:", rawData);
    return [];
  }

  return (rawData as RawProgramRecord[])
    .filter((row) => row.title && row.slug)
    .map((row) => ({
      id: row.id ?? 0,
      date: row.date?.trim() || "",
      title: row.title?.trim() || "",
      slug: row.slug?.trim() || "",
      category: row.category?.trim() || "Program",
      status: row.status?.trim() || "Terlaksana",
      description: row.description?.trim() || "",
      content: row.content?.trim() || "",
      image: row.image?.trim() || "/images/hero/hero-balai-gadang.webp",
    }))
    .sort((a, b) => a.id - b.id);
}

export function getProgramBySlug(slug: string): Program | null {
  const programs = getPrograms();

  return programs.find((p) => p.slug === slug) || null;
}

export function getProgramsPreview(limit = 4): Program[] {
  return getPrograms().slice(0, limit);
}
