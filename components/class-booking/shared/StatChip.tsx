import type { ElementType } from "react";

/** Compact icon + value + label tile used in the educator header and summary rows. */
export function StatChip({
    icon: Icon,
    value,
    label,
}: {
    icon: ElementType;
    value: string | number;
    label: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-indigo-50/70 px-4 py-3 ring-1 ring-indigo-100">
            <Icon className="size-5 shrink-0 text-indigo-500" />
            <div>
                <p className="text-sm font-bold text-slate-900">{value}</p>
                <p className="text-[11px] text-slate-500">{label}</p>
            </div>
        </div>
    );
}
