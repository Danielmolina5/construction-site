import { cn } from "@/lib/utils";

interface BlueprintGridProps {
  className?: string;
  withVignette?: boolean;
}

export function BlueprintGrid({ className, withVignette = true }: BlueprintGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 blueprint-grid",
        withVignette && "[mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]",
        className
      )}
    />
  );
}
