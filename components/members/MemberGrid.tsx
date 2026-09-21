import React, { useState } from "react";
import { Member } from "../../types/member";
import { MemberCard } from "./MemberCard";
import { cn } from "../../lib/utils/cn";

interface MemberGridProps {
  members: Member[];
}

export const MemberGrid: React.FC<MemberGridProps> = ({ members }) => {
  const [selectedProdi, setSelectedProdi] = useState("Semua");

  const prodis = [
    "Semua",
    "Teknik Informatika",
    "Sistem Informasi",
    "Psikologi",
    "Kesehatan Masyarakat",
    "Ilmu Hukum",
  ];

  const filteredMembers =
    selectedProdi === "Semua"
      ? members
      : members.filter(
          (member) =>
            member.prodi.toLowerCase() === selectedProdi.toLowerCase(),
        );

  return (
    <div className="w-full">
      <nav
        aria-label="Filter program studi"
        className="
          mb-7
          border-y
          border-white/10
          py-3
          sm:mb-9
          sm:py-4
        "
      >
        <div
          className="
            flex
            w-full
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            sm:gap-x-6
            sm:gap-y-3
            lg:gap-x-8
            lg:gap-y-3
          "
        >
          {prodis.map((prodi) => {
            const isActive = selectedProdi === prodi;

            return (
              <button
                key={prodi}
                type="button"
                onClick={() => setSelectedProdi(prodi)}
                aria-pressed={isActive}
                className={cn(
                  "group relative py-1",
                  "text-[9px] sm:text-xs",
                  "font-semibold uppercase",
                  "tracking-[0.08em] sm:tracking-[0.14em]",
                  "transition-colors duration-200",
                  "focus:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-purple-500",
                  "focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-black",
                  isActive
                    ? "text-purple-400"
                    : "text-white/50 hover:text-white",
                )}
              >
                {prodi}

                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-1 left-0 h-px",
                    "bg-orange-500",
                    "transition-all duration-300",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {filteredMembers.length > 0 ? (
        <div
          className="
            grid
            grid-cols-2
            items-stretch
            gap-3
            sm:gap-5
            md:grid-cols-3
            md:gap-6
            lg:grid-cols-4
            lg:gap-7
            xl:gap-8
          "
        >
          {filteredMembers.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      ) : (
        /* =================================================
           EMPTY STATE
        ================================================= */

        <div
          className="
            border
            border-white/10
            px-5
            py-12
            text-center
            sm:py-16
          "
        >
          <p
            className="
              font-editorial
              text-lg
              font-normal
              text-white
              sm:text-xl
            "
          >
            Belum ada mahasiswa.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-md
              text-xs
              leading-relaxed
              text-white/50
              sm:text-sm
            "
          >
            Tidak terdapat mahasiswa dari program studi yang dipilih.
          </p>

          <button
            type="button"
            onClick={() => setSelectedProdi("Semua")}
            className="
              mt-5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-purple-400
              transition-colors
              hover:text-orange-400
            "
          >
            Lihat Semua Mahasiswa
          </button>
        </div>
      )}
    </div>
  );
};
