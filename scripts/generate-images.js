import fs from "fs";
import path from "path";
import sharp from "sharp";

const dirs = [
  "public/images/hero",
  "public/images/stories",
  "public/images/gallery",
  "public/images/programs",
  "public/images/members",
  "public/images/dpl",
  "public/images/village",
  "public/images/logo",
];

for (const dir of dirs) {
  fs.mkdirSync(dir, { recursive: true });
}

// Helper to generate SVG and convert to WebP
async function generateWebp(
  filePath,
  width,
  height,
  title,
  subtitle,
  bgGradStart,
  bgGradEnd,
  accentColor = "#2DD4BF",
  patternType = "landscape",
) {
  let patternSvg = "";
  if (patternType === "landscape") {
    patternSvg = `
      <path d="M0,${height * 0.75} Q${width * 0.25},${height * 0.6} ${width * 0.5},${height * 0.7} T${width},${height * 0.65} L${width},${height} L0,${height} Z" fill="rgba(30, 58, 95, 0.6)"/>
      <path d="M0,${height * 0.85} Q${width * 0.3},${height * 0.75} ${width * 0.65},${height * 0.82} T${width},${height * 0.8} L${width},${height} L0,${height} Z" fill="rgba(11, 23, 42, 0.8)"/>
      <circle cx="${width * 0.85}" cy="${height * 0.25}" r="${Math.min(width, height) * 0.12}" fill="${accentColor}" opacity="0.15"/>
    `;
  } else if (patternType === "person") {
    patternSvg = `
      <circle cx="${width * 0.5}" cy="${height * 0.38}" r="${Math.min(width, height) * 0.22}" fill="rgba(255,255,255,0.12)" stroke="${accentColor}" stroke-width="2"/>
      <path d="M${width * 0.2},${height * 0.88} C${width * 0.25},${height * 0.62} ${width * 0.75},${height * 0.62} ${width * 0.8},${height * 0.88} Z" fill="rgba(255,255,255,0.12)"/>
    `;
  } else if (patternType === "map") {
    patternSvg = `
      <g stroke="rgba(79, 124, 172, 0.4)" stroke-width="2" fill="none">
        <path d="M${width * 0.1},${height * 0.2} Q${width * 0.4},${height * 0.1} ${width * 0.7},${height * 0.3} T${width * 0.9},${height * 0.8}"/>
        <path d="M${width * 0.2},${height * 0.8} L${width * 0.5},${height * 0.4} L${width * 0.8},${height * 0.6}"/>
        <polygon points="${width * 0.3},${height * 0.3} ${width * 0.6},${height * 0.25} ${width * 0.7},${height * 0.55} ${width * 0.4},${height * 0.65}" fill="rgba(45, 212, 191, 0.08)" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="4,4"/>
        <circle cx="${width * 0.5}" cy="${height * 0.4}" r="8" fill="${accentColor}"/>
      </g>
    `;
  } else {
    patternSvg = `
      <rect x="${width * 0.05}" y="${height * 0.05}" width="${width * 0.9}" height="${height * 0.9}" rx="12" fill="none" stroke="rgba(79, 124, 172, 0.2)" stroke-width="2"/>
      <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="rgba(45, 212, 191, 0.06)" stroke-width="1.5"/>
    `;
  }

  const cleanTitle = (title || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const cleanSubtitle = (subtitle || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bgGradStart}"/>
          <stop offset="100%" stop-color="${bgGradEnd}"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      ${patternSvg}
      
      <g style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <text x="32" y="${height - 64}" font-size="${Math.max(16, Math.min(28, width * 0.04))}" font-weight="700" fill="#F8FAFC" letter-spacing="0.5">${cleanTitle}</text>
        <text x="32" y="${height - 34}" font-size="${Math.max(12, Math.min(16, width * 0.024))}" font-weight="500" fill="${accentColor}" letter-spacing="1">${cleanSubtitle}</text>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(filePath);
}

async function run() {
  console.log("Generating local webp images...");

  // 1. Hero
  await generateWebp(
    "public/images/hero/hero-balai-gadang.webp",
    1600,
    900,
    "Kelurahan Balai Gadang",
    "DOKUMENTER KKN UISB 2026",
    "#0B172A",
    "#1E3A5F",
    "#2DD4BF",
    "landscape",
  );

  // 2. Logo
  await generateWebp(
    "public/images/logo/uisb-logo.webp",
    400,
    400,
    "UISB",
    "KKN 2026",
    "#1E3A5F",
    "#0B172A",
    "#2DD4BF",
    "frame",
  );

  // 3. Stories
  const stories = [
    {
      file: "story-001.webp",
      title: "Penerimaan Mahasiswa KKN",
      subtitle: "KANTOR LURAH BALAI GADANG",
    },
    {
      file: "story-002.webp",
      title: "Pemetaan Geospasial RW",
      subtitle: "SURVEI BATAS WILAYAH",
    },
    {
      file: "story-003.webp",
      title: "Edukasi PHBS Sekolah Dasar",
      subtitle: "KESEHATAN MASYARAKAT",
    },
    {
      file: "story-004.webp",
      title: "Konseling Parenting Remaja",
      subtitle: "PROGRAM PSIKOLOGI",
    },
    {
      file: "story-005.webp",
      title: "Sosialisasi Hukum & UMKM",
      subtitle: "LEGALITAS USAHA WARGA",
    },
    {
      file: "story-006.webp",
      title: "Malam Ramah Tamah Warga",
      subtitle: "PENUTUPAN KKN UISB",
    },
  ];
  for (const s of stories) {
    await generateWebp(
      `public/images/stories/${s.file}`,
      800,
      500,
      s.title,
      s.subtitle,
      "#0B172A",
      "#1E3A5F",
      "#2DD4BF",
      "landscape",
    );
  }

  // 4. Gallery (12 items)
  const gallery = [
    {
      file: "gallery-001.webp",
      title: "Apel Penyambutan",
      subtitle: "KEGIATAN AWAL",
    },
    {
      file: "gallery-002.webp",
      title: "Survei Lapangan RW 04",
      subtitle: "OBSERVASI WILAYAH",
    },
    {
      file: "gallery-003.webp",
      title: "Diskusi Bersama Tokoh Adat",
      subtitle: "MUSYAWARAH WARGA",
    },
    {
      file: "gallery-004.webp",
      title: "Penyuluhan Cuci Tangan",
      subtitle: "SDN BALAI GADANG",
    },
    {
      file: "gallery-005.webp",
      title: "Pemasangan Plang RT/RW",
      subtitle: "INFRASTRUKTUR",
    },
    {
      file: "gallery-006.webp",
      title: "Bimbingan Belajar Gratis",
      subtitle: "POSKO KKN",
    },
    {
      file: "gallery-007.webp",
      title: "Gotong Royong Drainase",
      subtitle: "LINGKUNGAN BERSIH",
    },
    {
      file: "gallery-008.webp",
      title: "Pemeriksaan Tensi Lansia",
      subtitle: "POSYANDU RW 07",
    },
    {
      file: "gallery-009.webp",
      title: "Digitalisasi Arsip Kelurahan",
      subtitle: "SISTEM INFORMASI",
    },
    {
      file: "gallery-010.webp",
      title: "Workshop Canva Pemuda",
      subtitle: "LITERASI DIGITAL",
    },
    {
      file: "gallery-011.webp",
      title: "Senam Pagi Bersama Ibu-Ibu",
      subtitle: "KEBUGARAN WARGA",
    },
    {
      file: "gallery-012.webp",
      title: "Perpisahan dan Penyerahan Plakat",
      subtitle: "KANTOR LURAH",
    },
  ];
  for (const g of gallery) {
    await generateWebp(
      `public/images/gallery/${g.file}`,
      700,
      520,
      g.title,
      g.subtitle,
      "#1E3A5F",
      "#0B172A",
      "#2DD4BF",
      "landscape",
    );
  }

  // 5. Programs (6 items)
  const programs = [
    {
      file: "program-001.webp",
      title: "Pemetaan Geospasial Fasilitas",
      subtitle: "SISTEM INFORMASI & TI",
    },
    {
      file: "program-002.webp",
      title: "Posko Layanan Konseling",
      subtitle: "PSIKOLOGI MASYARAKAT",
    },
    {
      file: "program-003.webp",
      title: "Gerakan Desa Sehat & PHBS",
      subtitle: "KESEHATAN MASYARAKAT",
    },
    {
      file: "program-004.webp",
      title: "Klinik Hukum & NIB UMKM",
      subtitle: "ILMU HUKUM",
    },
    {
      file: "program-005.webp",
      title: "Website Arsip & Informasi",
      subtitle: "DIGITALISASI KELURAHAN",
    },
    {
      file: "program-006.webp",
      title: "Revitalisasi Papan Informasi RW",
      subtitle: "INFRASTRUKTUR LINGKUNGAN",
    },
  ];
  for (const p of programs) {
    await generateWebp(
      `public/images/programs/${p.file}`,
      900,
      600,
      p.title,
      p.subtitle,
      "#0B172A",
      "#1E3A5F",
      "#2DD4BF",
      "frame",
    );
  }

  // 6. Members (21 students with designated NIMs)
  const prodis = [
    "Sistem Informasi",
    "Teknik Informatika",
    "Psikologi",
    "Kesehatan Masyarakat",
    "Ilmu Hukum",
  ];

  const memberNames = [
    {
      nim: "2359201001",
      name: "Muhammad Faridz Maulana",
      prodi: "Teknik Informatika",
      role: "Ketua Tim",
    },
    {
      nim: "2359201002",
      name: "Annisa Nurul Hidayah",
      prodi: "Sistem Informasi",
      role: "Sekretaris I",
    },
    {
      nim: "2359201003",
      name: "Fadhilah Ramadhani",
      prodi: "Psikologi",
      role: "Bendahara I",
    },
    {
      nim: "2359201004",
      name: "Rian Syahputra",
      prodi: "Ilmu Hukum",
      role: "Koor. Advokasi & Humas",
    },
    {
      nim: "2359201005",
      name: "Dhea Ananda Putri",
      prodi: "Kesehatan Masyarakat",
      role: "Koor. Bidang Kesehatan",
    },
    {
      nim: "2359201006",
      name: "Bagus Pratama",
      prodi: "Teknik Informatika",
      role: "Koor. Publikasi & Dokumentasi",
    },
    {
      nim: "2359201007",
      name: "Zahra Amelia",
      prodi: "Psikologi",
      role: "Koor. Pemberdayaan",
    },
    {
      nim: "2359201008",
      name: "Ilham Kurniawan",
      prodi: "Sistem Informasi",
      role: "Koor. Logistik & Lapangan",
    },
    {
      nim: "2359201009",
      name: "Putri Rahmadani",
      prodi: "Kesehatan Masyarakat",
      role: "Anggota Kesehatan",
    },
    {
      nim: "2359201010",
      name: "Fauzan Akbar",
      prodi: "Ilmu Hukum",
      role: "Anggota Hukum",
    },
    {
      nim: "2359201011",
      name: "Nabila Syakira",
      prodi: "Sistem Informasi",
      role: "Anggota IT",
    },
    {
      nim: "2359201012",
      name: "Hafizul Ihsan",
      prodi: "Teknik Informatika",
      role: "Anggota IT",
    },
    {
      nim: "2359201013",
      name: "Alya Febrianti",
      prodi: "Psikologi",
      role: "Anggota Psikologi",
    },
    {
      nim: "2359201014",
      name: "Taufiq Hidayat",
      prodi: "Kesehatan Masyarakat",
      role: "Anggota Kesehatan",
    },
    {
      nim: "2359201015",
      name: "Dinda Permata",
      prodi: "Ilmu Hukum",
      role: "Anggota Hukum",
    },
    {
      nim: "2359201016",
      name: "Yoga Prasetyo",
      prodi: "Sistem Informasi",
      role: "Anggota Logistik",
    },
    {
      nim: "2359201017",
      name: "Tiara Maharani",
      prodi: "Psikologi",
      role: "Anggota Pemberdayaan",
    },
    {
      nim: "2359201018",
      name: "Aditya Nugraha",
      prodi: "Teknik Informatika",
      role: "Anggota Dokumentasi",
    },
    {
      nim: "2359201019",
      name: "Siti Maysaroh",
      prodi: "Kesehatan Masyarakat",
      role: "Anggota Kesehatan",
    },
    {
      nim: "2359201020",
      name: "Reza Fahlevi",
      prodi: "Ilmu Hukum",
      role: "Anggota Humas",
    },
    {
      nim: "2359201021",
      name: "Naufal Raihan",
      prodi: "Sistem Informasi",
      role: "Anggota IT & Data",
    },
  ];

  for (const m of memberNames) {
    await generateWebp(
      `public/images/members/${m.nim}.webp`,
      500,
      600,
      m.name,
      `${m.nim} • ${m.prodi}`,
      "#0B172A",
      "#1E3A5F",
      "#2DD4BF",
      "person",
    );
  }

  // 7. DPL
  await generateWebp(
    "public/images/dpl/dpl.webp",
    600,
    750,
    "Dr. Hendra Saputra, M.Kom",
    "DOSEN PEMBIMBING LAPANGAN",
    "#0B172A",
    "#1E3A5F",
    "#2DD4BF",
    "person",
  );

  // 8. Village
  await generateWebp(
    "public/images/village/balai-gadang-hero.webp",
    1600,
    900,
    "Kelurahan Balai Gadang",
    "KOTO TANGAH, PADANG",
    "#0B172A",
    "#1E3A5F",
    "#2DD4BF",
    "landscape",
  );
  await generateWebp(
    "public/images/village/map.webp",
    1200,
    800,
    "Peta Wilayah Balai Gadang",
    "14 RW • 58 RT • 106,9 KM²",
    "#1E3A5F",
    "#0B172A",
    "#2DD4BF",
    "map",
  );
  await generateWebp(
    "public/images/village/kantor-lurah.webp",
    800,
    500,
    "Kantor Lurah Balai Gadang",
    "PUSAT PELAYANAN MASYARAKAT",
    "#0B172A",
    "#1E3A5F",
    "#2DD4BF",
    "landscape",
  );
  await generateWebp(
    "public/images/village/fasilitas.webp",
    800,
    500,
    "Fasilitas Umum & Sosial",
    "81 SARANA KELURAHAN",
    "#1E3A5F",
    "#0B172A",
    "#2DD4BF",
    "frame",
  );
  await generateWebp(
    "public/images/village/potensi.webp",
    800,
    500,
    "Potensi Pertanian & UMKM",
    "25 POTENSI KELURAHAN",
    "#0B172A",
    "#1E3A5F",
    "#2DD4BF",
    "landscape",
  );

  console.log("Successfully generated all local WebP images!");
}

run().catch(console.error);
