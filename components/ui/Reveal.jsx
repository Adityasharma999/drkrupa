"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Scroll-reveal wrapper with a gentle fade + slide-up. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
  duration = 0.7,
  once = true,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
