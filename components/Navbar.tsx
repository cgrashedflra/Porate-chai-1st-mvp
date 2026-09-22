import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NAVBAR_LINKS } from '@/constants/navigation';
import ROUTES from '@/constants/routes';
import academicCap from "@/public/academic-cap.svg";

export const Navbar = () => {

    return (
        <header className="sticky top-0 z-40 border-b border-neutral-30 bg-neutral-0">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a
                    href={ROUTES.HOME}
                    className="group flex items-center gap-1.5"
                    aria-label="PorateChai home"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded">
                        <Image src={academicCap} alt="logo" className="h-10 w-10" width={40} height={40} aria-hidden="true" />
                    </div>

                    <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold tracking-tight text-neutral-900">
                            Porate<span className="text-primary-500">Chai</span>
                        </span>

                        <span className="hidden text-[10px] font-bold uppercase tracking-wider text-neutral-400 sm:inline">
                            Educator Network
                        </span>
                    </div>
                </a>

                <nav
                    className="hidden items-center gap-1 rounded-md bg-neutral-20 p-1 md:flex"
                    aria-label="Main navigation"
                >
                    {NAVBAR_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded px-3 py-1 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-0 hover:text-neutral-700"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <a
                        href="/login"
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:text-primary-500"
                    >
                        Log In
                    </a>

                    <a
                        href="/signup"
                        className="rounded-md bg-primary-500 px-3.5 py-1.5 text-xs font-semibold text-neutral-0 shadow-sm transition-colors hover:bg-primary-700"
                    >
                        Sign Up
                    </a>
                </div>

                <details className="relative md:hidden">
                    <summary className="flex list-none cursor-pointer rounded-md p-1.5 text-neutral-700 transition-colors hover:bg-neutral-20 [&::-webkit-details-marker]:hidden">
                        <Menu className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Open navigation menu</span>
                    </summary>
                    <nav className="absolute right-0 top-11 z-50 flex w-48 flex-col gap-1 rounded-md border border-neutral-30 bg-neutral-0 p-2 shadow-lg" aria-label="Mobile navigation">
                        {NAVBAR_LINKS.map((link) => (
                            <Link key={link.href} href={link.href} className="rounded px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-20">
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/login" className="rounded px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-20">Log In</Link>
                        <Link href="/signup" className="rounded-md bg-primary-500 px-3 py-2 text-center text-xs font-semibold text-neutral-0 hover:bg-primary-700">Sign Up</Link>
                    </nav>
                </details>
            </div>
        </header>
    );
};