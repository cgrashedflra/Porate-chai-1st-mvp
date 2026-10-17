import type { ElementType, ReactNode } from "react";
import { Card } from "./Card";

type Props = { icon: ElementType; title: string; children: ReactNode; className?: string };

/** `Card` plus a leading icon + title heading — the standard titled panel. */
export function PanelCard({ icon: Icon, title, children, className }: Props) {
  return (
    <Card className={className}>
      <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold text-slate-900">
        <Icon className="size-5 text-indigo-500" /> {title}
      </h3>
      {children}
    </Card>
  );
}
