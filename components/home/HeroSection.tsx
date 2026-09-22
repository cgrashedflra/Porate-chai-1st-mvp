import { ArrowRight, Search, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroTopics } from '@/data/home/features';
import ROUTES from '@/constants/routes';
import academicCap from "@/public/academic-cap.svg";

const HeroSection = () => {
    return (
        <section className="relative pt-8 pb-14 md:pt-12 md:pb-20 overflow-hidden bg-neutral-0" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-5 text-left">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-deep-blue-50 text-deep-blue-700 text-xs font-semibold tracking-wide">
                            <Image src={academicCap} alt="" className="w-3.5 h-3.5" width={14} height={14} />
                            <span>Verified Direct-to-Educator Network</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.12]">
                            Find the Right Mentor.{' '}
                            <span className="text-primary-500">
                                Learn Your Way.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                            Connect directly with verified educators for personalized 1-on-1 tutoring, focused
                            academic syllabus guidance, and structured cohort classes.
                        </p>

                        {/* HERO SEARCH */}
                        <div className="pt-2">
                            <div className="bg-neutral-0 p-1.5 rounded-xl border border-neutral-10 shadow-sm flex flex-col sm:flex-row gap-2 max-w-xl">
                                <div className="flex-1 flex items-center gap-2.5 px-3 py-1.5">
                                    <Search className="w-4 h-4 text-neutral-400 shrink-0" />
                                    <input
                                        id="hero-search-input"
                                        type="text"
                                        placeholder="What do you want to learn? (e.g. Physics, IELTS, Math)"
                                        className="w-full text-xs sm:text-sm text-neutral-900 bg-transparent focus:outline-none placeholder:text-neutral-400 font-medium"
                                    />
                                </div>
                                <Link
                                    href={ROUTES.EDUCATORS}
                                    id="hero-search-submit-btn"
                                    className="py-2.5 px-5 rounded-md bg-primary-600 hover:bg-primary-700 text-neutral-0 font-semibold text-xs sm:text-sm transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Find a Mentor</span>
                                    <ArrowRight className="w-4 h-4 text-neutral-0" />
                                </Link>
                            </div>

                            {/* Quick Subject Tags */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-3 text-xs text-neutral-500">
                                <span className="font-semibold text-neutral-400 text-xs">Popular:</span>
                                {heroTopics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-xs font-medium"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <Link
                                href={ROUTES.EDUCATORS}
                                id="hero-primary-cta"
                                className="py-2.5 px-5 rounded-md bg-primary-500 hover:bg-primary-700 text-neutral-0 font-semibold text-sm transition shadow-xs cursor-pointer flex items-center gap-2"
                            >
                                Find a Mentor
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={ROUTES.LIVE_BATCHES}
                                id="hero-secondary-cta"
                                className="py-2.5 px-5 rounded-md bg-neutral-0 border border-neutral-300 hover:bg-neutral-20 text-neutral-700 font-semibold text-sm transition cursor-pointer"
                            >
                                Explore Classes
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Visual */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Main Hero Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-md bg-neutral-900 aspect-4/5 sm:aspect-square lg:aspect-4/5">
                                <Image
                                    fill
                                    src="/assets/Hero-splash.jpeg"
                                    alt="Students collaborating with mentor in live session"
                                    sizes="(min-width: 1024px) 40vw, 90vw"
                                    className="object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" /> */}

                                <div className="absolute bottom-0 left-0 right-0 p-5 text-neutral-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/70 to-transparent">

                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

                                        <span className="text-[11px] font-bold uppercase tracking-wider text-green-300">
                                            Live 1-on-1 Tutoring & Batches
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm font-medium text-neutral-200">
                                        Real educators. Direct interaction. Zero recorded filler.
                                    </p>

                                </div>


                            </div>

                            {/* Floating Mentor Card badge */}
                            <div className="absolute -top-3 -left-3 sm:-left-5 bg-neutral-0/95 backdrop-blur-md p-3 rounded-xl shadow-md flex items-center gap-2.5 animate-in fade-in zoom-in-95 duration-300">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                                    alt="Ahsan Rahman"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-lg object-cover border border-neutral-200"
                                />
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-xs font-bold text-neutral-900">Ahsan Rahman</p>
                                        <span className="text-[10px] text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.2 rounded font-bold">
                                            ✓ BUET
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-neutral-500">HSC Physics · 4.9 ★ (86)</p>
                                </div>
                            </div>

                            {/* Floating stats badge */}
                            <div className="absolute -bottom-3 -right-3 sm:-right-5 bg-neutral-900 text-neutral-0 p-3 rounded-xl shadow-md border border-neutral-800 flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-primary-600 text-neutral-0 flex items-center justify-center">
                                    <Video className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-neutral-0">In-App Classroom</p>
                                    <p className="text-[11px] text-neutral-400">Interactive video & notes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection;