"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CalendarClock, CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/sections/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { brand, scarcity } from "@/lib/data";

const STATIC_MAP =
  "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1600&q=80";

export function Contact() {
  const [submitState, setSubmitState] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "commercial",
      budget: "5-25m",
      timeline: "1-3-months",
      message: "",
      consent: true,
    },
  });

  async function onSubmit(values: ContactInput) {
    setSubmitState("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || "Submission failed");
      }
      setSubmitState("success");
      reset();
    } catch (e) {
      setSubmitState("error");
      setErrorMessage(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <section
      id="contact"
      aria-label="Start your project"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]"
      />

      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Start your project</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Let's build <em className="italic gradient-text">something that lasts.</em>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <p className="text-pretty text-white/70 leading-relaxed">
              Tell us about your project. A senior partner will respond within one business day —
              and they'll be the same person who runs it.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-300/15 px-3 py-1.5 ring-1 ring-amber-300/30 text-[12px] font-medium text-amber-200">
              <Sparkles className="h-3.5 w-3.5" />
              {scarcity.badge}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 backdrop-blur md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" error={errors.name?.message} required>
                  <Input
                    type="text"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    placeholder="Jane Whitfield"
                    {...register("name")}
                  />
                </Field>
                <Field label="Work email" error={errors.email?.message} required>
                  <Input
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    placeholder="jane@company.com"
                    {...register("email")}
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <Input
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (415) 555-0190"
                    {...register("phone")}
                  />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <Input
                    type="text"
                    autoComplete="organization"
                    placeholder="Pacific Capital Partners"
                    {...register("company")}
                  />
                </Field>

                <Field label="Project type" error={errors.projectType?.message} required>
                  <Select aria-invalid={!!errors.projectType} {...register("projectType")}>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="industrial">Industrial</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </Select>
                </Field>
                <Field label="Budget range" error={errors.budget?.message} required>
                  <Select aria-invalid={!!errors.budget} {...register("budget")}>
                    <option value="under-1m">Under $1M</option>
                    <option value="1-5m">$1M – $5M</option>
                    <option value="5-25m">$5M – $25M</option>
                    <option value="25-100m">$25M – $100M</option>
                    <option value="100m-plus">$100M+</option>
                    <option value="undisclosed">Prefer not to say</option>
                  </Select>
                </Field>
                <Field label="Timeline" error={errors.timeline?.message} required className="sm:col-span-2">
                  <Select aria-invalid={!!errors.timeline} {...register("timeline")}>
                    <option value="immediate">Immediate</option>
                    <option value="1-3-months">1 – 3 months</option>
                    <option value="3-6-months">3 – 6 months</option>
                    <option value="6-12-months">6 – 12 months</option>
                    <option value="exploring">Exploring</option>
                  </Select>
                </Field>

                <Field
                  label="Tell us about the project"
                  error={errors.message?.message}
                  required
                  className="sm:col-span-2"
                >
                  <Textarea
                    rows={6}
                    placeholder="Program, location, timing, and any constraints we should know about…"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-white/70">
                    <input
                      type="checkbox"
                      defaultChecked
                      {...register("consent")}
                      className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-[var(--color-electric)]"
                    />
                    <span>
                      I agree to be contacted by GAT about my project. We never share contact
                      data with third parties.
                    </span>
                  </label>
                  {errors.consent?.message && (
                    <p className="mt-2 text-sm text-red-300">{errors.consent.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/45">
                  Senior response within one business day. Mon – Fri.
                </p>
                <Button type="submit" variant="primary" size="lg" disabled={submitState === "submitting"}>
                  {submitState === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send to a partner
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              {submitState === "success" && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-400/10 p-4 ring-1 ring-emerald-400/30 text-emerald-200"
                >
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Message received.</p>
                    <p className="text-sm opacity-80">
                      A GAT partner will respond within one business day.
                    </p>
                  </div>
                </div>
              )}

              {submitState === "error" && (
                <div
                  role="alert"
                  className="mt-6 rounded-2xl bg-red-500/10 p-4 ring-1 ring-red-400/30 text-red-200"
                >
                  <p className="font-medium">We couldn't send your message.</p>
                  <p className="mt-1 text-sm opacity-80">
                    {errorMessage || "Please try again, or email us directly."}
                  </p>
                </div>
              )}
            </form>
          </Reveal>

          {/* Side: map + direct contact */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5">
            <div className="grid gap-4">
              <a
                href={brand.phoneHref}
                className="group flex items-center justify-between rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-electric)]/15 text-[var(--color-electric-2)] ring-1 ring-[var(--color-electric)]/25">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">Call</p>
                    <p className="text-white font-medium">{brand.phone}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition" />
              </a>

              <a
                href={brand.emailHref}
                className="group flex items-center justify-between rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-electric)]/15 text-[var(--color-electric-2)] ring-1 ring-[var(--color-electric)]/25">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">Email</p>
                    <p className="text-white font-medium">{brand.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition" />
              </a>

              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/25">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">WhatsApp</p>
                    <p className="text-white font-medium">Message a partner directly</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition" />
              </a>

              <a
                href={brand.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-electric)]/15 text-[var(--color-electric-2)] ring-1 ring-[var(--color-electric)]/25">
                    <CalendarClock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">Schedule</p>
                    <p className="text-white font-medium">Book a 30-minute consultation</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition" />
              </a>

              <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
                <div className="relative aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={STATIC_MAP}
                    alt="Map of the San Francisco financial district"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/30 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-start gap-3">
                    <span className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-electric)] text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-white font-medium">{brand.address.line1}</p>
                      <p className="text-white/65">{brand.address.line2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label className="mb-2">
        {label}
        {required && <span className="ml-1 text-[var(--color-electric-2)]">*</span>}
      </Label>
      {children}
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  );
}
