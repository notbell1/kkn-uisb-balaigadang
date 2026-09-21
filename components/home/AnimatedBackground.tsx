import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] bg-gradient-to-b from-[#2DD4BF]/10 via-[#1E3A5F]/20 to-transparent rounded-full blur-3xl opacity-60" />

      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1E3A5F]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0B172A] rounded-full blur-2xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
};
