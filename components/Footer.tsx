// "use client";

import Link from "next/link";
import {
    STUDENT_NAV,
    EDUCATOR_NAV,
    COMPANY_NAV,
} from "@/constants/navigation";
import { Coffee, Shield, Award, Sparkles } from "lucide-react";



function FooterSection({
    title,
    links,
}: {
    title: string;
    links: readonly {
        label: string;
        href: string;
        featured?: boolean;
        admin?: boolean;
    }[];
}) {
    return (
        <div>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                {title}
            </h3>

            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={
                                link.featured
                                    ? "font-medium text-indigo-300 hover:text-indigo-400"
                                    : "text-slate-400 hover:text-white"
                            }
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-slate-900 font-sans text-slate-400">
            <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 border-b border-slate-800 pb-10 md:grid-cols-2 lg:grid-cols-5">

                    <div className="space-y-3 lg:col-span-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                            aria-label="Pirate Chai home"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white">
                                <Coffee className="h-4 w-4" aria-hidden="true" />
                            </span>

                            <span className="text-xl font-bold tracking-tight text-white">
                                Pirate<span className="text-indigo-400">Chai</span>
                            </span>
                        </Link>

                        <p className="max-w-sm text-xs leading-relaxed text-slate-400">
                            Connect with qualified educators and academic mentors for
                            personalized 1-on-1 tutoring, syllabus guidance, and structured
                            cohort classes.
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="inline-flex items-center gap-1 rounded border border-slate-700/60 bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                                <Shield className="h-3 w-3" aria-hidden="true" />
                                Verified Faculty
                            </span>

                            <span className="inline-flex items-center gap-1 rounded border border-slate-700/60 bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-indigo-300">
                                <Award className="h-3 w-3" aria-hidden="true" />
                                Direct Booking
                            </span>
                        </div>
                    </div>

                    <FooterSection
                        title="For Students"
                        links={STUDENT_NAV}
                    />

                    <FooterSection
                        title="For Educators"
                        links={EDUCATOR_NAV}
                    />

                    <FooterSection
                        title="Company"
                        links={COMPANY_NAV}
                    />
                </div>
            </div>

            <div className="border-t border-slate-800/80 bg-slate-950 px-4 py-2.5 text-[11px] font-medium sm:px-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <span
                                className="h-2 w-2 rounded-full bg-emerald-500"
                                aria-hidden="true"
                            />
                            System Status: Operational
                        </span>

                        <span className="hidden text-slate-600 md:inline">
                            |
                        </span>

                        <span className="hidden text-slate-500 md:inline">
                            Direct Educator Marketplace v2.4
                        </span>
                    </div>

                    <nav
                        aria-label="Footer secondary navigation"
                        className="flex items-center gap-4"
                    >
                        <Link
                            href="/how-it-works"
                            className="transition-colors hover:text-white"
                        >
                            Protocol
                        </Link>

                        <Link
                            href="/faq"
                            className="transition-colors hover:text-white"
                        >
                            Support
                        </Link>

                        <span className="text-slate-500">
                            © {year} Pirate Chai Network
                        </span>
                    </nav>
                </div>
            </div>
        </footer>
    );
}