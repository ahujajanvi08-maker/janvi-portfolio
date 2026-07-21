"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function EditorialLink({
  href,
  children,
  className,
  external,
}: EditorialLinkProps) {
  return (
    <a
      href={href}
      data-cursor="link"
      className={cn(
        "group relative inline-block font-sans text-[0.875rem] tracking-wide text-ink-muted transition-colors hover:text-ink",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <motion.span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </a>
  );
}
