"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroFooterBar } from "@/components/hero/HeroFooterBar";
import "@/components/hero/hero.css";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  const fade = (delay: number, duration: number) => ({
    duration: reducedMotion ? 0.25 : duration,
    delay: reducedMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <section
      id="hero"
      className="hero-editorial relative flex min-h-[100dvh] flex-col pb-4 pt-28 md:pt-32 md:pb-5"
    >
      <div
        className="hero-shell flex flex-1 flex-col"
        style={{ paddingTop: "max(1.5rem, calc(30vh - 6.5rem))" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fade(0.08, 0.7)}
          className="font-display w-full max-w-[70vw] text-[clamp(5rem,12vw,10rem)] leading-[0.92] tracking-[-0.04em] text-[var(--hero-text)]"
        >
          {hero.firstName} {hero.lastName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fade(0.22, 0.8)}
          className="mt-8 w-full max-w-[85vw] font-serif text-[clamp(0.9375rem,1.75vw,1.375rem)] leading-[1.45] text-[var(--hero-text)] md:mt-10 md:whitespace-nowrap"
        >
          {hero.tagline[0].replace(/\.$/, ",")}{" "}
          <span className="italic text-[var(--hero-accent)]">
            {hero.tagline[1]}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fade(0.36, 0.9)}
          className="mt-8 max-w-[min(44rem,58vw)] font-sans text-[clamp(0.9375rem,1.15vw,1.0625rem)] leading-[1.75] text-[var(--hero-text-muted)] md:mt-10"
        >
          {hero.lead}
        </motion.p>

        <div className="min-h-0 flex-1" aria-hidden />

        <HeroFooterBar />
      </div>
    </section>
  );
}
