"use client";

/**
 * Educator view: weekly availability + quick settings (session length, rate).
 *
 * `onChange` fires on every edit (autosave) — debounce it on the caller side.
 *
 *   <AvailabilityEditor educator={educator} initial={saved} onChange={saveToApi} />
 */

import * as React from "react";
import { CalendarCheck, Check, Pencil, Users, Wallet } from "lucide-react";

import { cn } from "@/lib/cn";
import { card } from "../shared/card";
import { StatChip } from "../shared/StatChip";
import { EducatorHeader } from "../shared/EducatorHeader";
import { DAYS, defaultAvailabilitySettings, sampleEducator } from "../constants";
import { applyDuration } from "../lib/slots";
import type { AvailabilitySettings, DaySchedule, EducatorInfo } from "../types";
import { DayCard } from "./DayCard";
import { QuickSettings } from "./QuickSettings";

interface AvailabilityEditorProps {
    educator?: EducatorInfo;
    initial?: AvailabilitySettings;
    currency?: string;
    onChange?: (settings: AvailabilitySettings) => void;
}

export function AvailabilityEditor({
    educator = sampleEducator,
    initial = defaultAvailabilitySettings,
    currency = "$",
    onChange,
}: AvailabilityEditorProps) {
    const [settings, setSettings] = React.useState(initial);
    const [editing, setEditing] = React.useState(false);

    const commit = (next: AvailabilitySettings) => {
        setSettings(next);
        onChange?.(next);
    };

    const patchDay = (index: number, update: (day: DaySchedule) => DaySchedule) =>
        commit({ ...settings, schedule: settings.schedule.map((day, i) => (i === index ? update(day) : day)) });

    // Changing the session length drops blocks that would now overlap.
    const setDuration = (duration: number) =>
        commit({ ...settings, duration, schedule: applyDuration(settings.schedule, duration) });

    return (
        <div className="mx-auto w-full max-w-6xl space-y-5 p-6">
            <EducatorHeader educator={educator} size="md">
                <div className="flex flex-wrap gap-3">
                    <StatChip icon={Wallet} value={`${currency}${settings.rate}/hr`} label="Hourly Rate" />
                    <StatChip icon={Users} value={educator.students} label="Total Students" />
                    <StatChip icon={CalendarCheck} value={educator.completed} label="Completed Classes" />
                </div>
                <button
                    type="button"
                    onClick={() => setEditing((value) => !value)}
                    className={cn(
                        "flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2",
                        editing
                            ? "bg-indigo-600 text-white hover:bg-indigo-700"
                            : "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 hover:bg-indigo-100"
                    )}
                >
                    {editing ? (
                        <>
                            <Check className="size-4" /> Done
                        </>
                    ) : (
                        <>
                            <Pencil className="size-4" /> Edit Availability
                        </>
                    )}
                </button>
            </EducatorHeader>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
                <section className={cn(card, "p-5")}>
                    <h2 className="text-lg font-semibold text-slate-900">Weekly Availability</h2>
                    <p className="mb-4 text-sm text-slate-500">
                        Select the days you are available and set your time blocks ({settings.duration} hour each).
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
                        {DAYS.map((name, index) => (
                            <DayCard
                                key={name}
                                name={name}
                                day={settings.schedule[index]}
                                duration={settings.duration}
                                editing={editing}
                                onToggle={() => patchDay(index, (day) => ({ ...day, enabled: !day.enabled }))}
                                onRemove={(hour) =>
                                    patchDay(index, (day) => ({ ...day, blocks: day.blocks.filter((b) => b !== hour) }))
                                }
                                onAdd={(hour) =>
                                    patchDay(index, (day) => ({ ...day, blocks: [...day.blocks, hour].sort((a, b) => a - b) }))
                                }
                            />
                        ))}
                    </div>
                </section>

                <QuickSettings
                    settings={settings}
                    currency={currency}
                    editing={editing}
                    onDurationChange={setDuration}
                    onRateChange={(rate) => commit({ ...settings, rate })}
                />
            </div>
        </div>
    );
}
