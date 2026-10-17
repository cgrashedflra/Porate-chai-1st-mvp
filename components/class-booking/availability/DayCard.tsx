"use client";

import * as React from "react";
import { CalendarCheck, Plus, X } from "lucide-react";

import { cn } from "@/lib/cn";
import { fmtRange } from "../lib/format";
import { freeStartHours } from "../lib/slots";
import type { DaySchedule as DayScheduleType } from "../types";

interface DayCardProps {
    /** Weekday label, e.g. "Monday". */
    name: string;
    day: DayScheduleType;
    /** Session length in hours. */
    duration: number;
    /** When false, the card is read-only. */
    editing: boolean;
    onToggle: () => void;
    onRemove: (hour: number) => void;
    onAdd: (hour: number) => void;
}

/** One column of the weekly grid: availability switch + the day's time blocks. */
export function DayCard({ name, day, duration, editing, onToggle, onRemove, onAdd }: DayCardProps) {
    const [adding, setAdding] = React.useState(false);
    const free = freeStartHours(day, duration);
    const hours = day.blocks.length * duration;

    return (
        <div className="flex flex-col rounded-xl bg-white p-3 ring-1 ring-indigo-100">
            <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                    <p className="text-sm font-semibold text-slate-900">{name}</p>
                    <p className="text-xs text-slate-400">{day.enabled ? `${hours} hours` : "0 hours"}</p>
                </div>
                <button
                    type="button"
                    role="switch"
                    aria-checked={day.enabled}
                    aria-label={`${name} availability`}
                    disabled={!editing}
                    onClick={onToggle}
                    className={cn(
                        "relative h-5 w-9 shrink-0 rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-60",
                        day.enabled ? "bg-indigo-500" : "bg-slate-200"
                    )}
                >
                    <span
                        className={cn(
                            "absolute top-0.5 size-4 rounded-full bg-white shadow transition-all",
                            day.enabled ? "left-4.5" : "left-0.5"
                        )}
                    />
                </button>
            </div>

            <ul className="flex-1 space-y-2">
                {day.enabled ? (
                    day.blocks.map((hour) => (
                        <li
                            key={hour}
                            className="flex items-center justify-between rounded-lg bg-indigo-50/70 px-2.5 py-2 text-[11px] text-slate-600"
                        >
                            {fmtRange(hour, duration)}
                            {editing && (
                                <button
                                    type="button"
                                    aria-label={`Remove ${fmtRange(hour, duration)} on ${name}`}
                                    onClick={() => onRemove(hour)}
                                    className="text-slate-400 hover:text-rose-500"
                                >
                                    <X className="size-3.5" />
                                </button>
                            )}
                        </li>
                    ))
                ) : (
                    <li className="grid place-items-center gap-2 rounded-lg bg-slate-50 py-6 text-center text-xs text-slate-400">
                        <CalendarCheck className="size-6 text-indigo-300" />
                        You&apos;re not available on this day.
                    </li>
                )}
            </ul>

            {editing && day.enabled && (
                <div className="mt-3">
                    {adding ? (
                        <select
                            autoFocus
                            defaultValue=""
                            aria-label={`Add a block on ${name}`}
                            onBlur={() => setAdding(false)}
                            onChange={(event) => {
                                onAdd(Number(event.target.value));
                                setAdding(false);
                            }}
                            className="h-9 w-full rounded-lg bg-white px-2 text-xs text-slate-700 outline-none ring-1 ring-indigo-300"
                        >
                            <option value="" disabled>
                                Pick a time…
                            </option>
                            {free.map((hour) => (
                                <option key={hour} value={hour}>
                                    {fmtRange(hour, duration)}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <button
                            type="button"
                            disabled={free.length === 0}
                            onClick={() => setAdding(true)}
                            className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg text-xs font-medium text-indigo-600 ring-1 ring-indigo-100 transition-colors hover:bg-indigo-50 disabled:opacity-50"
                        >
                            <Plus className="size-3.5" /> Add Block
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
