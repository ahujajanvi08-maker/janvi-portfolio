"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";
import "@/components/hero/hero.css";

const NAV_SECTION_IDS = navigation.map((item) => item.href.slice(1));
const OBSERVED_SECTION_IDS = ["hero", ...NAV_SECTION_IDS] as const;

function getViewportVisibleHeight(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const top = Math.max(0, rect.top);
  const bottom = Math.min(viewportHeight, rect.bottom);
  return Math.max(0, bottom - top);
}

export function Nav() {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      let maxId = "hero";
      let maxVisible = 0;

      for (const id of OBSERVED_SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const visible = getViewportVisibleHeight(el);
        if (visible > maxVisible) {
          maxVisible = visible;
          maxId = id;
        }
      }

      if (maxId === "hero") {
        setActiveHref(null);
        return;
      }

      setActiveHref(`#${maxId}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    const sections = OBSERVED_SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(() => updateActiveSection(), {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      observer.disconnect();
    };
  }, []);

  const linkClass = (href: string) => {
    const isActive = activeHref === href;

    return cn(
      "relative flex flex-col items-center font-sans text-[0.8125rem] tracking-[0.02em] no-underline transition-colors duration-[250ms] ease-out",
      isActive
        ? "font-medium text-white"
        : "text-white/55 hover:text-white/90",
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 bg-[#111111] py-5 md:py-6"
    >
      <nav className="hero-shell flex items-center justify-between">
        <a
          href="#hero"
          className="font-display text-[1.05rem] tracking-[0.06em] text-white transition-colors duration-[250ms] ease-out hover:text-white/75"
        >
          JA
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a href={item.href} className={linkClass(item.href)}>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute -bottom-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#9B87D9]"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#connect"
          className={cn(linkClass("#connect"), "md:hidden")}
        >
          <span>Connect</span>
          {activeHref === "#connect" && (
            <span
              aria-hidden
              className="absolute -bottom-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#9B87D9]"
            />
          )}
        </a>
      </nav>
    </motion.header>
  );
}
