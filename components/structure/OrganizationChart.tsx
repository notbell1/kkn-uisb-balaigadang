import React from "react";
import { StructureNode } from "../../types/structure";
import { OrganizationNodeCard } from "./OrganizationNode";
import { SafeImage } from "../ui/SafeImage";

interface OrganizationChartProps {
  tree: StructureNode[];
  flatNodes: StructureNode[];
}

export const OrganizationChart: React.FC<OrganizationChartProps> = ({
  tree,
  flatNodes,
}) => {
  const ketua =
    flatNodes.find(
      (node) =>
        node.position.includes("Ketua Tim") ||
        (node.parent_id === null && node.id === 1),
    ) || tree[0];

  const wakil = flatNodes.find((node) => node.position.includes("Wakil"));

  const bph = flatNodes.filter(
    (node) =>
      node.position.includes("Sekretaris") ||
      node.position.includes("Bendahara"),
  );

  const coordinators = flatNodes.filter((node) =>
    node.position.startsWith("Koordinator"),
  );

  return (
    <div className="w-full py-4 sm:py-8">
      <div className="flex w-full flex-col items-center">
        {ketua && (
          <div className="flex max-w-full flex-col items-center">
            <OrganizationNodeCard node={ketua} isRoot />

            <div
              aria-hidden="true"
              className="
                my-1
                h-4
                w-px
                bg-purple-600/50
                sm:h-6
              "
            />
          </div>
        )}

        {wakil && (
          <div className="mb-4 flex max-w-full flex-col items-center sm:mb-6">
            <OrganizationNodeCard node={wakil} />

            <div
              aria-hidden="true"
              className="
                my-1
                h-4
                w-px
                bg-zinc-500
                sm:h-6
              "
            />
          </div>
        )}

        {bph.length > 0 && (
          <div className="mb-6 flex w-full flex-col items-center sm:mb-8">
            <div className="mb-2.5 text-center sm:mb-3">
              <span
                className="
                  inline-block
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-purple-700
                  sm:text-[11px]
                "
              >
                Sekretariat & Kebendaharaan
              </span>
            </div>

            <div
              className="
                relative
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-2.5
                sm:w-auto
                sm:flex-row
                sm:gap-6
              "
            >
              {bph.map((item) => (
                <div
                  key={item.id}
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    justify-center
                    sm:w-auto
                  "
                >
                  <OrganizationNodeCard node={item} />
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="
                my-2
                h-6
                w-px
                bg-zinc-500
                sm:my-3
                sm:h-10
              "
            />
          </div>
        )}

        <div className="w-full">
          <div className="mb-4 text-center sm:mb-6">
            <span
              className="
                inline-block
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-purple-700
                sm:text-xs
              "
            >
              Koordinator & Divisi Operasional
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:gap-5
              md:grid-cols-2
              md:gap-6
              lg:grid-cols-3
              lg:gap-7
            "
          >
            {coordinators.map((coord) => {
              const members = flatNodes.filter(
                (node) => node.parent_id === coord.id,
              );

              return (
                <div
                  key={coord.id}
                  className="
                    group
                    flex
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-zinc-400
                    bg-zinc-100
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-purple-500/50
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      border-b
                      border-zinc-300
                      px-4
                      py-3
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="
                          min-w-0
                          truncate
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-purple-700
                          sm:text-[11px]
                        "
                      >
                        {coord.division}
                      </span>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-orange-500
                        "
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="px-3.5 pt-3.5 sm:px-5 sm:pt-5">
                    <OrganizationNodeCard node={coord} />
                  </div>

                  {members.length > 0 && (
                    <div
                      className="
                        mt-3
                        border-t
                        border-zinc-300
                        px-3.5
                        pb-3.5
                        pt-3
                        sm:mt-4
                        sm:px-5
                        sm:pb-5
                        sm:pt-4
                      "
                    >
                      <div
                        className="
                          mb-3
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-zinc-500
                          sm:mb-4
                          sm:text-[10px]
                        "
                      >
                        Anggota Divisi
                      </div>

                      <div className="space-y-2.5">
                        {members.map((member) => (
                          <div
                            key={member.id}
                            className="
                              group/member
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-zinc-300
                              bg-white
                              p-2
                              text-left
                              shadow-sm
                              transition-all
                              duration-200
                              hover:border-purple-500/40
                              hover:bg-purple-50
                              sm:gap-3.5
                              sm:p-2.5
                            "
                          >
                            <div
                              className="
                                relative
                                h-20
                                w-20
                                shrink-0
                                overflow-hidden
                                rounded-full
                                border-2
                                border-zinc-300
                                bg-zinc-200
                              "
                            >
                              <SafeImage
                                src={member.photo}
                                alt={`Foto ${member.name}`}
                                containerClassName="h-full w-full"
                                className="
                                  h-full
                                  w-full
                                  object-cover
                                  object-center
                                "
                                loading="eager"
                                decoding="async"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p
                                className="
                                  truncate
                                  text-xs
                                  font-medium
                                  leading-tight
                                  text-zinc-900
                                  transition-colors
                                  group-hover/member:text-purple-700
                                  sm:text-sm
                                "
                              >
                                {member.name}
                              </p>

                              <p
                                className="
                                  mt-1
                                  truncate
                                  font-mono
                                  text-[10px]
                                  text-zinc-500
                                  sm:text-xs
                                "
                              >
                                {member.nim}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    className="
                      mt-auto
                      h-[2px]
                      w-0
                      bg-orange-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
