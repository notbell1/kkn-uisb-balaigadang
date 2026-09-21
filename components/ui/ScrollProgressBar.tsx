import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#2DD4BF] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(45,212,191,0.6)]"
      style={{ scaleX }}
    />
  );
};
