"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  const rendered = Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rendered}
      {suffix}
    </span>
  );
}
