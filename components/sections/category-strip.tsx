"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { categories } from "@/lib/data";

export function CategoryStrip() {
  return (
    <section
      id="sectors"
      aria-label="Sectors we serve"
      className="relative py-20 md:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>Sectors</Eyebrow>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-white md:text-5xl text-balance">
              The work we do, by <em className="italic gradient-text">sector.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="max-w-md text-white/65">
              Specialty matters. Our partners are sector-led — and the senior name on your project
              has lived inside your industry for at least a decade.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-12">
        <div className="relative mask-fade-x">
          <ul
            className="flex gap-4 overflow-x-auto px-6 pb-6 lg:px-12 scroll-px-6 lg:scroll-px-12 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="list"
          >
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.name}
                  className="snap-start shrink-0 w-[260px] sm:w-[300px] lg:w-[340px]"
                >
                  <a
                    href="#projects"
                    className="group relative block overflow-hidden rounded-3xl ring-1 ring-white/10 bg-[var(--color-steel-2)]"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={c.image}
                        alt={`${c.name} sector`}
                        fill
                        sizes="(min-width: 1024px) 340px, 300px"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/30 to-transparent" />

                      <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <ArrowUpRight className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/15 backdrop-blur-md transition-all group-hover:bg-white group-hover:text-[var(--color-ink)] group-hover:rotate-45" />

                      <div className="absolute inset-x-5 bottom-5">
                        <p className="text-xs text-white/60 uppercase tracking-[0.18em]">
                          {c.count} projects
                        </p>
                        <p className="mt-1 font-display text-2xl tracking-tight text-white">
                          {c.name}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
