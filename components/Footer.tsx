import Link from "next/link";
import {
    STUDENT_NAV,
    EDUCATOR_NAV,
    COMPANY_NAV,
} from "@/constants/navigation";
import { Shield, Award } from "lucide-react";

type FooterLink = {
    label: string;
    href: string;
    featured?: boolean;
    admin?: boolean;
};

function FooterSection({
    title,
    links,
}: {
    title: string;
    links: readonly FooterLink[];
}) {
    return (
        <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-300">
                {title}
            </h3>

            <ul className="space-y-2.5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={
                                link.featured
                                    ? "text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
                                    : "text-sm text-slate-400 transition-colors hover:text-white"
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
        <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
            {/* Main footer */}
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5"
                            aria-label="Porate Chai home"
                        >
                            <span className="flex h-8 w-8 items-center justify-center">
                                <img
                                    src="/academic-cap.svg"
                                    alt=""
                                    className="h-7 w-7"
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="text-lg font-bold tracking-tight text-white">
                                Porate<span className="text-indigo-400">Chai</span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                            Connect with qualified educators and academic mentors for
                            personalized 1-on-1 tutoring, syllabus guidance, and structured
                            cohort classes.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-emerald-400">
                                <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                                Verified Faculty
                            </span>

                            <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-indigo-300">
                                <Award className="h-3.5 w-3.5" aria-hidden="true" />
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

                {/* Bottom footer */}
                <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {year} Pirate Chai Network</span>

                    <nav
                        aria-label="Footer navigation"
                        className="flex items-center gap-5"
                    >
                        <Link
                            href="/how-it-works"
                            className="transition-colors hover:text-white"
                        >
                            How It Works
                        </Link>

                        <Link
                            href="/faq"
                            className="transition-colors hover:text-white"
                        >
                            Support
                        </Link>

                        <Link
                            href="/privacy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="transition-colors hover:text-white"
                        >
                            Terms
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}