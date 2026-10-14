"use client";

import * as React from "react";
import { CalendarDays, Star, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import { ProfileHero } from "./sections/profile-hero";
import { StatCard } from "./sections/stat-card";
import { AboutTab } from "./sections/about-tab";
import { ComingSoon } from "./sections/coming-soon";
import { cardClass } from "./shared/card-class";
import type { TeacherProfile } from "./types/teacher";

interface TeacherProfilePageProps {
    teacher: TeacherProfile;
    /** Ordered tab labels. The first tab is selected initially. */
    tabs: readonly string[];
    /** Tailwind max-width utility for the page container. */
    maxWidthClassName?: string;
    /** Passed to the hero; omit to hide the "Send a message" action. */
    messageHref?: string;
    /** Optional content rendered below the tabs (e.g. a call to action). */
    cta?: React.ReactNode;
}

export function TeacherProfilePage({
    teacher,
    tabs,
    maxWidthClassName = "max-w-5xl",
    messageHref,
    cta,
}: TeacherProfilePageProps) {
    const [tab, setTab] = React.useState(tabs[0]);
    const baseId = React.useId().replace(/:/g, "");
    const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
    const { students, classes, rating } = teacher.stats;

    const firstTab = tabs[0] ?? "";

    const selectTab = (index: number) => {
        const next = tabs[index];
        if (next === undefined) return;
        setTab(next);
        tabRefs.current[index]?.focus();
    };

    const onTabListKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const current = tabs.indexOf(tab);
        switch (event.key) {
            case "ArrowRight":
                event.preventDefault();
                selectTab((current + 1) % tabs.length);
                break;
            case "ArrowLeft":
                event.preventDefault();
                selectTab((current - 1 + tabs.length) % tabs.length);
                break;
            case "Home":
                event.preventDefault();
                selectTab(0);
                break;
            case "End":
                event.preventDefault();
                selectTab(tabs.length - 1);
                break;
        }
    };

    const panelId = `${baseId}-panel`;
    const activeTabId = `${baseId}-tab-${tab}`;

    return (
        <div className={cn("mx-auto w-full space-y-5 p-6", maxWidthClassName)}>
            <ProfileHero teacher={teacher} messageHref={messageHref} />

            <div className="grid gap-4 sm:grid-cols-3">
                <StatCard
                    icon={Users}
                    label="Total Students"
                    tile="bg-indigo-50 text-indigo-500"
                    value={students.value}
                    trend={students.trend}
                    note={students.note}
                />
                <StatCard
                    icon={CalendarDays}
                    label="Total Classes"
                    tile="bg-indigo-50 text-indigo-500"
                    value={classes.value}
                    trend={classes.trend}
                    note={classes.note}
                />
                <StatCard
                    icon={Star}
                    label="Average Rating"
                    tile="bg-amber-50 text-amber-500"
                    value={rating.value}
                    trend={rating.trend}
                    note={rating.note}
                />
            </div>

            <section className={cn(cardClass, "p-5")}>
                <div
                    role="tablist"
                    aria-label="Profile sections"
                    onKeyDown={onTabListKeyDown}
                    className="mb-5 flex gap-8 overflow-x-auto border-b border-indigo-100"
                >
                    {tabs.map((t, index) => {
                        const selected = tab === t;
                        return (
                            <button
                                key={t}
                                ref={(el) => {
                                    tabRefs.current[index] = el;
                                }}
                                type="button"
                                role="tab"
                                id={`${baseId}-tab-${t}`}
                                aria-selected={selected}
                                aria-controls={panelId}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setTab(t)}
                                className={cn(
                                    "-mb-px whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                                    selected
                                        ? "border-indigo-500 text-indigo-600"
                                        : "border-transparent text-slate-500 hover:text-slate-700"
                                )}
                            >
                                {t}
                            </button>
                        );
                    })}
                </div>
                <div
                    role="tabpanel"
                    id={panelId}
                    aria-labelledby={activeTabId}
                    tabIndex={0}
                    className="focus-visible:outline-none"
                >
                    {tab === firstTab ? <AboutTab teacher={teacher} /> : <ComingSoon tab={tab} />}
                </div>
            </section>

            {cta}
        </div>
    );
}
