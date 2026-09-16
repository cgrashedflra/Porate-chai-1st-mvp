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
            <h3 className="overline mb-4 text-neutral-20">{title}</h3>

            <ul className="space-y-2.5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={
                                link.featured
                                    ? "body-sm font-medium text-primary-300 transition-colors hover:text-primary-200"
                                    : "body-sm text-neutral-100 transition-colors hover:text-neutral-0"
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
        <footer className="border-t border-deep-blue-800 bg-neutral-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 gap-10 border-b border-deep-blue-800 pb-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
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

                            <span className="text-lg font-bold tracking-tight text-neutral-0">
                                Porate
                                <span className="text-primary-400">Chai</span>
                            </span>
                        </Link>

                        <p className="body-sm mt-4 max-w-sm text-neutral-100">
                            Connect with qualified educators and academic mentors for
                            personalized 1-on-1 tutoring, syllabus guidance, and
                            structured cohort classes.
                        </p>

                        {/* Trust badges */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-md bg-deep-blue-800 px-2.5 py-1 text-xs font-medium text-green-300">
                                <Shield
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                                Verified Faculty
                            </span>

                            <span className="inline-flex items-center gap-1.5 rounded-md bg-deep-blue-800 px-2.5 py-1 text-xs font-medium text-primary-200">
                                <Award
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                                Direct Booking
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
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

                {/* Bottom bar */}
                <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="caption text-neutral-300">
                        © {year} Porate Chai Network
                    </span>

                    <nav
                        aria-label="Footer navigation"
                        className="flex flex-wrap items-center gap-x-5 gap-y-2"
                    >
                        <Link
                            href="/how-it-works"
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            How It Works
                        </Link>

                        <Link
                            href="/faq"
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            Support
                        </Link>

                        <Link
                            href="/privacy"
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            Terms
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
