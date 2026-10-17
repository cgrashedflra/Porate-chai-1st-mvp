"use client";

import type { Ref } from "react";
import { CalendarDays } from "lucide-react";

import { cn } from "@/lib/cn";
import { card } from "../shared/card";
import { DAYS } from "../constants";

interface DatePickerProps {
    /** The seven days laid out as options. */
    days: Date[];
    /** Index of the currently selected day. */
    dayIndex: number;
    /** Visitor's timezone label, e.g. "GMT+6". */
    timezone: string;
    onPick: (index: number) => void;
    /** Lets the summary's "Change" button scroll this section into view. */
    sectionRef?: Ref<HTMLElement>;
}

/** Horizontal strip of the next seven days. */
export function DatePicker({ days, dayIndex, timezone, onPick, sectionRef }: DatePickerProps) {
    return (
        <section ref={sectionRef} className={cn(card, "p-5")}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900">
                    <CalendarDays className="size-5 text-indigo-500" /> Select a Date
                </h2>
                <p className="text-xs text-slate-400">
                    All times in your local timezone{" "}
                    {timezone && <span className="ml-1 rounded-lg bg-indigo-50 px-2 py-1 text-indigo-600">({timezone})</span>}
                </p>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
                {days.map((day, index) => {
                    const active = index === dayIndex;
                    return (
                        <button
                            key={index}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onPick(index)}
                            className={cn(
                                "rounded-xl px-2 py-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                                active
                                    ? "bg-indigo-500 text-white shadow-[0_8px_20px_-10px_rgba(79,70,229,0.8)]"
                                    : "bg-white text-slate-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
                            )}
                        >
                            <p className="text-sm font-semibold">{DAYS[day.getDay()].slice(0, 3)}</p>
                            <p className={cn("text-xs", active ? "text-indigo-100" : "text-slate-400")}>
                                {day.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            </p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
