"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Activity,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Circle,
  CircleAlert,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { Button } from "@/components/ui/button";
import { meridianOs } from "@/lib/data";

const KPI_ICONS = [Activity, BarChart3, ShieldCheck, AlertTriangle] as const;

const STATE_STYLES = {
  ok: { bg: "bg-emerald-400/15", text: "text-emerald-300", ring: "ring-emerald-400/30", label: "On track" },
  watch: { bg: "bg-amber-300/15", text: "text-amber-200", ring: "ring-amber-300/30", label: "Watch" },
  pending: { bg: "bg-white/10", text: "text-white/80", ring: "ring-white/20", label: "Pending" },
  risk: { bg: "bg-red-400/15", text: "text-red-300", ring: "ring-red-400/30", label: "Risk" },
} as const;

export function MeridianOs() {
  return (
    <section
      id="os"
      aria-label="The GAT operating system"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <Eyebrow>The GAT OS</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              {meridianOs.osHeadline.lead}{" "}
              <em className="italic gradient-text">{meridianOs.osHeadline.emphasis}</em>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              We run every engagement on a single private system. One ledger, one schedule, one
              risk register, one Friday memo — sent by a partner.
            </p>

            <ul className="mt-7 space-y-3">
              {meridianOs.osBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-electric-2)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See it on your next project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-7">
            <DashboardMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl bg-[var(--color-steel-2)] ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-4 text-xs text-white/45 tracking-[0.18em] uppercase">gat.os</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-2.5 py-1 ring-1 ring-emerald-400/30 text-[11px] font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Live
        </span>
      </div>

      <div className="p-5 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Active project</p>
            <h3 className="mt-1 font-display text-xl text-white">{meridianOs.projectName}</h3>
            <p className="text-sm text-white/60">{meridianOs.status}</p>
          </div>
          <div className="flex -space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[10px] font-medium text-white/80 ring-2 ring-[var(--color-steel-2)]"
              >
                {["SM", "MB", "PA", "ER"][i]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {meridianOs.kpis.map((k, i) => {
            const Icon = KPI_ICONS[i % KPI_ICONS.length];
            return (
              <div
                key={k.label}
                className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    {k.label}
                  </p>
                  <Icon className="h-3.5 w-3.5 text-white/40" />
                </div>
                <p className="mt-2 font-display text-2xl tracking-tight text-white">{k.value}</p>
                <p
                  className={`mt-1 text-xs ${
                    k.positive ? "text-emerald-300" : "text-red-300"
                  }`}
                >
                  {k.delta}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/80">Schedule progress</p>
            <p className="text-sm text-white/55">{Math.round(meridianOs.schedule * 100)}%</p>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${meridianOs.schedule * 100}%` } : undefined}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-electric-2)]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-white/45">
            <span>Day 142 of 240</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              +12d ahead of plan
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/80">Trade package status</p>
              <p className="text-xs text-white/45">8 of 12 packages</p>
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {meridianOs.vendors.map((v) => {
                const s = STATE_STYLES[v.state];
                return (
                  <li
                    key={v.name}
                    className={`flex items-center justify-between gap-2 rounded-xl ${s.bg} px-3 py-2 ring-1 ${s.ring}`}
                  >
                    <span className="text-sm text-white/85">{v.name}</span>
                    <span
                      className={`text-[10px] font-medium uppercase tracking-[0.14em] ${s.text}`}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
            <p className="text-sm text-white/80">Risk register · top 3</p>
            <ul className="mt-3 space-y-2">
              {meridianOs.risks.map((r) => {
                const s = STATE_STYLES[r.severity];
                const Icon =
                  r.severity === "watch"
                    ? CircleAlert
                    : r.severity === "risk"
                    ? AlertTriangle
                    : Circle;
                return (
                  <li
                    key={r.title}
                    className="flex items-start justify-between gap-3 rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10"
                  >
                    <span className="flex items-start gap-2 text-sm text-white/85">
                      <Icon className={`mt-0.5 h-4 w-4 ${s.text}`} />
                      {r.title}
                    </span>
                    <span
                      className={`text-[10px] font-medium uppercase tracking-[0.14em] ${s.text}`}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
