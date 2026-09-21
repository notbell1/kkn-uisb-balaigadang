import rawData from "../../data/dpl.json";
import { Dpl } from "../../types/dpl";

interface RawDplRecord {
  id?: number;
  name?: string;
  nip?: string;
  photo?: string;
  description?: string;
  message?: string;
}

export function getDpl(): Dpl | null {
  if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
    return null;
  }

  const r = rawData[0] as RawDplRecord;

  return {
    id: r.id ?? 1,
    name: r.name?.trim() || "Dosen Pembimbing Lapangan",
    nip: r.nip?.trim() || "",
    photo: r.photo?.trim() || "/images/dpl/dpl.webp",
    description: r.description?.trim() || "",
    message: r.message?.trim() || "",
  };
}
