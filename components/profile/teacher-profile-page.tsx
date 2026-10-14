"use client";

import * as React from "react";
import {
    Users, BookOpen,
    CalendarDays,
    Check,
    GraduationCap,
    Sparkles,
    Star,
    UserCheck,
    History,
    School2,
    MailBadge,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { SubjectBadge } from "@/components/SubjectBadge";
import { ProfileHero } from "./sections/profile-hero";
import { StatCard } from "./sections/stat-card";
import type { TeacherProfile } from "./types/teacher";
import { SectionCard } from "./shared/section-card";

interface TeacherProfilePageProps {
    teacher: TeacherProfile;
    /** Tailwind max-width utility for the page container. */
    maxWidthClassName?: string;
    /** Passed to the hero; omit to hide the "Send a message" action. */
    messageHref?: string;
    /** Optional content rendered below the tabs (e.g. a call to action). */
    cta?: React.ReactNode;
}

export function TeacherProfilePage({
    teacher,
    maxWidthClassName = "max-w-5xl",
    messageHref,
    cta,
}: TeacherProfilePageProps) {
    const { students, classes, rating, experience } = teacher.stats;




    return (
        <div className={cn("mx-auto w-full space-y-5 p-6", maxWidthClassName)}>
            <ProfileHero teacher={teacher} messageHref={messageHref} />

            <div className="grid gap-4 sm:grid-cols-4">
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
                <StatCard
                    icon={Sparkles}
                    label="Experience"
                    tile="bg-amber-50 text-amber-500"
                    value={experience.value}
                    trend={experience.trend}
                    note={experience.note}
                />
            </div>

            <section className="rounded-2xl border border-indigo-100/80 bg-white p-5 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]">
                <div className="grid gap-5 lg:grid-cols-2">
                    <div className="space-y-5">
                        <SectionCard icon={UserCheck} title="About Me" className="border-0 p-0! shadow-none">
                            <p className="text-sm leading-7 text-slate-600">
                                {teacher.about || "No profile description provided."}
                            </p>
                        </SectionCard>

                        <SectionCard icon={GraduationCap} title="Education & Credentials">
                            {teacher.qualifications.length > 0 ? (
                                <ul className="space-y-4">
                                    {teacher.qualifications.map((q) => (
                                        <li key={`${q.degree}-${q.institute}-${q.passingYear}`} className="flex items-center gap-3">
                                            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-indigo-500">
                                                <MailBadge className="size-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-800">{q.degree}</p>
                                                {(q.institute || q.passingYear) && (
                                                    <p className="text-xs text-slate-500">
                                                        {[q.institute, q.passingYear].filter(Boolean).join(" • ")}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-slate-500">No education or credentials listed.</p>
                            )}
                        </SectionCard>

                        <SectionCard icon={History} title="Work History">
                            {teacher.workHistory.length > 0 ? (
                                <ul className="space-y-3">
                                    {teacher.workHistory.map((q) => (
                                        <li key={q.role} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-sm">
                                            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
                                                <School2 className="size-5" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                                                    <p className="text-sm font-semibold text-slate-800">{q.role}</p>
                                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{q.period}</span>
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-indigo-600">{q.institution}</p>
                                                <p className="mt-2 text-sm leading-6 text-slate-500">{q.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-slate-500">No work history listed.</p>
                            )}
                        </SectionCard>
                    </div>

                    <div className="space-y-5">
                        <SectionCard icon={Star} title="Profile Highlights">
                            <ul className="space-y-2.5">
                                {teacher.highlights.map((h) => (
                                    <li key={h} className="flex items-center gap-3 text-sm text-slate-600">
                                        <Check className="size-4 shrink-0 text-indigo-500" /> {h}
                                    </li>
                                ))}
                            </ul>
                        </SectionCard>

                        <SectionCard icon={BookOpen} title="Subjects">
                            {teacher.subjects.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {teacher.subjects.map((s, i) => {
                                        const variants = ["blue", "purple", "green", "orange"] as const;
                                        const variant = variants[i % variants.length];
                                        return <SubjectBadge key={s.name} label={s.name} variant={variant} size="md" />;
                                    })}
                                </div>
                            ) : (
                                <p className="text-sm text-slate-500">No subjects listed.</p>
                            )}
                        </SectionCard>

                        <SectionCard icon={Sparkles} title="Teaching Philosophy">
                            <p className="text-sm leading-7 text-slate-600">
                                {teacher.teachingPhilosophy || "Not provided."}
                            </p>
                        </SectionCard>
                        <SectionCard icon={Sparkles} title="Who I Teach">
                            <p className="text-sm leading-7 text-slate-600">
                                {teacher.whoITeach || "Not provided."}
                            </p>
                        </SectionCard>
                    </div>
                </div>
            </section>



            {cta}
        </div>
    );
}
