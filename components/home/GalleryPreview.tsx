import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GalleryItem as GalleryItemType } from "../../types/gallery";
import { getGallery } from "../../lib/csv/gallery";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { GalleryItem } from "../gallery/GalleryItem";
import { GalleryLightbox } from "../gallery/GalleryLightbox";
import { Button } from "../ui/Button";

interface GalleryPreviewProps {
  items: GalleryItemType[];
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Seluruh data galeri dari CSV
  const allGalleryItems = getGallery();

  // Hanya 8 item untuk preview
  const previewItems = items.slice(0, 8);

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + previewItems.length) % previewItems.length);
    }
  };

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % previewItems.length);
    }
  };

  return (
    <section className="border-b border-zinc-400 bg-zinc-300 py-12 text-zinc-900 sm:py-16">
      <Container size="wide">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex-1">
            <SectionTitle
              title="Lensa Perjalanan KKN"
              description="Sorotan momen lapangan, kerja bakti, interaksi sosial, dan dinamika kebersamaan di Kelurahan Balai Gadang."
              theme="light"
              className="mb-0 text-left"
            />
          </div>

          <div className="mt-2 shrink-0 sm:mt-0">
            <Button
              href="/galeri"
              variant="outline"
              size="sm"
              className="border-zinc-300 bg-white font-semibold text-zinc-900 shadow-sm hover:border-purple-600 hover:text-purple-600"
            >
              <span>Buka Seluruh Galeri</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 px-1.5 text-[9px] font-semibold text-purple-600">
                {allGalleryItems.length}
              </span>

              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-sm transition-all duration-300 hover:border-purple-300 hover:shadow-md sm:p-2"
            >
              <GalleryItem
                item={item}
                index={idx}
                onClick={() => setActiveIdx(idx)}
              />
            </div>
          ))}
        </div>

        <GalleryLightbox
          items={previewItems}
          currentIndex={activeIdx}
          onClose={() => setActiveIdx(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Container>
    </section>
  );
};
