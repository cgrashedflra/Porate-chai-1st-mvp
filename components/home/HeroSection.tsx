import { Video } from "lucide-react";
import Image from "next/image";
import { getSubjectVariant } from '@/constants/subjects';
import { SubjectBadge } from '@/components/SubjectBadge';
import { heroTopics } from '@/data/home/features';
import ROUTES from '@/constants/routes';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SearchBar } from '@/components/ui/SearchBar';
import academicCap from "@/public/academic-cap.svg";

const HeroSection = () => {
    return (
        <section className="relative pt-8 pb-14 md:pt-12 md:pb-20 overflow-hidden bg-neutral-10" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-5 text-left">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-deep-blue-50 text-deep-blue-700 text-xs font-semibold tracking-wide">
                            <Image src={academicCap} alt="" className="w-3.5 h-3.5" width={14} height={14} />
                            <span>Verified Direct-to-Educator Network</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-deep-blue-600 tracking-tight leading-[1.12]">
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
                            <div className="max-w-xl flex items-center gap-2.5">
                                <SearchBar
                                    placeholder="What do you want to learn? (e.g. Physics, IELTS, Math)"
                                    searchHref={ROUTES.EDUCATORS}
                                    className="flex-1"
                                />
                                <ButtonLink
                                    href={ROUTES.EDUCATORS}
                                    id="hero-search-submit-btn"
                                    icon="arrowRight"
                                    className="h-11"
                                >
                                    Find a Mentor
                                </ButtonLink>
                            </div>

                            {/* Quick Subject Tags */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-3 text-xs text-neutral-500">
                                <span className="font-semibold text-neutral-400 text-xs">Popular:</span>
                                {heroTopics.map((topic) => (
                                    <SubjectBadge
                                        key={topic}
                                        label={topic}
                                        variant={getSubjectVariant(topic)}
                                        size="sm"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <ButtonLink
                                href={ROUTES.EDUCATORS}
                                id="hero-primary-cta"
                                icon="arrowRight"
                            >
                                Find a Mentor
                            </ButtonLink>
                            <ButtonLink
                                href={ROUTES.LIVE_BATCHES}
                                id="hero-secondary-cta"
                                variant="secondary"
                            >
                                Explore Classes
                            </ButtonLink>
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