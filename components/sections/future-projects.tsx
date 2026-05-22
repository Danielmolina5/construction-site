"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { futureRoadmap } from "@/lib/data";

export function FutureProjects() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="future"
      aria-label="Future projects and roadmap"
      className="relative overflow-hidden bg-[var(--color-steel-2)] py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Project pipeline</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              What we're <em className="italic gradient-text">building next.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              The roadmap. Live work and future commitments — with the same accountability
              standards we apply to delivered landmarks.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScaleY }}
            className="pointer-events-none absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-[var(--color-electric)] via-[var(--color-electric)] to-transparent md:left-1/2"
          />

          <ol className="relative space-y-12 md:space-y-20">
            {futureRoadmap.map((item, i) => {
              const onRight = i % 2 === 1;
              return (
                <Reveal as="li" key={item.title} delay={i * 0.05}>
                  <div
                    className={`relative grid items-start gap-4 md:grid-cols-2 md:gap-12 ${
                      onRight ? "md:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={`relative ${
                        onRight ? "md:text-left md:pl-10" : "md:text-right md:pr-10"
                      } pl-10 md:pl-0`}
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-1 inline-flex h-6 w-6 -translate-x-[10px] items-center justify-center rounded-full bg-[var(--color-electric)] ring-4 ring-[var(--color-steel-2)] md:left-1/2 md:-translate-x-1/2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </span>

                      <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        {item.year} • {item.status}
                      </p>
                      <h3 className="mt-2 font-display text-2xl tracking-tight text-white md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-white/65">{item.location}</p>
                    </div>

                    <div
                      className={`pl-10 md:pl-0 ${
                        onRight ? "md:pr-10 md:text-right" : "md:pl-10"
                      }`}
                    >
                      <div className="inline-flex items-baseline gap-2">
                        <span className="font-display text-3xl tracking-tight text-white">
                          {item.value}
                        </span>
                        <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                          project value
                        </span>
                      </div>
                      <p className="mt-3 max-w-md text-white/65 leading-relaxed">{item.blurb}</p>
                    </div>
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
