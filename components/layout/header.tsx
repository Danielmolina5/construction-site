"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { brand, nav } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [0, 14]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        style={{ backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--color-ink)]/70 backdrop-blur-xl ring-1 ring-white/5"
            : "bg-transparent"
        )}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2" aria-label={brand.full}>
            <Logo />
            <span className="hidden sm:inline-block text-[15px] font-medium tracking-[0.22em] text-white/80 group-hover:text-white transition-colors">
              {brand.name.toUpperCase()}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{brand.phone}</span>
            </a>
            <Button variant="primary" size="sm" onClick={() => navigateAnchor("#contact")}>
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--color-ink)]/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile"
              className="relative h-full flex flex-col px-6 pt-28 pb-12"
            >
              <ul className="flex flex-col gap-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-3xl font-display font-medium tracking-tight text-white border-b border-white/10"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-10">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setOpen(false);
                    navigateAnchor("#contact");
                  }}
                >
                  Start a Project
                </Button>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center justify-center gap-2 h-14 rounded-full ring-1 ring-white/20 text-white"
                >
                  <Phone className="h-4 w-4" />
                  {brand.phone}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
    >
      {children}
      <span className="pointer-events-none absolute inset-x-4 -bottom-px h-px scale-x-0 origin-left bg-gradient-to-r from-[var(--color-electric)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

function navigateAnchor(hash: string) {
  if (typeof window === "undefined") return;
  const el = document.querySelector(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <span
      aria-hidden
      className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-ink-2)] ring-1 ring-white/10 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.svg" alt="" className="h-10 w-10" />
    </span>
  );
}
