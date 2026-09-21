export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Cerita", href: "/cerita" },
  { label: "Timeline", href: "/timeline" },
  { label: "Galeri", href: "/galeri" },
  { label: "Program Kerja", href: "/program-kerja" },
  { label: "Anggota", href: "/anggota" },
  { label: "Struktur", href: "/struktur" },
  { label: "DPL", href: "/dpl" },
  { label: "Kelurahan", href: "/desa" },
];
