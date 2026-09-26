import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import { FooterGroups, type FooterLink } from "@/config/nav";
import { Shield, Award, Mail, Phone, MapPin } from "lucide-react";
import academicCap from "@/public/academic-cap.svg";
import { NewsletterForm } from "./ui/NewsletterForm";

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
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            href={ROUTES.HOME}
                            className="inline-flex items-center gap-2.5"
                            aria-label="Porate Chai home"
                        >
                            <span className="flex h-8 w-8 items-center justify-center">
                                <Image
                                    src={academicCap}
                                    alt=""
                                    className="h-7 w-7"
                                    width={28}
                                    height={28}
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
                    {FooterGroups.map((group) => (
                        <FooterSection
                            key={group.title}
                            title={group.title}
                            links={group.links}
                        />
                    ))}
                </div>

                <NewsletterForm />

                {/* {contact section} */}
                <div className="my-8 py-8 grid sm:grid-cols-3 gap-6 border-b border-t border-deep-blue-800">
                    {[
                        { icon: Mail, label: "Email", value: "hello@poratechai.bd" },
                        { icon: Phone, label: "Phone", value: "+880 1700 000 000" },
                        { icon: MapPin, label: "Office", value: "Banani, Dhaka 1213, BD" },
                    ].map((c) => (
                        <div key={c.label} className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-deep-blue-50 grid place-items-center">
                                <c.icon className="h-4 w-4 text-primary-500" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/50">
                                    {c.label}
                                </p>
                                <p className="text-sm font-medium text-white">{c.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className=" mt-4 flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="caption text-neutral-300">
                        © {year} Porate Chai Network
                    </span>

                    <nav
                        aria-label="Footer navigation"
                        className="flex flex-wrap items-center gap-x-5 gap-y-2"
                    >
                        <Link
                            href={ROUTES.HOW_IT_WORKS_SECTION}
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            How It Works
                        </Link>

                        <Link
                            href={ROUTES.FAQ}
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            Support
                        </Link>

                        <Link
                            href={ROUTES.PRIVACY}
                            className="caption text-neutral-300 transition-colors hover:text-neutral-0"
                        >
                            Privacy
                        </Link>

                        <Link
                            href={ROUTES.TERMS}
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
