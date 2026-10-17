"use client";

import type { Ref } from "react";
import { Check, Clock } from "lucide-react";

import { cn } from "@/lib/cn";
import { card } from "../shared/card";
import { fmtRange } from "../lib/format";

interface SlotPickerProps {
    /** Start hours offered on the selected day. */
    slots: number[];
    /** Session length in hours. */
    duration: number;
    /** Start hours already booked on the selected day. */
    taken: number[];
    /** Start hours currently selected. */
    picked: number[];
    /** Selected weekday name, for the empty state. */
    dayName: string;
    onToggle: (hour: number) => void;
    /** Lets the summary's "Change" button scroll this section into view. */
    sectionRef?: Ref<HTMLElement>;
}

/** Grid of pickable time slots for the selected day. */
export function SlotPicker({
    slots,
    duration,
    taken,
    picked,
    dayName,
    onToggle,
    sectionRef,
}: SlotPickerProps) {
    return (
        <section ref={sectionRef} className={cn(card, "p-5")}>
            <h2 className="mb-4 flex items-center gap-3 text-base font-semibold text-slate-900">
                <Clock className="size-5 text-indigo-500" /> Available Time Slots
                <span className="text-sm font-normal text-slate-500">({duration} hour each)</span>
            </h2>
            {slots.length === 0 ? (
                <p className="rounded-xl bg-slate-50 py-10 text-center text-sm text-slate-400">
                    {dayName} isn&apos;t available. Try another date.
                </p>
            ) : (
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {slots.map((hour) => {
                        const isTaken = taken.includes(hour);
                        const isPicked = picked.includes(hour);
                        return (
                            <button
                                key={hour}
                                type="button"
                                disabled={isTaken}
                                aria-pressed={isPicked}
                                onClick={() => onToggle(hour)}
                                className={cn(
                                    "flex h-11 items-center justify-between rounded-xl px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                                    isPicked && "bg-indigo-500 text-white",
                                    !isPicked && !isTaken && "bg-white text-slate-700 ring-1 ring-indigo-100 hover:bg-indigo-50",
                                    isTaken && "cursor-not-allowed bg-slate-50 text-slate-300 ring-1 ring-slate-100"
                                )}
                            >
                                <span className={isTaken ? "line-through" : ""}>{fmtRange(hour, duration)}</span>
                                {isPicked && <Check className="size-4" />}
                                {isTaken && <span className="text-[11px]">Booked</span>}
                            </button>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
