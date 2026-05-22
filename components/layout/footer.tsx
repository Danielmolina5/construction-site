import Link from "next/link";
import { ArrowUpRight, Linkedin, Instagram } from "lucide-react";
import { brand, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[var(--color-steel-2)] pt-20 pb-32 md:pb-12">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-ink-2)] ring-1 ring-white/10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark.svg" alt="" className="h-11 w-11" />
              </span>
              <span className="text-[15px] font-medium tracking-[0.22em] text-white/85">
                {brand.name.toUpperCase()} CONSTRUCTION
              </span>
            </div>
            <p className="mt-6 max-w-md text-pretty text-white/60 leading-relaxed">
              {brand.full} is a Florida-based construction project management firm delivering
              landmark commercial, healthcare, and industrial projects with strategic leadership
              and end-to-end accountability.
            </p>

            <div className="mt-8 flex gap-2">
              <a
                href={brand.social.linkedin}
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={brand.social.instagram}
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    {n.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Contact
            </h3>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="text-white">
                {brand.contact.name}
                <span className="block text-sm text-white/55">{brand.contact.title}</span>
              </li>
              <li>
                <a href={brand.phoneHref} className="hover:text-white transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={brand.emailHref} className="hover:text-white transition-colors">
                  {brand.email}
                </a>
              </li>
              <li className="text-white/60">
                {brand.address.line1}
                <br />
                {brand.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.full} All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
