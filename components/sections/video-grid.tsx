"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { videos, videoSection } from "@/lib/data";

export function VideoGrid() {
  return (
    <section id="watch" aria-label="Video library" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{videoSection.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              {videoSection.headline.lead}{" "}
              <em className="italic gradient-text">{videoSection.headline.emphasis}</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              The work behind the work — case study walk-throughs, real Friday variance memos,
              and the founders explaining how we keep our promises.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.05}>
              <motion.a
                href={v.href}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[var(--color-steel-2)]"
              >
                <div className="relative aspect-video">
                  <Image
                    src={v.thumb}
                    alt={v.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />

                  {/* Play overlay */}
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[var(--color-ink)] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110">
                      <Play className="h-5 w-5 ml-0.5 fill-current" />
                    </span>
                  </div>

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 ring-1 ring-white/15 backdrop-blur">
                    {v.category}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white/85 ring-1 ring-white/15 backdrop-blur">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg tracking-tight text-white">{v.title}</h3>
                  <p className="mt-1 text-sm text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
