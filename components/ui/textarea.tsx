"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 5, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full rounded-xl bg-white/5 px-4 py-3 text-[15px] leading-relaxed text-white placeholder:text-white/40 ring-1 ring-white/10 transition-all duration-200 resize-y",
        "hover:bg-white/[0.07] hover:ring-white/20",
        "focus:bg-white/[0.08] focus:ring-2 focus:ring-[var(--color-electric)] focus:outline-none",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
