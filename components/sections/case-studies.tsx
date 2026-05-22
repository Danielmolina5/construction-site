"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { caseStudies, caseStudiesCopy } from "@/lib/data";

export function CaseStudies() {
  return (
    <section
      id="cases"
      aria-label="Before and after case studies"
      className="relative overflow-hidden bg-[var(--color-ink-2)] py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{caseStudiesCopy.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              {caseStudiesCopy.headline.lead}{" "}
              <em className="italic gradient-text">{caseStudiesCopy.headline.emphasis}</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">{caseStudiesCopy.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-14 space-y-8 lg:space-y-12">
          {caseStudies.map((c, i) => (
            <Reveal as="li" key={c.project} delay={i * 0.05}>
              <Card study={c} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ study, flip }: { study: (typeof caseStudies)[number]; flip: boolean }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="grid overflow-hidden rounded-3xl bg-[var(--color-steel-2)] ring-1 ring-white/10 lg:grid-cols-12"
    >
      {/* Image */}
      <div className={`relative aspect-[16/10] lg:aspect-auto lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <Image
          src={study.image}
          alt={`${study.project} — case study`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/40 to-transparent lg:bg-gradient-to-r" />
        <div className="absolute inset-x-5 bottom-5 lg:inset-auto lg:left-6 lg:bottom-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">{study.sector}</p>
          <p className="mt-1 font-display text-2xl tracking-tight text-white md:text-3xl">
            {study.project}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className={`p-6 md:p-10 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        {/* Big delta pull-quote */}
        <div className="rounded-2xl bg-[var(--color-electric)]/10 p-5 ring-1 ring-[var(--color-electric)]/25">
          <p className="font-display text-4xl tracking-tight text-white md:text-5xl">
            {study.pull.value}
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--color-electric-2)]">
            {study.pull.label}
          </p>
        </div>

        {/* Before / After columns */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Column
            label="Before GAT"
            icon={<XCircle className="h-4 w-4 text-red-300" />}
            tone="red"
            items={study.before}
          />
          <div className="hidden sm:flex items-center justify-center text-white/30">
            <ArrowRight className="h-5 w-5" />
          </div>
          {/* Mobile arrow */}
          <div className="sm:hidden flex items-center gap-2 text-white/40">
            <ArrowRight className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.18em]">After we owned it</span>
          </div>
          <Column
            label="After we owned it"
            icon={<CheckCircle2 className="h-4 w-4 text-emerald-300" />}
            tone="emerald"
            items={study.after}
          />
        </div>
      </div>
    </motion.article>
  );
}

function Column({
  label,
  icon,
  tone,
  items,
}: {
  label: string;
  icon: React.ReactNode;
  tone: "red" | "emerald";
  items: string[];
}) {
  const ring = tone === "red" ? "ring-red-400/20" : "ring-emerald-400/25";
  const bg = tone === "red" ? "bg-red-400/[0.06]" : "bg-emerald-400/[0.06]";
  const dot = tone === "red" ? "text-red-300/60" : "text-emerald-300/60";
  return (
    <div className={`rounded-2xl ${bg} p-4 ring-1 ${ring}`}>
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/65">
        {icon}
        {label}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((b) => (
          <li key={b} className="flex items-start gap-2 text-white/85">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${dot}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
