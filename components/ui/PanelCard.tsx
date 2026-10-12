import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = { icon: ElementType; title: string; children: ReactNode; className?: string };

export function PanelCard({ icon: Icon, title, children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-indigo-100/80 bg-white p-5 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]",
        className
      )}
    >
      <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold text-slate-900">
        <Icon className="size-5 text-indigo-500" /> {title}
      </h3>
      {children}
    </div>
  );
}
