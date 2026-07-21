"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PortraitFrameProps = {
  className?: string;
};

export function PortraitFrame({ className }: PortraitFrameProps) {
  return (
    <motion.div
      data-cursor="image"
      className={cn(
        "group relative aspect-[4/5] overflow-hidden shadow-[0_24px_64px_var(--shadow-soft)]",
        className,
      )}
    >
      <div
        className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(165deg, color-mix(in srgb, var(--sage) 35%, var(--paper)) 0%, color-mix(in srgb, var(--lavender) 25%, var(--paper)) 100%)",
        }}
      />

      {/* Replace with /public/portrait.jpg when available */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[5rem] tracking-tight text-ink/10 md:text-[6rem]">
          J
        </span>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--ink) 2px, var(--ink) 3px)",
        }}
      />
    </motion.div>
  );
}
