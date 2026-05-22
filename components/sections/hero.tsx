"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/animated/stat-counter";
import { BlueprintGrid } from "@/components/animated/blueprint-grid";
import { RotatingHeadline } from "@/components/animated/rotating-headline";
import { brand, heroCarousel, heroHeadlines, scarcity, stats } from "@/lib/data";

const CAROUSEL_MS = 5200;

export function Hero() {
  const [active, setActive] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % heroCarousel.length),
      CAROUSEL_MS
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden grain"
    >
      {/* Image carousel (Numy pattern) */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence>
          {heroCarousel.map((img, i) =>
            i === active ? (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-ink)]/82 via-[var(--color-ink)]/70 to-[var(--color-ink)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
      <BlueprintGrid />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-between pt-32 pb-12 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <Eyebrow />

            <RotatingHeadline
              phrases={heroHeadlines}
              intervalMs={4400}
              className="mt-6 text-balance font-display text-[44px] leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            />

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 md:text-xl">
              {brand.full} delivers precision, leadership, and absolute execution
              for the projects that define skylines, communities, and industries.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a private call
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <PlayCircle className="h-4 w-4" />
                View projects
              </Button>
            </div>

            {/* Carousel indicators */}
            <div className="mt-8 flex items-center gap-2" aria-label="Hero scene">
              {heroCarousel.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show scene ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-white" : "w-5 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-300/15 px-3 py-1 ring-1 ring-amber-300/30 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <Sparkles className="h-3.5 w-3.5" />
                Scarcity
              </div>
              <p className="mt-4 font-display text-xl text-white">{scarcity.badge}</p>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">{scarcity.detail}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-electric-2)] hover:text-white transition-colors"
              >
                Claim a slot
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--color-ink)]/80 backdrop-blur p-6 md:p-8">
              <p className="font-display text-4xl md:text-5xl tracking-tight text-white">
                <StatCounter
                  value={s.value}
                  prefix={"prefix" in s ? s.prefix : ""}
                  suffix={s.suffix}
                />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55">
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        Scroll
      </div>
    </section>
  );
}

function Eyebrow() {
  return (
    <motion.span
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/15 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-electric)] shadow-[0_0_0_4px_rgba(59,130,246,0.25)]" />
      Elite construction project management
    </motion.span>
  );
}
