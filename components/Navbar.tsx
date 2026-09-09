import { GraduationCap, Menu } from 'lucide-react';
import { NAVBAR_LINKS } from '@/constants/navigation';
import ROUTES from '@/constants/routes';

export const Navbar = () => {

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Brand */}
                <a
                    href={ROUTES.HOME}
                    className="group flex items-center gap-2.5"
                    aria-label="PorateChai home"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white transition-colors group-hover:bg-indigo-700">
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                    </div>

                    <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold tracking-tight text-slate-900">
                            Porate<span className="text-indigo-600">Chai</span>
                        </span>

                        <span className="hidden text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:inline">
                            Educator Network
                        </span>
                    </div>
                </a>

                {/* Desktop navigation */}
                <nav
                    className="hidden items-center gap-1 rounded-md bg-slate-100 p-1 md:flex"
                    aria-label="Main navigation"
                >
                    {NAVBAR_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-white hover:text-slate-700"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop actions */}
                <div className="hidden items-center gap-2 md:flex">
                    <a
                        href="/login"
                        className="px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:text-indigo-600"
                    >
                        Log In
                    </a>

                    <a
                        href="/signup"
                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Mobile menu trigger */}
                <button
                    type="button"
                    className="rounded-md p-1.5 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-5 w-5" aria-hidden="true" />
                </button>

            </div>
        </header>
    );
};