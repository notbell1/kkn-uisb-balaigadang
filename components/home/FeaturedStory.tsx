import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Story } from "../../types/story";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SafeImage } from "../ui/SafeImage";
import { Button } from "../ui/Button";
import { formatDateId } from "../../lib/utils/date";

interface FeaturedStoryProps {
  story: Story | null;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ story }) => {
  if (!story) return null;

  return (
    // 1. Menghapus min-h-[100dvh] dan flex items-center, serta mengurangi padding atas-bawah (py-12)
    <section className="relative w-full bg-zinc-300 text-black py-12 sm:py-16 lg:py-20 border-b border-zinc-200 overflow-hidden">
      <Container size="wide">
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <SectionTitle
            title="Sorotan Dokumentasi KKN"
            description="Kisah pilihan yang merangkum esensi interaksi, pengabdian, dan dinamika kebersamaan mahasiswa dengan masyarakat Balai Gadang."
            theme="light"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 order-1 lg:order-none"
          >
            <Link
              to={`/cerita/${story.slug}`}
              className="group block relative mx-auto max-w-[280px] sm:max-w-sm lg:max-w-none"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-zinc-100 shadow-xl ring-1 ring-zinc-200">
                <SafeImage
                  src={story.image}
                  alt={story.title}
                  hoverZoom
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="lg:col-span-6 space-y-3 sm:space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-none mt-4 sm:mt-0"
          >
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-purple-600">
              <span>{story.category}</span>
              <span className="text-zinc-300">•</span>
              <time className="text-zinc-500 font-sans">
                {formatDateId(story.date)}
              </time>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-black leading-tight w-full">
              <Link
                to={`/cerita/${story.slug}`}
                className="hover:text-orange-500 transition-colors"
              >
                {story.title}
              </Link>
            </h3>

            <p className="text-sm text-zinc-600 font-light leading-relaxed max-w-lg">
              {story.excerpt}
            </p>

            <div className="pt-1 sm:pt-3">
              <Button
                href={`/cerita/${story.slug}`}
                variant="secondary"
                size="md"
              >
                <span>Baca Narasi Lengkap</span>
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
