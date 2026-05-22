"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-electric)] text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_18px_40px_-10px_rgba(59,130,246,0.8)] hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-white/5 text-white ring-1 ring-white/15 backdrop-blur-md hover:bg-white/10 hover:ring-white/30 hover:-translate-y-0.5",
        ghost:
          "text-white/80 hover:text-white hover:bg-white/5",
        outline:
          "bg-transparent text-white ring-1 ring-white/25 hover:ring-white/60 hover:bg-white/[0.03]",
        dark:
          "bg-[var(--color-steel-2)] text-white ring-1 ring-white/10 hover:bg-[var(--color-steel)] hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", asChild: _asChild, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(255,255,255,0.35), transparent 70%)",
            }}
          />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
