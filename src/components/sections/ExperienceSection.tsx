"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/content/site";
import { experience } from "@/content/site";
import { revealSoft, viewport } from "@/lib/motion";
import { SectionHeadingInkReveal } from "@/components/ui/SectionHeadingInkReveal";
import "@/components/hero/hero.css";
import "./experience.css";

function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={revealSoft}
      className="group relative mb-16 last:mb-0"
    >
      <div
        aria-hidden
        className="absolute -left-3 bottom-0 top-0 w-[2px] origin-top scale-y-0 bg-[var(--hero-accent)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 md:-left-4"
      />

      <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--hero-text)] transition-colors duration-300 group-hover:text-[var(--hero-accent)]">
        {entry.company}
      </h3>
      <p className="mt-3 font-serif text-[clamp(1rem,1.5vw,1.1875rem)] italic leading-snug text-[var(--hero-text-muted)]">
        {entry.role}
      </p>
      <p className="mt-5 font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-[var(--hero-text-muted)]">
        {entry.dates}
      </p>

      <ul className="mt-6 max-w-[42rem] space-y-3.5">
        {entry.achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex gap-3 font-sans text-[clamp(0.9375rem,1.15vw,1.0625rem)] leading-[1.7] text-[var(--hero-text-muted)]"
          >
            <span
              aria-hidden
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hero-text-muted)]"
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-editorial relative pt-14 pb-14 md:pt-20 md:pb-20"
    >
      <div className="hero-shell">
        <SectionHeadingInkReveal id="experience-heading">
          Experience
        </SectionHeadingInkReveal>

        <div className="mt-14">
          {experience.map((entry) => (
            <ExperienceItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
