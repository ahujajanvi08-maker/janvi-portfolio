"use client";

import { motion } from "framer-motion";

const notebookCopy = {
  coverTitle: "Janvi Ahuja",
  coverSubtitle: "personal notebook",
};

export function NotebookClosing() {
  return (
    <div className="relative" aria-hidden>
      {/* Soft shadow */}
      <div
        className="absolute -bottom-4 left-1/2 h-6 w-[85%] -translate-x-1/2 rounded-[50%] blur-xl"
        style={{ background: "var(--shadow-medium)" }}
      />

      <motion.div
        initial={{ rotateX: 8 }}
        whileInView={{ rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1000 }}
        className="relative h-[200px] w-[160px] sm:h-[220px] sm:w-[175px]"
      >
        {/* Closed notebook — resting at the end */}
        <div
          className="absolute inset-0 rounded-r-md rounded-l-sm"
          style={{
            background:
              "linear-gradient(145deg, #b8998f, #9a8078)",
            boxShadow:
              "0 12px 40px var(--shadow-medium), inset 2px 0 8px rgba(255,255,255,0.1)",
          }}
        >
          {/* Cover text */}
          <div className="flex h-full flex-col items-center justify-center px-4">
            <p className="font-display text-lg tracking-tight text-paper/95 sm:text-xl">
              {notebookCopy.coverTitle}
            </p>
            <p className="mt-2 font-sans text-[0.55rem] uppercase tracking-[0.24em] text-paper/60">
              {notebookCopy.coverSubtitle}
            </p>
          </div>

          {/* Debossed frame */}
          <div className="absolute inset-3 rounded-sm border border-paper/10" />

          {/* Ribbon bookmark */}
          <div
            className="absolute -top-0.5 right-10 h-12 w-2.5 rounded-b-sm"
            style={{
              background: "linear-gradient(to bottom, var(--terracotta), var(--terracotta-deep))",
            }}
          />

          {/* Elastic band */}
          <div
            className="absolute bottom-0 right-6 top-0 w-[2px] opacity-25"
            style={{ background: "#7a665e" }}
          />
        </div>

        {/* Page edge hint */}
        <div
          className="absolute -right-[2px] bottom-[3px] top-[3px] w-[3px] rounded-r-sm"
          style={{
            background: "linear-gradient(to right, var(--paper), #f0ebe4)",
          }}
        />

        {/* Spine */}
        <div
          className="absolute bottom-0 left-0 top-0 w-[5px] rounded-l-sm"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.12), transparent)",
          }}
        />
      </motion.div>
    </div>
  );
}
