"use client";

import * as React from "react";
import { CalendarClock, Phone } from "lucide-react";
import { brand } from "@/lib/data";

export function MobileStickyCta() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed inset-x-3 bottom-3 z-40 transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-[var(--color-ink)]/90 p-2 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl">
        <a
          href={brand.phoneHref}
          className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 text-white text-sm font-medium"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-[var(--color-electric)] text-white text-sm font-medium shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)]"
        >
          <CalendarClock className="h-4 w-4" />
          Consultation
        </a>
      </div>
    </div>
  );
}
