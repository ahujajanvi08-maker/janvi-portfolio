"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.97h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23h-4V8.5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HeroFooterBar() {
  const reducedMotion = useReducedMotion();
  const { footer } = hero;

  return (
    <motion.footer
      initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mt-10 border-t pt-6 md:mt-12"
      style={{ borderColor: "var(--hero-border)" }}
    >
      <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-3">
        <li className="flex items-center">
          <a
            href="/resume.pdf"
            download="Janvi_Ahuja_Resume.pdf"
            className="hero-footer-link inline-flex items-center gap-2 font-sans text-[0.8125rem] tracking-wide"
          >
            <DownloadIcon />
            {footer.resume.label}
          </a>
        </li>

        <li className="flex items-center gap-4 sm:gap-0">
          <span aria-hidden className="hero-footer-divider hidden sm:mx-4 sm:inline">
            |
          </span>
          <a
            href="https://www.linkedin.com/in/janviahuja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-footer-link inline-flex items-center gap-2 font-sans text-[0.8125rem] tracking-wide"
          >
            <LinkedInIcon />
            {footer.linkedin.label}
          </a>
        </li>

        <li className="flex items-center gap-4 sm:gap-0">
          <span aria-hidden className="hero-footer-divider hidden sm:mx-4 sm:inline">
            |
          </span>
          <a
            href={`mailto:${footer.email}`}
            className="hero-footer-link inline-flex items-center gap-2 font-sans text-[0.8125rem] tracking-wide"
          >
            <EmailIcon />
            {footer.email}
          </a>
        </li>

        <li className="flex items-center gap-4 sm:gap-0">
          <span aria-hidden className="hero-footer-divider hidden sm:mx-4 sm:inline">
            |
          </span>
          <span className="hero-footer-link inline-flex items-center gap-2 font-sans text-[0.8125rem] tracking-wide">
            <LocationIcon />
            {footer.location}
          </span>
        </li>
      </ul>
    </motion.footer>
  );
}
