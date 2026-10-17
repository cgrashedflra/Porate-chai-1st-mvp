"use client";

/**
 * Public / student view: pick a date, pick one or more slots, confirm the booking.
 *
 * Data comes straight from the `Educator` record (`schedule`, `priceMin`, `rating`…).
 * `startDate` is the first day of the 7-day window and MUST be passed from the
 * server so "today" is computed once and never mismatches during hydration.
 *
 * Always re-check price and slot availability on the server when booking.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Award, MessageSquare, Star } from "lucide-react";

import { StatChip } from "../shared/StatChip";
import { EducatorHeader } from "../shared/EducatorHeader";
import { DAYS } from "../constants";
import { buildWeek, dateKey } from "../lib/format";
import { useTimezone } from "../lib/useTimezone";
import type { Educator } from "@/types/types";
import type { Booking } from "../types";
import { DatePicker } from "./DatePicker";
import { SlotPicker } from "./SlotPicker";
import { BookingSummary } from "./BookingSummary";

interface ClassBookingProps {
    /** The educator being booked — the single source of schedule + pricing. */
    educator: Educator;
    /** Hours already taken on each date, keyed by `YYYY-MM-DD`. Defaults to none. */
    booked?: Record<string, number[]>;
    /** Overrides `educator.priceMin` when provided. */
    rate?: number;
    currency?: string;
    /** Session length in hours. */
    duration?: number;
    /** First day of the 7-day window (`YYYY-MM-DD`), passed from the server. */
    startDate: string;
    popular?: boolean;
    backHref?: string;
    /** Set false when embedding the panel (e.g. on the profile page). */
    showBackLink?: boolean;
    onBook?: (booking: Booking) => void;
}

export function ClassBooking({
    educator,
    booked = {},
    rate,
    currency = "৳",
    duration = 1,
    startDate,
    popular = true,
    backHref = "/marketplace",
    showBackLink = true,
    onBook,
}: ClassBookingProps) {
    const hourlyRate = rate ?? educator.priceMin;
    const days = React.useMemo(() => buildWeek(startDate), [startDate]);

    const [dayIndex, setDayIndex] = React.useState(0);
    const [picked, setPicked] = React.useState<number[]>([]);
    const timezone = useTimezone();
    const dateRef = React.useRef<HTMLElement>(null);
    const slotsRef = React.useRef<HTMLElement>(null);

    const date = days[dayIndex];
    const selectedKey = dateKey(date);
    const daySchedule = educator.schedule[date.getDay()] ?? { enabled: false, blocks: [] };
    const slots = daySchedule.enabled ? daySchedule.blocks : [];
    const taken = booked[selectedKey] ?? [];
    const chosen = [...picked].sort((a, b) => a - b);
    const totalHours = chosen.length * duration;
    const totalCost = totalHours * hourlyRate;

    const toggle = (hour: number) =>
        setPicked((prev) => (prev.includes(hour) ? prev.filter((h) => h !== hour) : [...prev, hour]));

    const pickDay = (index: number) => {
        setDayIndex(index);
        setPicked([]);
    };

    const scrollTo = (ref: React.RefObject<HTMLElement | null>) =>
        ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    return (
        <div className="mx-auto w-full max-w-6xl space-y-5">
            {showBackLink && (
                <Link
                    href={backHref}
                    className="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 hover:underline"
                >
                    <ArrowLeft className="size-3.5" /> Back to Educators
                </Link>
            )}

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="space-y-5">
                    <EducatorHeader
                        size="lg"
                        educator={{
                            name: educator.name,
                            avatar: educator.avatar,
                            subject: educator.subjects[0] ?? "Educator",
                            level: educator.location,
                            rating: educator.rating,
                            reviews: educator.reviewCount,
                        }}
                    >
                        <div className="flex flex-wrap items-start gap-3">
                            <StatChip icon={Award} value={`${educator.experience} yrs`} label="Experience" />
                            <StatChip icon={MessageSquare} value={educator.reviewCount} label="Reviews" />
                            <StatChip icon={Star} value={educator.rating} label="Avg. Rating" />
                            <div className="text-center">
                                <div className="rounded-xl bg-indigo-50 px-4 py-2.5 ring-1 ring-indigo-100">
                                    <span className="text-2xl font-bold text-indigo-600">
                                        {currency}
                                        {hourlyRate}
                                    </span>
                                    <span className="text-xs text-slate-500"> /hour</span>
                                </div>
                                {popular && (
                                    <span className="mt-1.5 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600">
                                        Popular
                                    </span>
                                )}
                            </div>
                        </div>
                    </EducatorHeader>

                    <DatePicker
                        days={days}
                        dayIndex={dayIndex}
                        timezone={timezone}
                        onPick={pickDay}
                        sectionRef={dateRef}
                    />

                    <SlotPicker
                        slots={slots}
                        duration={duration}
                        taken={taken}
                        picked={picked}
                        dayName={DAYS[date.getDay()]}
                        onToggle={toggle}
                        sectionRef={slotsRef}
                    />
                </div>

                <BookingSummary
                    date={date}
                    chosen={chosen}
                    duration={duration}
                    currency={currency}
                    totalHours={totalHours}
                    totalCost={totalCost}
                    onBook={() => onBook?.({ date: selectedKey, hours: chosen, totalHours, totalCost })}
                    onChangeDate={() => scrollTo(dateRef)}
                    onChangeSlots={() => scrollTo(slotsRef)}
                />
            </div>
        </div>
    );
}
