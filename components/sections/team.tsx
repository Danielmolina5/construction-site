"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
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
              Senior leaders with two decades on the most consequential projects in the country.
              No project goes without a principal-in-charge. Period.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 0.05}>
              <Card member={m} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ member }: { member: (typeof team)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-[var(--color-steel-2)] ring-1 ring-white/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />

        <a
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md text-white transition-all hover:bg-white hover:text-[var(--color-ink)]"
        >
          <Linkedin className="h-4 w-4" />
        </a>

        <div className="absolute inset-x-5 bottom-5">
          <p className="text-xs text-white/60 uppercase tracking-[0.18em]">
            {member.years}+ years
          </p>
          <h3 className="mt-1 font-display text-2xl text-white">{member.name}</h3>
          <p className="text-white/75">{member.role}</p>
        </div>
      </div>

      <div className="px-5 py-5">
        <ul className="flex flex-wrap gap-2">
          {member.specialties.map((s) => (
            <li
              key={s}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
