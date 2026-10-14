import {
    BookOpen,
    CalendarDays,
    Check,
    GraduationCap,
    Sparkles,
    Star,
    UserCheck,
} from "lucide-react";
import { SectionCard } from "../shared/section-card";
import { Icon } from "@/components/ui/Icon";
import { SubjectBadge } from "@/components/SubjectBadge";
import type { TeacherProfile } from "../types/teacher";

interface AboutTabProps {
    teacher: TeacherProfile;
}

export function AboutTab({ teacher }: AboutTabProps) {
    return (
        <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-5">
                <SectionCard icon={UserCheck} title="About Me" onEdit="Edit about me" className="border-0 p-0! shadow-none">
                    <p className="text-sm leading-7 text-slate-600">{teacher.about}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {teacher.facts.map(({ icon, value, label }) => (
                            <div key={label} className="flex items-center gap-3 rounded-xl bg-indigo-50/70 p-3">
                                <Icon name={icon} className="size-5 shrink-0 text-indigo-500" />
                                <div className="min-w-0">
                                    <p className="truncate text-xs font-semibold text-slate-800">{value}</p>
                                    <p className="truncate text-[11px] text-slate-500">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionCard>

                <SectionCard icon={GraduationCap} title="Qualifications" onEdit="Edit qualifications">
                    <ul className="space-y-4">
                        {teacher.qualifications.map((q) => (
                            <li key={q.title} className="flex items-center gap-3">
                                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-indigo-500">
                                    <CalendarDays className="size-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">{q.title}</p>
                                    {q.place && q.years ? (
                                        <p className="text-xs text-slate-500">
                                            {q.place} <span className="mx-1 text-indigo-300">•</span> {q.years}
                                        </p>
                                    ) : q.place || q.years ? (
                                        <p className="text-xs text-slate-500">{q.place || q.years}</p>
                                    ) : null}
                                </div>
                            </li>
                        ))}
                    </ul>
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
                    <div className="flex flex-wrap gap-2">
                        {teacher.subjects.map((s, i) => {
                            const variants = ["blue", "purple", "green", "orange"] as const;
                            const variant = variants[i % variants.length];
                            return <SubjectBadge key={s.name} label={s.name} variant={variant} size="md" />;
                        })}
                    </div>
                </SectionCard>

                <SectionCard icon={Sparkles} title="Teaching Style">
                    <div className="flex flex-wrap gap-2">
                        {teacher.style.map((s) => (
                            <span key={s} className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600">
                                {s}
                            </span>
                        ))}
                    </div>
                </SectionCard>
            </div>
        </div>
    );
}
