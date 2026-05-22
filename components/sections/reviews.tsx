"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { reviews } from "@/lib/data";

export function Reviews() {
  const [index, setIndex] = React.useState(0);
  const len = reviews.length;

  React.useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % len), 8000);
    return () => window.clearInterval(id);
  }, [len]);

  const current = reviews[index];

  return (
    <section
      id="reviews"
      aria-label="Client reviews"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-ink)] to-[var(--color-ink-2)] py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Client reviews</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              The people we <em className="italic gradient-text">build for.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              Owners, developers, and institutions who came back for a second project — and then a
              third. That's the only review that matters.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-8 md:p-12">
              <Quote className="h-10 w-10 text-[var(--color-electric)]/60" />

              <div className="relative mt-6 min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={current.author}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-display text-2xl leading-snug tracking-tight text-white md:text-3xl">
                      "{current.quote}"
                    </p>
                    <footer className="mt-8 flex flex-col gap-1">
                      <p className="text-white font-medium">{current.author}</p>
                      <p className="text-white/60">{current.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                        Project: {current.project}
                      </p>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-1" aria-label={`${current.rating} of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < current.rating
                          ? "fill-[var(--color-electric)] text-[var(--color-electric)]"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous review"
                    onClick={() => setIndex((i) => (i - 1 + len) % len)}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    onClick={() => setIndex((i) => (i + 1) % len)}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="lg:col-span-4">
            <div className="grid gap-4">
              <Metric label="Avg. schedule variance" value="−6.4%" hint="Ahead of plan" />
              <Metric label="Avg. budget variance" value="−4.1%" hint="Under budget" />
              <Metric label="Repeat client rate" value="98%" hint="Engagement to engagement" />
              <Metric label="Safety incidents" value="0" hint="18-month rolling" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
      <p className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</p>
      <p className="mt-2 font-display text-3xl tracking-tight text-white">{value}</p>
      <p className="mt-1 text-sm text-white/55">{hint}</p>
    </div>
  );
}
