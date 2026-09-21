import rawData from "../../data/stories.json";
import { Story } from "../../types/story";

interface RawStoryRecord {
  id?: number;
  title?: string;
  slug?: string;
  date?: string;
  category?: string;
  image?: string;
  excerpt?: string;
  content?: string;
  featured?: boolean;
}

export function getStories(): Story[] {
  if (!Array.isArray(rawData)) {
    console.error("Stories JSON bukan array:", rawData);
    return [];
  }

  return (rawData as RawStoryRecord[])
    .filter((row) => row.title && row.slug)
    .map((row) => ({
      id: row.id ?? 0,
      title: row.title?.trim() || "Tanpa Judul",
      slug: row.slug?.trim() || "",
      date: row.date?.trim() || "",
      category: row.category?.trim() || "Kegiatan",
      image: row.image?.trim() || "/images/hero/hero-balai-gadang.webp",
      excerpt: row.excerpt?.trim() || "",
      content: row.content?.trim() || "",
      featured: row.featured ?? false,
    }))
    .sort((a, b) => a.id - b.id);
}

export function getFeaturedStory(): Story | null {
  const stories = getStories();

  const featured = stories.find((s) => s.featured);

  return featured || stories[0] || null;
}

export function getLatestStories(limit = 4): Story[] {
  return getStories().slice(0, limit);
}

export function getStoryBySlug(slug: string): Story | null {
  const stories = getStories();

  return stories.find((s) => s.slug === slug) || null;
}

export function getRelatedStories(currentSlug: string, limit = 3): Story[] {
  const stories = getStories();

  const current = stories.find((s) => s.slug === currentSlug);

  return stories
    .filter((s) => s.slug !== currentSlug)
    .filter((s) => (current ? s.category === current.category : true))
    .slice(0, limit);
}
