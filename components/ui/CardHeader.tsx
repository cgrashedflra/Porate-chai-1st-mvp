import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** Vertical rhythm below the header, per card density. */
const spacingClasses = {
  tight: "mb-3",
  default: "mb-4",
  loose: "mb-5",
} as const;

type Props = {
  title: ReactNode;
  /** Optional leading icon (tinted indigo). */
  icon?: LucideIcon;
  /** Muted text on the right, e.g. "Last 6 months". */
  hint?: ReactNode;
  /** Right-hand slot rendered after `hint` (filter tabs, buttons, …). */
  action?: ReactNode;
  spacing?: keyof typeof spacingClasses;
  className?: string;
};

/** Standard card heading row: title on the left, hint / action on the right. */
export function CardHeader({
  title,
  icon: Icon,
  hint,
  action,
  spacing = "default",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3",
        spacingClasses[spacing],
        className
      )}
    >
      <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900">
        {Icon && <Icon className="size-5 text-indigo-500" />}
        {title}
      </h2>
      {hint && <span className="text-xs text-slate-400">{hint}</span>}
      {action}
    </div>
  );
}
