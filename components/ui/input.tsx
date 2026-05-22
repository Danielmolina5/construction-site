"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-12 w-full rounded-xl bg-white/5 px-4 text-[15px] text-white placeholder:text-white/40 ring-1 ring-white/10 transition-all duration-200",
        "hover:bg-white/[0.07] hover:ring-white/20",
        "focus:bg-white/[0.08] focus:ring-2 focus:ring-[var(--color-electric)] focus:outline-none",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
