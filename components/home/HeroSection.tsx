import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Mail, GraduationCap } from "lucide-react";

import { Button } from "../ui/Button";
import { SafeImage } from "../ui/SafeImage";
import { AnimatedBackground } from "./AnimatedBackground";
import { siteConfig } from "../../lib/constants/site";

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V12a8.16 8.16 0 0 0 5.73 2.29V10.8a4.85 4.85 0 0 1-3-.94 4.8 4.8 0 0 1-1-1.17v-2z" />
  </svg>
);

export const HeroSection: React.FC = () => {
  const { socials } = siteConfig;

  const [activeCard, setActiveCard] = useState<"one" | "two" | "three" | null>(
    null,
  );

  return (
    <section
      className="
        relative
        w-full
        min-h-[100dvh]
        flex
        items-center
        justify-center
        pt-28
        pb-12
        sm:pt-32
        sm:pb-16
        lg:pt-32
        lg:pb-16
        overflow-hidden
        bg-black
      "
    >
      <AnimatedBackground />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          w-full
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            sm:gap-10
            lg:gap-6
            items-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="
              lg:col-span-6
              space-y-5
              sm:space-y-6
              lg:space-y-8
              flex
              flex-col
              items-center
              lg:items-start
              text-center
              lg:text-left
              lg:translate-x-6
            "
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="
                font-editorial
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-normal
                text-white
                tracking-tight
                leading-[1.12]
                w-full
              "
            >
              Merekam Jejak,
              <br />
              <span className="font-light text-orange-400">
                Menyimpan Cerita.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                text-sm
                sm:text-base
                lg:text-xl
                text-slate-300
                max-w-xl
                font-light
                leading-relaxed
                mx-auto
                lg:mx-0
              "
            >
              Catatan perjalanan KKN UISB 2026 di Kelurahan Balai Gadang,
              Kecamatan Koto Tangah, Kota Padang.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                pt-3
                sm:pt-4
                flex
                flex-wrap
                justify-center
                lg:justify-start
                items-center
                gap-3
                sm:gap-4
              "
            >
              <Button href="/cerita" variant="primary" size="md">
                <span>Lihat Cerita</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <a
                href="https://balai-gadang.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="md">
                  <span>Project Locus</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="
                pt-3
                flex
                flex-wrap
                justify-center
                lg:justify-start
                items-center
                gap-2.5
                sm:gap-4
                text-xs
                text-slate-400
              "
            >
              <div className="flex items-center gap-4">
                {socials.instagram && (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram KKN UISB 2026"
                    className="
                      text-slate-400
                      hover:text-purple-400
                      transition-colors
                      p-1
                    "
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}

                {socials.tiktok && (
                  <a
                    href={socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok KKN UISB 2026"
                    className="
                      text-slate-400
                      hover:text-purple-400
                      transition-colors
                      p-1
                    "
                  >
                    <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}

                {socials.email && (
                  <a
                    href={`mailto:${socials.email}`}
                    aria-label="Email Resmi KKN UISB"
                    className="
                      text-slate-400
                      hover:text-purple-400
                      transition-colors
                      p-1
                    "
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}

                {socials.university && (
                  <a
                    href={socials.university}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Situs Universitas Islam Sumatera Barat"
                    className="
                      text-slate-400
                      hover:text-purple-400
                      transition-colors
                      p-1
                    "
                  >
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.25,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="
              lg:col-span-6
              relative
              mt-8
              sm:mt-10
              lg:mt-0
              lg:-translate-x-6
            "
          >
            <div
              className="
                relative
                h-[390px]
                sm:h-[450px]
                lg:h-[540px]
                w-full
              "
            >
              <div
                className="
                  absolute
                  -inset-12
                  sm:-inset-16
                  pointer-events-none
                "
              >
                <motion.div
                  animate={{
                    x: [0, 25, -15, 0],
                    y: [0, -15, 20, 0],
                    scale: [1, 1.12, 0.96, 1],
                    opacity: [0.18, 0.28, 0.18, 0.18],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-[5%]
                    right-[5%]
                    w-44
                    h-44
                    sm:w-64
                    sm:h-64
                    rounded-full
                    bg-purple-500/20
                    blur-3xl
                  "
                />

                <motion.div
                  animate={{
                    x: [0, -20, 15, 0],
                    y: [0, 18, -12, 0],
                    scale: [1, 0.92, 1.1, 1],
                    opacity: [0.14, 0.23, 0.14, 0.14],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="
                    absolute
                    bottom-[5%]
                    left-[5%]
                    w-40
                    h-40
                    sm:w-60
                    sm:h-60
                    rounded-full
                    bg-orange-500/20
                    blur-3xl
                  "
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: -15, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setActiveCard("one")}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  absolute
                  top-[4%]
                  right-[1%]
                  w-[82%]
                  sm:w-[78%]
                  lg:w-[94%]
                  cursor-pointer
                  ${activeCard === "one" ? "z-40" : "z-10"}
                `}
              >
                <div
                  className="
                    relative
                    rounded-xl
                    overflow-hidden
                    border
                    border-white/20
                    bg-zinc-900/95
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]
                    ring-1
                    ring-white/5
                    group
                  "
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <SafeImage
                      src="/images/stories/last3.webp"
                      alt="Dokumentasi KKN UISB"
                      className="
                        w-full
                        h-full
                        object-cover
                        grayscale
                        transition-[filter]
                        duration-700
                        group-hover:grayscale-0
                      "
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.48,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setActiveCard("two")}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  absolute
                  top-[24%]
                  left-[7%]
                  w-[82%]
                  sm:w-[78%]
                  lg:w-[94%]
                  cursor-pointer
                  ${activeCard === "two" ? "z-40" : "z-20"}
                `}
              >
                <div
                  className="
                    relative
                    rounded-xl
                    overflow-hidden
                    border
                    border-white/20
                    bg-zinc-900/95
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]
                    ring-1
                    ring-white/5
                    group
                  "
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <SafeImage
                      src="/images/stories/last2.webp"
                      alt="Dokumentasi kegiatan KKN UISB"
                      className="
                        w-full
                        h-full
                        object-cover
                        grayscale
                        transition-[filter]
                        duration-700
                        group-hover:grayscale-0
                      "
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.61,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setActiveCard("three")}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  absolute
                  bottom-[4%]
                  right-[4%]
                  w-[82%]
                  sm:w-[78%]
                  lg:w-[94%]
                  cursor-pointer
                  ${activeCard === "three" ? "z-40" : "z-30"}
                `}
              >
                <div
                  className="
                    relative
                    rounded-xl
                    overflow-hidden
                    border
                    border-white/20
                    bg-zinc-900/95
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]
                    ring-1
                    ring-white/5
                    group
                  "
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <SafeImage
                      src="/images/stories/last1.webp"
                      alt="Dokumentasi perjalanan KKN UISB"
                      className="
                        w-full
                        h-full
                        object-cover
                        grayscale
                        transition-[filter]
                        duration-700
                        group-hover:grayscale-0
                      "
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
