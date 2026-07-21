"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { imageReveal, viewport } from "@/lib/motion";

export function StoryPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.03]);
  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={imageReveal}
      className="relative aspect-[4/5] w-full overflow-hidden lg:sticky lg:top-28 lg:self-start"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reducedMotion ? undefined : { scale, y }}
      >
        <Image
          src="/janvi.png"
          alt="Janvi Ahuja"
          fill
          priority={false}
          sizes="(max-width: 1024px) 85vw, 40vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
