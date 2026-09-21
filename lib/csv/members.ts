import rawData from "../../data/members.json";
import { Member } from "../../types/member";

interface RawMemberRecord {
  id?: number;
  nim?: string;
  name?: string;
  prodi?: string;
  position?: string;
  photo?: string;
  description?: string;
  quote?: string;
  instagram?: string;
  phone?: string;
}

export function getMembers(): Member[] {
  if (!Array.isArray(rawData)) {
    console.error("Members JSON bukan array:", rawData);
    return [];
  }

  return (rawData as RawMemberRecord[])
    .filter((row) => row.nim && row.name)
    .map((row) => ({
      id: row.id ?? 0,
      nim: row.nim?.trim() || "",
      name: row.name?.trim() || "",
      prodi: row.prodi?.trim() || "",
      position: row.position?.trim() || "Anggota",
      photo: row.photo?.trim() || `/images/members/${row.nim?.trim()}.webp`,
      description: row.description?.trim() || "",
      quote: row.quote?.trim() || "",
      instagram: row.instagram?.trim() || "",
      phone: row.phone?.trim() || "",
    }));
}

export function getMembersByProdi(prodi: string): Member[] {
  const members = getMembers();

  if (!prodi || prodi === "Semua") {
    return members;
  }

  return members.filter((m) => m.prodi.toLowerCase() === prodi.toLowerCase());
}
