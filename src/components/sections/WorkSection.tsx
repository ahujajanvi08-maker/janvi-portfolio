"use client";

import { motion, type Variants } from "framer-motion";
import type { ProjectEntry } from "@/content/site";
import { projects } from "@/content/site";
import { viewport } from "@/lib/motion";
import { SectionHeadingInkReveal } from "@/components/ui/SectionHeadingInkReveal";
import "@/components/hero/hero.css";
import "./work.css";

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={cardReveal}
      className="work-card group flex h-full flex-col rounded-md p-6 md:p-7"
    >
      <h3 className="font-serif text-[clamp(1.125rem,1.6vw,1.375rem)] font-bold leading-snug tracking-tight text-[var(--hero-text)]">
        {project.title}
      </h3>

      <p className="mt-2 font-sans text-[0.8125rem] tracking-wide text-[var(--hero-text-muted)]">
        {project.dates}
      </p>

      <p className="work-card-hover-story">
        <span className="work-card-hover-story-inner font-serif text-[0.8125rem] italic leading-snug text-[var(--hero-accent)]">
          {project.hoverStory}
        </span>
      </p>

      <ul className="mt-5 space-y-2.5">
        {project.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2.5 font-sans text-[0.875rem] leading-[1.55] text-[var(--hero-text-muted)]"
          >
            <span
              aria-hidden
              className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hero-text-muted)]"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function WorkSection() {
  return (
    <section
      id="work"
      className="work-editorial relative pt-8 pb-24 md:pt-12 md:pb-32"
    >
      <div className="hero-shell">
        <SectionHeadingInkReveal>Things I&apos;ve Built</SectionHeadingInkReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
