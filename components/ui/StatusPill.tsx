import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Semantic colour families a status pill can use. */
const toneClasses = {
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
  danger: "bg-rose-50 text-rose-600",
  info: "bg-indigo-50 text-indigo-600",
} as const;

export type StatusTone = keyof typeof toneClasses;

/** Rounded status pill, e.g. "paid" / "pending" / "failed". */
export function StatusPill({ tone, children }: { tone: StatusTone; children: ReactNode }) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium capitalize",
        toneClasses[tone]
      )}
    >
      {children}
    </span>
  );
}
