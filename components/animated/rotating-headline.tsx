"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Phrase {
  lead: string;
  emphasis: string;
}

interface RotatingHeadlineProps {
  phrases: readonly Phrase[] | Phrase[];
  intervalMs?: number;
  className?: string;
  emphasisClassName?: string;
}

/**
 * Two-line rotating headline:
 *   <span>{lead}</span>
 *   <em className="emphasis">{emphasis}</em>
 *
 * Italicized emphasis word follows the Numy convention; phrase rotation follows
 * the LaunchAI hero signature. Crossfades phrases on a fixed interval.
 */
export function RotatingHeadline({
  phrases,
  intervalMs = 4200,
  className,
  emphasisClassName,
}: RotatingHeadlineProps) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce || phrases.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [phrases.length, intervalMs, reduce]);

  const current = phrases[index];

  return (
    <h1 className={cn(className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={reduce ? false : { y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: -18, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          <span className="block">{current.lead}</span>
          <em className={cn("block italic gradient-text", emphasisClassName)}>
            {current.emphasis}
          </em>
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
