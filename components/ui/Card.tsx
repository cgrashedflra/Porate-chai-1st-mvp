import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * THE shared dashboard panel look — every card in the app derives from these
 * two constants. `CARD_BASE` is the shape (radius, border, shadow) without a
 * background, for tinted panels (e.g. the indigo gradient hero); most callers
 * want `CARD_SURFACE` (base + white) and add their own padding.
 */
export const CARD_BASE =
  "rounded-2xl border border-indigo-100/80 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]";
export const CARD_SURFACE = `${CARD_BASE} bg-white`;

/** Shared dashboard panel: white surface, indigo border, soft shadow. */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn(CARD_SURFACE, "p-5", className)}>{children}</div>
  );
}
