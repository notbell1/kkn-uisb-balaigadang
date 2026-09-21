const MONTHS_ID = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

export function formatDateId(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const parts = dateStr.trim().split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      if (!isNaN(day) && monthIdx >= 0 && monthIdx < 12 && !isNaN(year)) {
        return `${day} ${MONTHS_ID[monthIdx]} ${year}`;
      }
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return `${d.getDate()} ${MONTHS_ID[d.getMonth()]} ${d.getFullYear()}`;
    }
  } catch {
    // fallback to original
  }
  return dateStr;
}
