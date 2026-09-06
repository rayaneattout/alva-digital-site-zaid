"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { EASE_OUT, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/**
 * Fade + translate au scroll, une seule fois. Respecte prefers-reduced-motion
 * en retombant sur un simple fondu (pas de déplacement).
 */
export function Reveal({ delay = 0, y = 24, children, className, ...rest }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: reduceMotion ? 0.4 : 0.7, delay, ease: EASE_OUT }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
