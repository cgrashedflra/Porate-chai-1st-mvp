import type { LucideIcon } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";
import { cardClass } from "../shared/card-class";

interface StatCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    trend: string;
    note: string;
    tile: string;
}

export function StatCard({ icon: Icon, label, value, trend, note, tile }: StatCardProps) {
    return (
        <div className={cn(cardClass, "flex items-start gap-4 p-5")}>
            <div className={cn("grid size-12 shrink-0 place-items-center rounded-full", tile)}>
                <Icon className="size-5" />
            </div>
            <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="text-3xl font-bold text-slate-900">{value}</p>
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-500">
                    <ArrowUp className="size-3" /> {trend}
                </p>
                <p className="text-xs text-slate-400">{note}</p>
            </div>
        </div>
    );
}
