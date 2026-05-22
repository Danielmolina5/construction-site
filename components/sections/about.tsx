"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { aboutCopy } from "@/lib/data";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

export function About() {
  return (
    <section id="about" aria-label="About GAT" className="relative py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <Eyebrow>{aboutCopy.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
            {aboutCopy.headline}
          </h2>
          <div className="mt-6 space-y-5 text-white/70 leading-relaxed">
            {aboutCopy.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="lg:col-span-7">
          <motion.div
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl ring-1 ring-white/10"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10]">
              <Image
                src={ABOUT_IMAGE}
                alt="Senior leaders walking a job site"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Values */}
      <div className="container-page mt-20">
        <ul className="grid gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCopy.values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.05} className="bg-[var(--color-ink)] p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-electric-2)]">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-display text-xl text-white">{v.title}</h3>
              <p className="mt-2 text-white/65 leading-relaxed">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
