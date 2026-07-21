"use client";

import { motion } from "framer-motion";
import { story } from "@/content/site";
import { reveal, textReveal, viewport } from "@/lib/motion";
import { SectionHeadingInkReveal } from "@/components/ui/SectionHeadingInkReveal";
import { StoryPortrait } from "@/components/sections/StoryPortrait";
import "@/components/hero/hero.css";
import "./story.css";

export function StorySection() {
  return (
    <section
      id="story"
      className="story-editorial relative pb-14 md:pb-20"
    >
      <div className="hero-shell">
        <SectionHeadingInkReveal>My Story</SectionHeadingInkReveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <StoryPortrait />

          <div className="lg:pt-2">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={reveal}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--hero-text)]"
            >
              {story.heading}
            </motion.h2>

            <div className="mt-8 space-y-6 md:mt-10 md:space-y-7">
              {story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={textReveal}
                  className="font-sans text-[clamp(0.9375rem,1.15vw,1.0625rem)] leading-[1.75] text-[var(--hero-text-muted)]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
