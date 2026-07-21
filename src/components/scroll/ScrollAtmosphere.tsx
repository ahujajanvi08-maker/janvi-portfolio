"use client";

import { useEffect, useState } from "react";
import { sectionAtmosphere } from "@/content/site";

function lerpColor(a: string, b: string, t: number): string {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ];
  };

  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  const red = Math.round(r1 + (r2 - r1) * t);
  const green = Math.round(g1 + (g2 - g1) * t);
  const blue = Math.round(b1 + (b2 - b1) * t);

  return `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

export function ScrollAtmosphere() {
  const [colors, setColors] = useState<{ bg: string; accent: string }>({
    bg: sectionAtmosphere[0].bg,
    accent: sectionAtmosphere[0].accent,
  });

  useEffect(() => {
    const sections = sectionAtmosphere
      .map((item) => ({
        ...item,
        el: document.getElementById(item.id),
      }))
      .filter((item) => item.el);

    const update = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.45;

      let activeIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = sections[i].el;
        if (!el) continue;
        if (el.offsetTop <= scrollY) activeIndex = i;
      }

      const current = sections[activeIndex];
      const next = sections[activeIndex + 1];

      if (!current) return;

      if (!next?.el) {
        setColors({ bg: current.bg, accent: current.accent });
        document.documentElement.style.setProperty("--section-bg", current.bg);
        document.documentElement.style.setProperty("--section-accent", current.accent);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollY - current.el!.offsetTop) /
            (next.el.offsetTop - current.el!.offsetTop),
        ),
      );

      const bg = lerpColor(current.bg, next.bg, progress);
      const accent = lerpColor(current.accent, next.accent, progress);

      setColors({ bg, accent });
      document.documentElement.style.setProperty("--section-bg", bg);
      document.documentElement.style.setProperty("--section-accent", accent);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="section-atmosphere"
      style={{
        backgroundColor: colors.bg,
        ["--section-accent" as string]: colors.accent,
      }}
    />
  );
}
