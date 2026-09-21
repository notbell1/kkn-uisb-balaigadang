import rawData from "../../data/gallery.json";
import { GalleryItem } from "../../types/gallery";

interface RawGalleryRecord {
  id?: number;
  title?: string;
  image?: string;
  date?: string;
  category?: string;
  description?: string;
}

export function getGallery(): GalleryItem[] {
  if (!Array.isArray(rawData)) {
    console.error("Gallery JSON bukan array:", rawData);
    return [];
  }

  return (rawData as RawGalleryRecord[])
    .filter((row) => row.title && row.image)
    .map((row) => ({
      id: row.id ?? 0,
      title: row.title?.trim() || "",
      image: row.image?.trim() || "/images/hero/hero-balai-gadang.webp",
      date: row.date?.trim() || "",
      category: row.category?.trim() || "Dokumentasi",
      description: row.description?.trim() || "",
    }))
    .sort((a, b) => a.id - b.id);
}

export function getGalleryPreview(limit = 6): GalleryItem[] {
  return getGallery().slice(0, limit);
}
