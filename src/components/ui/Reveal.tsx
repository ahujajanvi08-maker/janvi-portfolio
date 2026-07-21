"use client";

import { motion, type Variants } from "framer-motion";
import { reveal, staggerContainer, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variants;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = reveal,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variant}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}
