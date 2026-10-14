import Link from "next/link";
import { BadgeCheck, CalendarDays, MapPin, MessageCircle } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import type { TeacherProfile } from "../types/teacher";

interface ProfileHeroProps {
    teacher: TeacherProfile;
    messageHref?: string;
}

export function ProfileHero({ teacher, messageHref }: ProfileHeroProps) {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-indigo-100/80 bg-gradient-to-br from-indigo-100 via-indigo-50 to-sky-100 p-6 shadow-[0_4px_20px_-8px_rgba(99,102,241,0.18)]">
            {messageHref && (
                <Link
                    href={messageHref}
                    className="absolute right-5 top-5 z-10 flex h-10 items-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-medium text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.7)] transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
                >
                    <MessageCircle className="size-4" /> Send a message
                </Link>
            )}

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative shrink-0 self-start sm:self-center">
                    <Avatar
                        name={teacher.name}
                        src={teacher.avatar}
                        size="2xl"
                        className="ring-4 ring-white shadow-lg"
                    />
                </div>

                <div className="min-w-0 flex-1 pr-0 sm:pr-32">
                    <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-slate-900">
                        {teacher.name}
                        {teacher.verified && (
                            <BadgeCheck className="size-6 fill-indigo-500 text-white" aria-label="Verified teacher" />
                        )}
                    </h1>
                    <p className="mt-1 text-sm text-slate-600">
                        {teacher.title}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <MapPin className="size-3.5" /> {teacher.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" /> Joined {teacher.joined}
                        </span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm text-slate-700">{teacher.headline}</p>
                </div>
            </div>

            <p
                aria-hidden
                className="pointer-events-none absolute bottom-6 right-8 hidden w-40 -rotate-6 text-right font-serif text-xl italic leading-snug text-indigo-400/80 xl:block"
            >
                &ldquo;{teacher.quote}&rdquo;
            </p>
        </section>
    );
}
