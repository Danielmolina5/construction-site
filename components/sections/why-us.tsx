"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { process } from "@/lib/data";

export function WhyUs() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      aria-label="Our process"
      className="relative overflow-hidden bg-[var(--color-ink-2)] py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Why choose GAT</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              A process built to be <em className="italic gradient-text">boring on the worst day.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              Five stages. One accountable principal. Every project follows the same disciplined
              path — so the surprises stop being surprises.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* Horizontal connector (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-[44px] hidden h-px bg-white/10 lg:block"
          />
          <motion.div
            aria-hidden
            style={{ scaleX: lineScaleX }}
            className="pointer-events-none absolute inset-x-6 top-[44px] hidden h-px origin-left bg-gradient-to-r from-[var(--color-electric)] to-transparent lg:block"
          />

          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal as="li" key={step.title} delay={i * 0.08}>
                  <div className="relative">
                    <div className="relative flex h-[88px] items-start">
                      <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-electric)] text-white ring-4 ring-[var(--color-ink-2)] shadow-[0_18px_40px_-12px_rgba(59,130,246,0.6)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="absolute -top-3 left-14 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-white/65 leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
