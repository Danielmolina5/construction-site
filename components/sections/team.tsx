"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { team } from "@/lib/data";

export function Team() {
  return (
    <section id="team" aria-label="Leadership team" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>The team</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              People who <em className="italic gradient-text">own the outcome.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              Senior leaders accountable for delivery on every project. No project goes without
              a principal-in-charge.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 0.05}>
              <Card member={m} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ member, index }: { member: (typeof team)[number]; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-3xl bg-white/[0.03] p-7 ring-1 ring-white/10 backdrop-blur"
    >
      {/* Hover glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 0%, rgba(59,130,246,0.15), transparent 60%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
          {String(index + 1).padStart(2, "0")}
        </span>
        <a
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/70 transition-colors hover:bg-white hover:text-[var(--color-ink)]"
        >
          <Linkedin className="h-3.5 w-3.5" />
        </a>
      </div>

      <h3 className="relative mt-8 font-display text-2xl tracking-tight text-white">
        {member.name}
      </h3>
      <p className="relative mt-2 text-white/75 leading-snug">{member.role}</p>

      <div className="relative mt-6 flex items-baseline gap-2 border-t border-white/10 pt-5">
        <span className="font-display text-3xl tracking-tight text-white">{member.years}+</span>
        <span className="text-xs uppercase tracking-[0.18em] text-white/50">years experience</span>
      </div>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {member.specialties.map((s) => (
          <li
            key={s}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
          >
            {s}
          </li>
        ))}
      </ul>

      <ArrowUpRight className="absolute right-7 bottom-7 h-4 w-4 text-white/20 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.article>
  );
}
