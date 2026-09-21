import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, GraduationCap } from "lucide-react";
import { siteConfig } from "../../lib/constants/site";

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V12a8.16 8.16 0 0 0 5.73 2.29V10.8a4.85 4.85 0 0 1-3-.94 4.8 4.8 0 0 1-1-1.17v-2z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { socials } = siteConfig;

  return (
    <footer className="bg-black border-t border-zinc-800 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://uisb.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website Universitas Islam Syekh Yusuf"
            >
              <img
                src="images/logo/uisb.png"
                alt="Logo UISB"
                className="h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100 sm:h-12"
              />
            </a>
            <Link to="/" aria-label="Kembali ke halaman utama">
              <img
                src="images/logo/kkn.png"
                alt="Logo KKN"
                className="h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100 sm:h-12"
              />
            </Link>
          </div>

          <div className="text-center order-3 sm:order-2">
            <p className="text-[11px] sm:text-xs text-zinc-500 font-medium tracking-wide">
              © 2026 KKN UISB • Kelurahan Balai Gadang, Padang.
            </p>
          </div>

          <div className="flex items-center gap-4 order-2 sm:order-3">
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram KKN UISB 2026"
                className="text-zinc-400 hover:text-purple-500 transition-colors p-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {socials.tiktok && (
              <a
                href={socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok KKN UISB 2026"
                className="text-zinc-400 hover:text-purple-500 transition-colors p-1"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            )}
            {socials.email && (
              <a
                href={`mailto:${socials.email}`}
                aria-label="Email Resmi"
                className="text-zinc-400 hover:text-orange-500 transition-colors p-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {socials.university && (
              <a
                href={socials.university}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Situs Universitas"
                className="text-zinc-400 hover:text-orange-500 transition-colors p-1"
              >
                <GraduationCap className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
