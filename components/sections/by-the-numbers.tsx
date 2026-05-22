import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { bigNumbers } from "@/lib/data";

export function ByTheNumbers() {
  return (
    <section
      id="numbers"
      aria-label="By the numbers"
      className="relative overflow-hidden border-y border-white/5 bg-[var(--color-ink-2)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(59,130,246,0.18),transparent_70%)]"
      />

      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>By the numbers</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              The numbers we put our <em className="italic gradient-text">name on.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              Not aspirations. Not averages from the brochure. These are the rolling figures from
              our active and completed engagements — measured the same way every quarter.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {bigNumbers.map((n, i) => {
            const Icon = n.icon;
            return (
              <Reveal as="li" key={n.label} delay={i * 0.05} className="bg-[var(--color-ink)] p-7 md:p-9">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-electric)]/15 text-[var(--color-electric-2)] ring-1 ring-[var(--color-electric)]/25">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 font-display text-5xl md:text-6xl tracking-tight text-white">
                  {n.value}
                </p>
                <p className="mt-3 text-sm font-medium text-white/85">{n.label}</p>
                <p className="mt-1 text-sm text-white/50">{n.sub}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
