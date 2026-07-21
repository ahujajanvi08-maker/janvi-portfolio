"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function HeroAmbience() {
  const reducedMotion = useReducedMotion();
  const { x, y } = useMousePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const parallaxX =
    mounted && !reducedMotion ? (x / window.innerWidth - 0.5) * 20 : 0;
  const parallaxY =
    mounted && !reducedMotion ? (y / window.innerHeight - 0.5) * 16 : 0;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle checkerboard atmosphere — reference palette */}
      <motion.div
        className="hero-checker absolute inset-0 opacity-[0.07]"
        style={{ x: parallaxX * 0.3, y: parallaxY * 0.3 }}
      />

      <motion.div
        className="absolute -right-20 top-[15%] h-[400px] w-[400px] rounded-full blur-3xl"
        style={{
          background: "rgba(181, 192, 220, 0.1)",
          x: parallaxX * 0.5,
          y: parallaxY * 0.5,
        }}
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.04, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[18%] right-[18%] h-[260px] w-[260px] rounded-full blur-3xl"
        style={{
          background: "rgba(81, 42, 58, 0.35)",
          x: parallaxX * -0.35,
          y: parallaxY * -0.35,
        }}
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.25, 0.4, 0.25],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="hero-ambience-grain absolute inset-0 opacity-[0.04]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 18% 85%, rgba(0,0,0,0.28) 0%, transparent 55%)",
        }}
      />
    </div>
  );
}
