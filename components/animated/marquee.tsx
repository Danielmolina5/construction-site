"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  // Duplicate the items for a seamless loop.
  const looped = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <ul className="flex w-max items-center gap-12 animate-marquee will-change-transform">
        {looped.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="text-[15px] font-medium tracking-[0.18em] text-white/40 hover:text-white/80 transition-colors"
            aria-hidden={i >= items.length || undefined}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
