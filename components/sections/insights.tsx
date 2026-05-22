"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { insights } from "@/lib/data";

export function Insights() {
  return (
    <section
      id="insights"
      aria-label="Market insights"
      className="relative bg-[var(--color-ink-2)] py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Market insights</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              What we're <em className="italic gradient-text">watching</em> in the market.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              Notes, playbooks, and outlooks from our principals. Practical, sector-specific, and
              meant to be read at the OAC table — not as marketing.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.06}>
              <motion.a
                href={`#${post.slug}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group block h-full overflow-hidden rounded-3xl bg-[var(--color-ink)] ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 ring-1 ring-white/15 backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>{post.date}</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl leading-snug tracking-tight text-white text-balance">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-white/65 leading-relaxed">{post.excerpt}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm text-white/55">By {post.author}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-electric-2)]">
                      Read
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
