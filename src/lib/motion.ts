import type { Transition, Variants } from "framer-motion";

export const easing = {
  editorial: [0.22, 1, 0.36, 1] as const,
  cinematic: [0.16, 1, 0.3, 1] as const,
  soft: [0.45, 0, 0.15, 1] as const,
};

export const duration = {
  fast: 0.5,
  medium: 0.85,
  slow: 1.2,
  cinematic: 1.6,
};

export const transition = {
  editorial: {
    duration: duration.medium,
    ease: easing.editorial,
  } satisfies Transition,
  slow: {
    duration: duration.slow,
    ease: easing.editorial,
  } satisfies Transition,
  cinematic: {
    duration: duration.cinematic,
    ease: easing.cinematic,
  } satisfies Transition,
};

export const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transition.cinematic,
  },
};

export const revealSoft: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.slow,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.slow,
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.03, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: transition.cinematic,
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.slow,
  },
};

export const viewport = {
  once: true,
  margin: "-12% 0px -12% 0px" as const,
};

export const sectionHeadingViewport = {
  once: true,
  margin: "-10% 0px -10% 0px" as const,
};

export const inkRevealTransition: Transition = {
  duration: 0.8,
  ease: [0.42, 0, 0.58, 1],
};

export const inkRevealFadeTransition: Transition = {
  duration: 0.55,
  ease: [0.42, 0, 0.58, 1],
};
