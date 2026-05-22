"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" aria-label="Services" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              A complete project management practice — and a{" "}
              <em className="italic gradient-text">single accountable principal.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              We embed at the highest level of your project. From feasibility to handover, every
              decision is owned, every dollar is tracked, and every risk has a name on it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-2xl bg-white/[0.03] p-7 ring-1 ring-white/10 backdrop-blur"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(140% 80% at 0% 0%, rgba(59,130,246,0.15), transparent 60%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-electric)]/15 text-[var(--color-electric-2)] ring-1 ring-[var(--color-electric)]/25 transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      <h3 className="relative mt-6 font-display text-2xl tracking-tight text-white">
        {service.title}
      </h3>
      <p className="relative mt-3 text-white/70 leading-relaxed">{service.description}</p>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
          >
            {b}
          </li>
        ))}
      </ul>

      {/* Per-service stat (Numy pattern) */}
      <div className="relative mt-6 flex items-baseline justify-between border-t border-white/10 pt-5">
        <div>
          <p className="font-display text-3xl tracking-tight text-white">{service.stat.value}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
            {service.stat.label}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-electric)]" />
      {children}
    </span>
  );
}
