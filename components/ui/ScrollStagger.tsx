import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { cn } from "../../lib/utils/cn";

interface ScrollStaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  viewportAmount?: number | "some" | "all";
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { stagger: number; delay: number } = { stagger: 0.08, delay: 0.1 }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.05,
  className,
  viewportAmount = 0.1,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      custom={{ stagger: staggerChildren, delay: delayChildren }}
      variants={containerVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStaggerItem: React.FC<ScrollStaggerItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div variants={itemVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
};
