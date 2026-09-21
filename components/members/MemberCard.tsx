import React from "react";
import { motion } from "motion/react";
import { Instagram, Phone, ArrowUpRight } from "lucide-react";
import { Member } from "../../types/member";
import { SafeImage } from "../ui/SafeImage";
import { cn } from "../../lib/utils/cn";

interface MemberCardProps {
  member: Member;
  index?: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
  index = 0,
}) => {
  const instagramUsername = member.instagram?.replace(/^@/, "");

  const whatsappNumber = member.phone
    ? `62${member.phone.replace(/[^0-9]/g, "").replace(/^0/, "")}`
    : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min((index % 6) * 0.08, 0.4),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative flex h-full w-full flex-col",
        "overflow-hidden rounded-2xl",
        "border border-white/15",
        "bg-black",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-purple-500/60",
        "hover:shadow-xl",
      )}
    >
      <div
        className="
          relative
          h-[210px]
          w-full
          shrink-0
          overflow-hidden
          bg-black
          sm:h-[250px]
          md:h-[270px]
          lg:h-[260px]
          xl:h-[280px]
        "
      >
        <SafeImage
          src={member.photo}
          alt={`Foto ${member.name} - KKN UISB 2026`}
          hoverZoom
          className="h-full w-full object-cover object-center"
        />

        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-24
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />

        <span
          className="
            absolute bottom-3 right-3
            font-mono
            text-[9px]
            text-white/40
            sm:bottom-4 sm:right-4
            sm:text-[10px]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className="
          flex
          flex-1
          flex-col
          p-4
          sm:p-5
        "
      >
        <div className="shrink-0">
          <h3
            className="
      line-clamp-2
      font-editorial
      text-base
      font-normal
      leading-tight
      tracking-tight
      text-white
      transition-colors duration-300
      group-hover:text-purple-400
      sm:text-xl
    "
          >
            {member.name}
          </h3>

          {member.position && (
            <p
              className="
        mt-1
        truncate
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.12em]
        text-purple-400
        sm:text-[10px]
      "
            >
              {member.position}
            </p>
          )}

          <div className="mt-2 min-h-[2.5rem] space-y-0.5">
            <p
              className="
        truncate
        font-mono
        text-[9px]
        uppercase
        tracking-[0.08em]
        text-white/40
        sm:text-[10px]
      "
            >
              NIM. {member.nim}
            </p>

            <p
              className="
        line-clamp-2
        text-[10px]
        leading-relaxed
        text-white/60
        sm:text-xs
      "
            >
              {member.prodi}
            </p>
          </div>
        </div>

        <div
          className="
            mt-4
            min-h-[78px]
            shrink-0
            border-t border-white/10
            pt-3
            sm:mt-5
            sm:min-h-[86px]
            sm:pt-4
          "
        >
          {member.quote ? (
            <p
              className="
                line-clamp-3
                text-[10px]
                font-light
                italic
                leading-relaxed
                text-white/55
                sm:text-[11px]
              "
            >
              “{member.quote}”
            </p>
          ) : (
            <span className="select-none text-transparent">—</span>
          )}
        </div>

        <div
          className="
            mt-auto
            flex
            min-h-[38px]
            items-center
            justify-between
            gap-2
            border-t border-white/10
            pt-3
            sm:min-h-[42px]
            sm:pt-4
          "
        >
          {member.instagram ? (
            <a
              href={`https://instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Instagram @${instagramUsername}`}
              className="
                flex
                min-w-0
                max-w-[55%]
                items-center
                gap-1.5
                text-[9px]
                text-white/45
                transition-colors
                hover:text-purple-400
                sm:text-[10px]
              "
            >
              <Instagram className="h-3.5 w-3.5 shrink-0 text-purple-400" />

              <span className="truncate">@{instagramUsername}</span>
            </a>
          ) : (
            <span />
          )}

          {member.phone ? (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Kontak ${member.phone}`}
              className="
                flex
                shrink-0
                items-center
                gap-1.5
                text-[9px]
                text-white/45
                transition-colors
                hover:text-orange-400
                sm:text-[10px]
              "
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-orange-400" />

              <span className="font-mono">{member.phone}</span>
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>

      <div
        className="
          absolute bottom-0 left-0
          h-[2px] w-0
          bg-orange-500
          transition-all duration-500
          group-hover:w-full
        "
      />

      <ArrowUpRight
        className="
          pointer-events-none
          absolute right-3 top-3
          h-4 w-4
          translate-x-[-4px]
          translate-y-1
          text-orange-400
          opacity-0
          transition-all duration-300
          group-hover:translate-x-0
          group-hover:translate-y-0
          group-hover:opacity-100
          sm:right-4 sm:top-4
        "
      />
    </motion.article>
  );
};
