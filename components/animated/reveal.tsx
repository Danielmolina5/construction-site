"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  direction?: Direction;
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  as = "div",
  direction = "up",
  delay = 0,
  distance = 24,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const offsetMap: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsetMap[direction];

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: reduce ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={cn(className)}
      {...(rest as object)}
    >
      {children}
    </MotionTag>
  );
}
