"use client";

import * as React from "react";

interface GatLogoProps {
  /** Total height in px. */
  size?: number;
  /** Show "CONSTRUCTION — MANAGEMENT, INC. —" subtitle beneath the mark. */
  showSubtitle?: boolean;
  /** Optional class on the wrapper. */
  className?: string;
  /**
   * If you save the brand artwork to `public/logo.png` (or pass a custom
   * path), it will render that PNG. If the file is missing or fails to
   * load, the inline SVG fallback below is shown — so the logo is never
   * blank.
   */
  src?: string;
}

/**
 * GAT Construction Management logo.
 *
 * Renders `src` (defaults to `/logo.png`) when present; otherwise falls back
 * to an inline SVG that approximates the brand mark — G + electric-blue
 * triangle A (with skyline) + T + arc beneath.
 *
 * Navy parts (G, T, skyline, arc) follow `currentColor`. Place inside a
 * wrapper with `text-[var(--color-ink)]` (on white) or `text-white` (on
 * dark) to drive their color.
 */
export function GatLogo({
  size = 40,
  showSubtitle = false,
  className,
  src = "/logo.png",
}: GatLogoProps) {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (!imgFailed && src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="GAT Construction Management"
        style={{ height: size, width: "auto" }}
        onError={() => setImgFailed(true)}
        className={className}
      />
    );
  }

  return <InlineGatLogo size={size} showSubtitle={showSubtitle} className={className} />;
}

/* -------------------------------------------------------------------------- */
/*  Inline SVG fallback                                                       */
/* -------------------------------------------------------------------------- */

function InlineGatLogo({
  size,
  showSubtitle,
  className,
}: Required<Pick<GatLogoProps, "size">> & Pick<GatLogoProps, "showSubtitle" | "className">) {
  const uid = React.useId();
  const maskId = `gat-g-mask-${uid.replace(/[:]/g, "")}`;

  const W = 244;
  const H = showSubtitle ? 152 : 96;
  const aspect = W / H;

  return (
    <svg
      width={size * aspect}
      height={size}
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="GAT Construction Management"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="10" width="64" height="64">
          <rect x="0" y="10" width="64" height="64" fill="white" />
          <circle cx="30" cy="42" r="14" fill="black" />
          <rect x="30" y="28" width="34" height="28" fill="black" />
          <rect x="36" y="44" width="16" height="7" fill="white" />
        </mask>
      </defs>

      <circle cx="30" cy="42" r="30" fill="currentColor" mask={`url(#${maskId})`} />

      <path d="M 80 78 L 132 4 L 184 78 Z" fill="#60A5FA" />

      <rect x="116" y="38" width="6" height="40" rx="0.6" fill="currentColor" />
      <rect x="124" y="22" width="7" height="56" rx="0.6" fill="currentColor" />
      <rect x="133" y="42" width="6" height="36" rx="0.6" fill="currentColor" />

      <path
        d="M 192 12 L 244 12 L 244 26 L 225 26 L 225 72 L 211 72 L 211 26 L 192 26 Z"
        fill="currentColor"
      />

      <path
        d="M 6 86 Q 122 104 238 86"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />

      {showSubtitle && (
        <>
          <text
            x={W / 2}
            y={120}
            fontFamily="var(--font-heading), 'Space Grotesk', system-ui, sans-serif"
            fontWeight={800}
            fontSize={22}
            letterSpacing={6}
            fill="currentColor"
            textAnchor="middle"
          >
            CONSTRUCTION
          </text>
          <line
            x1={W / 2 - 102}
            y1={142}
            x2={W / 2 - 78}
            y2={142}
            stroke="#60A5FA"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <text
            x={W / 2}
            y={146}
            fontFamily="var(--font-heading), 'Space Grotesk', system-ui, sans-serif"
            fontWeight={600}
            fontSize={13}
            letterSpacing={4.5}
            fill="#60A5FA"
            textAnchor="middle"
          >
            MANAGEMENT, INC.
          </text>
          <line
            x1={W / 2 + 78}
            y1={142}
            x2={W / 2 + 102}
            y2={142}
            stroke="#60A5FA"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
