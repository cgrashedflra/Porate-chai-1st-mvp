import Link from "next/link";
import ROUTES from "@/constants/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Student → Saved
 * A single place where students pin the things that matter for later:
 *  - educators (by their profile id — `ROUTES.EDUCATOR_PROFILE(id)`),
 *  - gigs / paid offers from educators,
 *  - scheduled batch classes.
 *
 * Every link points at the canonical `ROUTES` map — never a hardcoded path.
 */
export default function SavedPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
            <header className="mb-6">
                <p className="text-sm font-medium text-indigo-600">Saved</p>
                <h1 className="mt-1 text-2xl font-bold text-slate-900">Your Saved Items</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Pin educators, gigs, and batch classes so they&apos;re always one click away.
                </p>
            </header>

            {/* Educators — saved by profile id */}
            <section className="mb-8">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-800">Saved Educators</h2>
                    <Link href={ROUTES.EDUCATORS} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        Browse educators
                    </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { name: "Dr. Ahsan Rahman", subject: "Physics · HSC", id: "dr-ahsan-rahman", rating: "4.9" },
                        { name: "Nusrat Jahan", subject: "Mathematics · Admission", id: "nusrat-jahan", rating: "4.8" },
                        { name: "Farhan Kabir", subject: "Chemistry · HSC", id: "farhan-kabir", rating: "4.7" },
                    ].map((e) => (
                        <div key={e.id} className="glass-card flex flex-col gap-2 rounded-xl p-4 shadow-sm shadow-indigo-500/10">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-semibold text-slate-900">{e.name}</p>
                                    <p className="text-sm text-slate-500">{e.subject}</p>
                                </div>
                                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                                    ★ {e.rating}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href={ROUTES.EDUCATOR_PROFILE(e.id)}
                                    className="flex-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-indigo-700"
                                >
                                    View Profile
                                </Link>
                                <a
                                    href="#"
                                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                                >
                                    Unsave
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gigs — paid offers / one-off lessons from educators */}
            <section className="mb-8">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-800">Saved Gigs</h2>
                    <Link href={ROUTES.EDUCATORS} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        Find more gigs
                    </Link>
                </div>
                <div className="glass-card overflow-hidden rounded-xl shadow-sm shadow-indigo-500/10">
                    {[
                        { title: "1-on-1 HSC Physics Crash Course", educator: "Dr. Ahsan Rahman", price: "৳500/hr" },
                        { title: "SSC Math Problem-Solving Sessions", educator: "Nusrat Jahan", price: "৳400/hr" },
                    ].map((g) => (
                        <div key={g.title} className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 last:border-0">
                            <div>
                                <p className="font-medium text-slate-800">{g.title}</p>
                                <p className="text-sm text-slate-500">{g.educator}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-emerald-600">{g.price}</span>
                                <ButtonLink href="#" size="sm">
                                    Book
                                </ButtonLink>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Batch classes — scheduled live batches the student pinned */}
            <section>
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-800">Saved Batch Classes</h2>
                    <Link href={ROUTES.LIVE_BATCHES} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        View batches
                    </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "HSC Physics Live Batch", educator: "Dr. Ahsan Rahman", when: "Today 07:00 PM", id: "hsc-physics-batch" },
                        { title: "Integration Masterclass", educator: "Nusrat Jahan", when: "Tomorrow 06:00 PM", id: "integration-batch" },
                    ].map((b) => (
                        <div key={b.id} className="glass-card flex flex-col gap-2 rounded-xl p-4 shadow-sm shadow-indigo-500/10">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="font-semibold text-slate-900">{b.title}</p>
                                    <p className="text-sm text-slate-500">{b.educator}</p>
                                </div>
                                <a href="#" className="text-slate-400 hover:text-rose-500" aria-label="Unsave batch">
                                    ✕
                                </a>
                            </div>
                            <p className="flex items-center gap-1.5 text-sm text-slate-500">
                                <span aria-hidden>🗓</span> {b.when}
                            </p>
                            <Link
                                href={ROUTES.LIVE_BATCH(b.id)}
                                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Join Batch
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
