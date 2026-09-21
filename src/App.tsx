import React, { Suspense, lazy, useState, useEffect } from "react"; // 1. Tambahkan useState dan useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react"; // Opsional: Agar animasi exit loading-nya halus
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/layout/ScrollToTop";
import { LoadingState } from "../components/ui/LoadingState";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { BackToTopButton } from "../components/ui/BackToTopButton";

// Import dibiarkan murni tanpa fungsi delay()
const HomePage = lazy(() =>
  import("../pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const StoriesPage = lazy(() =>
  import("../pages/StoriesPage").then((m) => ({ default: m.StoriesPage })),
);
const StoryDetailPage = lazy(() =>
  import("../pages/StoryDetailPage").then((m) => ({
    default: m.StoryDetailPage,
  })),
);
const TimelinePage = lazy(() =>
  import("../pages/TimelinePage").then((m) => ({ default: m.TimelinePage })),
);
const GalleryPage = lazy(() =>
  import("../pages/GalleryPage").then((m) => ({ default: m.GalleryPage })),
);
const ProgramsPage = lazy(() =>
  import("../pages/ProgramsPage").then((m) => ({ default: m.ProgramsPage })),
);
const ProgramDetailPage = lazy(() =>
  import("../pages/ProgramDetailPage").then((m) => ({
    default: m.ProgramDetailPage,
  })),
);
const MembersPage = lazy(() =>
  import("../pages/MembersPage").then((m) => ({ default: m.MembersPage })),
);
const StructurePage = lazy(() =>
  import("../pages/StructurePage").then((m) => ({ default: m.StructurePage })),
);
const DplPage = lazy(() =>
  import("../pages/DplPage").then((m) => ({ default: m.DplPage })),
);
const VillagePage = lazy(() =>
  import("../pages/VillagePage").then((m) => ({ default: m.VillagePage })),
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

export function App() {
  // 2. Buat state untuk mengatur durasi Splash Screen awal
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Tahan layar loading selama 2.5 detik (2500 milidetik)
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <AnimatePresence>{isInitialLoading && <LoadingState />}</AnimatePresence>

      <div className="flex min-h-screen flex-col bg-black text-slate-100 selection:bg-purple-500 selection:text-white relative">
        <ScrollProgressBar />
        <BackToTopButton />

        <Navbar />
        <div className="flex-1">
          <Suspense fallback={<LoadingState />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cerita" element={<StoriesPage />} />
              <Route path="/cerita/:slug" element={<StoryDetailPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/galeri" element={<GalleryPage />} />
              <Route path="/program-kerja" element={<ProgramsPage />} />
              <Route
                path="/program-kerja/:slug"
                element={<ProgramDetailPage />}
              />
              <Route path="/anggota" element={<MembersPage />} />
              <Route path="/struktur" element={<StructurePage />} />
              <Route path="/dpl" element={<DplPage />} />
              <Route path="/desa" element={<VillagePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
