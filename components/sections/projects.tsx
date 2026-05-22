"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { projects, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const FILTERS: (ProjectCategory | "All")[] = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Healthcare",
  "Education",
];

export function Projects() {
  const [active, setActive] = React.useState<(typeof FILTERS)[number]>("All");

  const filtered = React.useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" aria-label="Featured projects" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Featured projects</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Landmarks delivered.
              <br />
              <em className="italic gradient-text">Skylines in progress.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              A selection of recent work across commercial, healthcare, industrial, residential, and
              education sectors. Each engagement led by a senior GAT principal.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "h-10 rounded-full px-4 text-sm font-medium transition-all duration-300 ring-1",
                active === f
                  ? "bg-white text-[var(--color-ink)] ring-white"
                  : "bg-white/5 text-white/75 ring-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <ul
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-12 auto-rows-fr"
          aria-live="polite"
        >
          {filtered.map((p, i) => {
            const isFeature = i % 5 === 0;
            return (
              <Reveal
                as="li"
                key={p.slug}
                delay={(i % 4) * 0.05}
                className={cn(isFeature ? "lg:col-span-7" : "lg:col-span-5")}
              >
                <ProjectCard project={p} />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 120, damping: 14 });

  function handleMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.a
      ref={ref}
      href={`#contact`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative block h-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-[var(--color-steel-2)] will-change-transform"
    >
      <div className="relative aspect-[16/11] overflow-hidden md:aspect-[16/10]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.client}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/30 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <StatusPill status={project.status} />
          <span className="rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 ring-1 ring-white/15 backdrop-blur">
            {project.category}
          </span>
        </div>

        <ArrowUpRight className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/15 backdrop-blur-md transition-all group-hover:bg-white group-hover:text-[var(--color-ink)] group-hover:rotate-45" />
      </div>

      <div className="relative p-6 md:p-7">
        <p className="text-xs text-white/55 uppercase tracking-[0.18em]">{project.client}</p>
        <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-white/65 leading-relaxed">{project.blurb}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
          <Meta label="Location" value={project.location} icon={<MapPin className="h-3.5 w-3.5" />} />
          <Meta label="Size" value={project.size} />
          <Meta label="Value" value={project.value} />
        </dl>
      </div>
    </motion.a>
  );
}

function Meta({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 flex items-center gap-1">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 text-white/85">{value}</dd>
    </div>
  );
}

function StatusPill({ status }: { status: (typeof projects)[number]["status"] }) {
  const map = {
    Completed: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/25",
    Current: "bg-[var(--color-electric)]/20 text-[var(--color-electric-2)] ring-[var(--color-electric)]/35",
    Future: "bg-white/10 text-white/85 ring-white/20",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ring-1 backdrop-blur",
        map[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
