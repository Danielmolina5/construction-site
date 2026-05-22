import { Award, ShieldCheck, Star } from "lucide-react";
import { Marquee } from "@/components/animated/marquee";
import { Reveal } from "@/components/animated/reveal";
import { trustLogos } from "@/lib/data";

export function TrustBar() {
  return (
    <section
      aria-label="Trusted by industry leaders"
      className="relative border-y border-white/5 bg-[var(--color-ink-2)]/40 py-14"
    >
      <div className="container-page">
        <Reveal direction="up" className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trust & Authority
          </span>
          <p className="max-w-xl text-pretty text-white/65">
            Delivering for institutional owners, Fortune 500 operators, public agencies, and the
            developers building the next generation of American infrastructure.
          </p>
        </Reveal>

        <div className="mt-12">
          <Marquee items={trustLogos} />
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3">
          <Badge
            icon={<Award className="h-5 w-5" />}
            title="ENR Top 100 CM"
            sub="Recognized 2022 • 2023 • 2024"
          />
          <Badge
            icon={<ShieldCheck className="h-5 w-5" />}
            title="OSHA 30 Across Roster"
            sub="Zero lost-time incidents, 18-month rolling"
          />
          <Badge
            icon={<Star className="h-5 w-5" />}
            title="98% Repeat Engagement"
            sub="Most clients return for project two"
          />
        </div>
      </div>
    </section>
  );
}

function Badge({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="bg-[var(--color-ink)]/80 backdrop-blur p-6 md:p-7">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-electric)]/15 text-[var(--color-electric-2)] ring-1 ring-[var(--color-electric)]/25">
          {icon}
        </div>
        <p className="text-white font-medium">{title}</p>
      </div>
      <p className="mt-3 text-sm text-white/55">{sub}</p>
    </div>
  );
}
