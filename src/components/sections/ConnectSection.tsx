"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { revealSoft, viewport } from "@/lib/motion";
import "@/components/hero/hero.css";
import "./connect.css";

function getLondonGreeting(date: Date): string {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      hour12: false,
    }).format(date),
  );

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
}

function LondonClock() {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [use12Hour, setUse12Hour] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: use12Hour,
        }).format(now),
      );
      setGreeting(getLondonGreeting(now));
    };

    update();
    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, [use12Hour]);

  return (
    <div className="flex flex-col items-center gap-1 md:items-end">
      <button
        type="button"
        onClick={() => setUse12Hour((current) => !current)}
        className="connect-clock cursor-pointer font-sans text-[clamp(1.125rem,1.75vw,1.5rem)] font-light tabular-nums tracking-wide transition-opacity duration-200 hover:opacity-75"
        aria-label={`London time. ${greeting}. Click to switch to ${use12Hour ? "24" : "12"} hour format.`}
      >
        {time}
      </button>
      <span className="font-sans text-[0.6875rem] font-light italic text-white/55">
        {greeting}
      </span>
    </div>
  );
}

export function ConnectSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_7raiwti",
        "template_o1o2k8p",
        formRef.current,
        "L8w90I2FqnWSGimcR",
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="connect" className="connect-editorial relative">
      <div className="hero-shell pb-16 pt-14 md:pb-20 md:pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealSoft}
          className="mx-auto max-w-[48rem] text-center"
        >
          <div className="space-y-8">
            <p className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--hero-text)]">
              Thanks for stopping by.
            </p>
            <p className="font-serif text-[clamp(1.0625rem,1.35vw,1.1875rem)] leading-[1.75] text-[var(--hero-text-muted)]">
              I&apos;m always curious about new problems, new people,
              and new ways of thinking.
            </p>
            <p className="font-serif text-[clamp(1.0625rem,1.35vw,1.1875rem)] leading-[1.75] text-[var(--hero-text-muted)]">
              Let&apos;s connect.
            </p>
            <p className="font-hand text-[clamp(1.75rem,3.5vw,2.5rem)] leading-none text-[var(--hero-text-muted)]">
              — Janvi
            </p>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealSoft}
          onSubmit={handleSubmit}
          className="mt-12 max-w-[42rem] space-y-5 md:mt-14"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="connect-input w-full rounded-sm px-4 py-3 font-sans text-[0.9375rem] text-[var(--hero-text)] placeholder:text-[var(--hero-text-muted)]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="connect-input w-full rounded-sm px-4 py-3 font-sans text-[0.9375rem] text-[var(--hero-text)] placeholder:text-[var(--hero-text-muted)]"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Your message"
            className="connect-input w-full resize-y rounded-sm px-4 py-3 font-sans text-[0.9375rem] leading-[1.6] text-[var(--hero-text)] placeholder:text-[var(--hero-text-muted)]"
          />

          <button
            type="submit"
            disabled={submitting}
            className="connect-submit cursor-pointer rounded-sm px-8 py-3 font-sans text-[0.875rem] tracking-wide"
          >
            Send
          </button>

          {status === "success" && (
            <p className="font-sans text-[0.9375rem] text-[var(--hero-text-muted)]">
              Thanks! I&apos;ll be in touch soon.
            </p>
          )}

          {status === "error" && (
            <p className="font-sans text-[0.9375rem] text-[var(--hero-text-muted)]">
              Something went wrong. Please email me directly.
            </p>
          )}
        </motion.form>
      </div>

      <footer className="w-full bg-[#111111] text-white">
        <div className="hero-shell py-12 md:py-14">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-center md:text-left">
              <p className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] font-light text-white/90">
                <span aria-hidden="true">📍</span> London, UK
              </p>

              <LondonClock />
            </div>

            <div className="flex items-center justify-center gap-8 md:gap-12">
              <a
                href="mailto:janvi.ahuja26@imperial.ac.uk"
                className="connect-footer-link font-serif text-[clamp(0.9375rem,1.4vw,1.125rem)] font-bold uppercase tracking-[0.08em] text-white"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/janviahuja/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-footer-link font-serif text-[clamp(0.9375rem,1.4vw,1.125rem)] font-bold uppercase tracking-[0.08em] text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
