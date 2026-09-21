import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { GalleryGrid } from "../components/gallery/GalleryGrid";
import { getGallery } from "../lib/csv/gallery";

export const GalleryPage: React.FC = () => {
  const galleryItems = getGallery();

  return (
    <main className="min-h-screen bg-black text-white">
      <Container size="wide">
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <SectionTitle
            title="Galeri Dokumenter KKN"
            description="Koleksi foto otentik yang mendokumentasikan beragam aktivitas, kerja nyata, senyum warga, dan kenangan indah selama di Balai Gadang."
            theme="dark"
          />

          <section
            aria-label="Galeri dokumentasi KKN"
            className="mt-8 sm:mt-10 lg:mt-12"
          >
            <GalleryGrid items={galleryItems} showFilter={true} />
          </section>
        </div>
      </Container>
    </main>
  );
};
