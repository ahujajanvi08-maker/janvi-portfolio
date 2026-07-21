"use client";

import { motion } from "framer-motion";
import {
  inkRevealFadeTransition,
  inkRevealTransition,
  sectionHeadingViewport,
} from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const defaultClassName =
  "font-sans text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-[var(--hero-text-muted)]";

type SectionHeadingInkRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionHeadingInkReveal({
  children,
  className,
  id,
}: SectionHeadingInkRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <motion.p
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={sectionHeadingViewport}
        transition={inkRevealFadeTransition}
        className={cn(defaultClassName, className)}
      >
        {children}
      </motion.p>
    );
  }

  return (
    <motion.p
      id={id}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={sectionHeadingViewport}
      transition={inkRevealTransition}
      className={cn(defaultClassName, className)}
    >
      {children}
    </motion.p>
  );
}
