"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "h-12 w-full appearance-none rounded-xl bg-white/5 px-4 pr-10 text-[15px] text-white ring-1 ring-white/10 transition-all duration-200",
          "hover:bg-white/[0.07] hover:ring-white/20",
          "focus:bg-white/[0.08] focus:ring-2 focus:ring-[var(--color-electric)] focus:outline-none",
          "disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50"
      />
    </div>
  )
);
Select.displayName = "Select";
