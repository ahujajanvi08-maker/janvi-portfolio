"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  overlap?: boolean;
};

export function SectionShell({
  id,
  children,
  className,
  overlap = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-6 md:px-10 lg:px-16",
        overlap && "-mt-20 pt-32 md:-mt-28 md:pt-40",
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  label: string;
  className?: string;
};

export function SectionHeading({ label, className }: SectionHeadingProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "font-sans text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-ink-faint",
        className,
      )}
    >
      {label}
    </motion.p>
  );
}
