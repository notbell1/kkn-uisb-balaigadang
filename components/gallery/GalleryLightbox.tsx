import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { GalleryItem } from "../../types/gallery";
import { formatDateId } from "../../lib/utils/date";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const previousOverflowRef = useRef<string>("");
  const previousPaddingRightRef = useRef<string>("");

  useEffect(() => {
    if (currentIndex === null || !items[currentIndex]) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    previousOverflowRef.current = previousOverflow;
    previousPaddingRightRef.current = previousPaddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && items.length > 1) {
        onPrev();
      }

      if (event.key === "ArrowRight" && items.length > 1) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [currentIndex, items, onClose, onPrev, onNext]);

  if (currentIndex === null || !items[currentIndex]) {
    return null;
  }

  const currentItem = items[currentIndex];

  /* ============================================================
     DOWNLOAD IMAGE
  ============================================================ */

  const handleDownload = async () => {
    try {
      const response = await fetch(currentItem.image);

      if (!response.ok) {
        throw new Error("Gagal mengambil gambar.");
      }

      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = `${
        currentItem.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") || "foto-galeri"
      }.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Gagal mengunduh gambar:", error);

      /*
       * Fallback:
       * Jika server gambar tidak mengizinkan fetch karena CORS,
       * browser akan membuka gambar secara langsung.
       */
      window.open(currentItem.image, "_blank");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Foto Galeri"
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/95 backdrop-blur-md
        p-4 sm:p-6
        select-none
      "
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup penampil foto"
        className="
          absolute right-4 top-4 z-50
          rounded-full
          border border-white/15
          bg-black/70
          p-2.5
          text-white
          transition-all duration-200
          hover:border-purple-500/60
          hover:bg-purple-500
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-purple-500
          sm:right-6 sm:top-6
        "
      >
        <X className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="Foto sebelumnya"
          className="
            absolute left-2 top-1/2 z-50
            -translate-y-1/2
            rounded-full
            border border-white/15
            bg-black/70
            p-2
            text-white
            transition-all duration-200
            hover:border-purple-500/60
            hover:bg-purple-500
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-purple-500
            sm:left-6 sm:p-3
          "
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}

      {items.length > 1 && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Foto berikutnya"
          className="
            absolute right-2 top-1/2 z-50
            -translate-y-1/2
            rounded-full
            border border-white/15
            bg-black/70
            p-2
            text-white
            transition-all duration-200
            hover:border-purple-500/60
            hover:bg-purple-500
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-purple-500
            sm:right-6 sm:p-3
          "
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}

      <div
        className="
          flex max-h-[88vh] w-full
          max-w-5xl
          flex-col items-center justify-center
          px-8
          sm:px-12
          lg:px-16
        "
      >
        <div
          className="
            relative
            max-w-full
            overflow-hidden
            rounded-lg
            border border-white/10
            bg-black
            shadow-2xl
          "
        >
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="
              block
              max-h-[55vh]
              w-auto
              max-w-[calc(100vw-6rem)]
              object-contain
              sm:max-h-[62vh]
              sm:max-w-[calc(100vw-9rem)]
              lg:max-h-[70vh]
              lg:max-w-[calc(100vw-12rem)]
            "
          />
        </div>

        <div className="mt-4 max-w-2xl px-3 text-center sm:mt-5">
          <div
            className="
              mb-1
              flex flex-wrap
              items-center justify-center
              gap-x-2 gap-y-1
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.12em]
              sm:text-xs
              sm:tracking-[0.15em]
            "
          >
            <span className="text-purple-400">{currentItem.category}</span>

            <span className="text-white/30">•</span>

            <span className="font-sans font-medium text-white/50">
              {formatDateId(currentItem.date)}
            </span>

            <span className="text-white/30">•</span>

            <span className="font-mono text-white/50">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <h4
            className="
              font-editorial
              text-base
              font-normal
              leading-snug
              text-white
              sm:text-xl
            "
          >
            {currentItem.title}
          </h4>

          {currentItem.description && (
            <p
              className="
                mt-1
                text-[11px]
                font-light
                leading-relaxed
                text-white/60
                sm:text-sm
              "
            >
              {currentItem.description}
            </p>
          )}

          <button
            type="button"
            onClick={handleDownload}
            className="
              mt-4
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border border-purple-500/40
              bg-purple-500/10
              px-4
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-purple-400
              transition-all duration-200
              hover:border-orange-500/50
              hover:bg-orange-500
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-purple-500
              sm:px-5
              sm:py-2.5
              sm:text-xs
            "
          >
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Download Foto</span>
          </button>
        </div>
      </div>
    </div>
  );
};
