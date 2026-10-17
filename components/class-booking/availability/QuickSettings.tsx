"use client";

import { ChevronDown, Info, Settings } from "lucide-react";

import { cn } from "@/lib/cn";
import { CARD_SURFACE } from "@/components/ui/Card";
import type { AvailabilitySettings } from "../types";

const fieldClass =
    "h-11 w-full rounded-xl bg-white px-3 text-sm text-slate-800 outline-none ring-1 ring-indigo-100 focus:ring-2 focus:ring-indigo-300 disabled:bg-slate-50 disabled:text-slate-500";

interface QuickSettingsProps {
    settings: AvailabilitySettings;
    currency: string;
    /** When false, the controls are disabled. */
    editing: boolean;
    onDurationChange: (duration: number) => void;
    onRateChange: (rate: number) => void;
}

/** Side rail of the editor: session length + hourly rate. */
export function QuickSettings({
    settings,
    currency,
    editing,
    onDurationChange,
    onRateChange,
}: QuickSettingsProps) {
    return (
        <aside className={cn(CARD_SURFACE, "h-fit space-y-5 p-5")}>
            <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900">
                <Settings className="size-5 text-indigo-500" /> Quick Settings
            </h2>

            <div>
                <label htmlFor="duration" className="mb-2 block text-sm text-slate-500">
                    Default Session Duration
                </label>
                <div className="relative">
                    <select
                        id="duration"
                        disabled={!editing}
                        value={settings.duration}
                        onChange={(event) => onDurationChange(Number(event.target.value))}
                        className={cn(fieldClass, "appearance-none pr-9")}
                    >
                        <option value={1}>1 hour</option>
                        <option value={2}>2 hours</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </div>
            </div>

            <div>
                <label htmlFor="rate" className="mb-2 block text-sm text-slate-500">
                    Hourly Rate
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">{currency}</span>
                    <input
                        id="rate"
                        type="number"
                        min={0}
                        inputMode="numeric"
                        disabled={!editing}
                        value={settings.rate}
                        onChange={(event) => onRateChange(Math.max(0, Number(event.target.value) || 0))}
                        className={cn(fieldClass, "pl-8")}
                    />
                </div>
                <p className="mt-2 text-xs text-slate-400">You can update your rate anytime.</p>
            </div>

            <p className="flex gap-3 rounded-xl bg-indigo-50/70 p-3 text-xs text-slate-600 ring-1 ring-indigo-100">
                <Info className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                Changes are automatically saved and will apply to new bookings.
            </p>
        </aside>
    );
}
