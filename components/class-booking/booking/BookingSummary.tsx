"use client";

import { CalendarCheck, CalendarDays, Clock, Lock } from "lucide-react";

import { cn } from "@/lib/cn";
import { CARD_SURFACE } from "@/components/ui/Card";
import { fmtRange } from "../lib/format";

interface BookingSummaryProps {
    date: Date;
    /** Selected start hours, ascending. */
    chosen: number[];
    duration: number;
    currency: string;
    totalHours: number;
    totalCost: number;
    onBook: () => void;
    /** Scroll back to the date picker. */
    onChangeDate: () => void;
    /** Scroll back to the slot picker. */
    onChangeSlots: () => void;
}

/** Sticky side rail: selected date/slots, totals, and the confirm button. */
export function BookingSummary({
    date,
    chosen,
    duration,
    currency,
    totalHours,
    totalCost,
    onBook,
    onChangeDate,
    onChangeSlots,
}: BookingSummaryProps) {
    const changeButton = "text-xs font-medium text-indigo-600 hover:underline";

    return (
        <aside className={cn(CARD_SURFACE, "h-fit space-y-5 p-5 lg:sticky lg:top-6")}>
            <h2 className="text-lg font-semibold text-slate-900">Booking Summary</h2>

            <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 size-5 text-indigo-500" />
                <div className="flex-1">
                    <p className="text-xs text-slate-500">Selected Date</p>
                    <p className="text-sm font-semibold text-slate-900">
                        {date.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                </div>
                <button type="button" onClick={onChangeDate} className={changeButton}>
                    Change
                </button>
            </div>

            <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 text-indigo-500" />
                <div className="flex-1">
                    <p className="text-xs text-slate-500">Selected Slots ({chosen.length})</p>
                    {chosen.length ? (
                        <ul className="mt-1 space-y-1 text-sm font-medium text-slate-800">
                            {chosen.map((hour) => (
                                <li key={hour}>{fmtRange(hour, duration)}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-1 text-sm text-slate-400">No slots selected</p>
                    )}
                </div>
                <button type="button" onClick={onChangeSlots} className={changeButton}>
                    Change
                </button>
            </div>

            <div className="flex items-end justify-between border-t border-indigo-50 pt-5">
                <div>
                    <p className="text-xs text-slate-500">Total Hours</p>
                    <p className="text-lg font-semibold text-slate-900">
                        {totalHours} {totalHours === 1 ? "hour" : "hours"}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-500">Total Cost</p>
                    <p className="text-xl font-bold text-indigo-600">
                        {currency}
                        {totalCost.toFixed(2)}
                    </p>
                </div>
            </div>

            <button
                type="button"
                disabled={chosen.length === 0}
                onClick={onBook}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(79,70,229,0.8)] transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
                <CalendarCheck className="size-4" /> Confirm Schedule
            </button>
            <p className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock className="size-3.5" /> Secure booking <span>•</span> Cancel anytime
            </p>
        </aside>
    );
}
