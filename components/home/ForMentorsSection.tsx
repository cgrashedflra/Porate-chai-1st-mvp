import {
    GraduationCap,
    Users,
    Calendar,
    TrendingUp,
    Headphones,
    ArrowRight,
    ChevronRight,
    Star,
    CheckCircle,
    ShieldCheck,
    BookOpen,
    Atom,
    Laptop
} from 'lucide-react';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { mentorFeatures, mentorSubjects } from '@/data/home/features';

const featureIcons = {
    users: Users,
    calendar: Calendar,
    trending: TrendingUp,
    headphones: Headphones,
} as const;

const featureStyles = {
    indigo: 'bg-deep-blue-50 text-deep-blue-600',
    emerald: 'bg-green-50 text-green-600',
    amber: 'bg-orange-50 text-orange-600',
    blue: 'bg-primary-50 text-primary-500',
} as const;

const subjectIcons = {
    atom: Atom,
    book: BookOpen,
    laptop: Laptop,
} as const;

const subjectColors = {
    blue: 'text-primary-500',
    emerald: 'text-green-500',
    amber: 'text-orange-500',
    purple: 'text-deep-blue-500',
} as const;

export default function ForMentorsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-neutral-20/50 py-12 lg:py-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column - Content */}
                    <div className="lg:col-span-6 space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-medium">
                            <GraduationCap className="w-4 h-4" />
                            <span>শিক্ষক নেটওয়ার্ক</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                            জানুন আপনি যা জানেন, <br />
                            <span className="text-primary-500">শেখান অন্যকে।</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-neutral-600 text-base leading-relaxed">
                            আপনার জ্ঞান, আপনার অভিজ্ঞতা — এখন হতে পারে অন্য কারো ভবিষ্যৎ গড়ার অনুপ্রেরণা। আমাদের প্ল্যাটফর্ম যুক্ত হোন এবং গড়ে তুলুন নিজস্ব টিচিং প্রোফাইল, ক্লাস নিন, শিক্ষার্থীদের সাথে।
                        </p>

                        {/* 2x2 Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {mentorFeatures.map((item) => {
                                const Icon = featureIcons[item.icon];

                                return (
                                    <div key={item.title} className="flex gap-3">
                                        <div className={`p-2.5 rounded-xl h-fit shrink-0 ${featureStyles[item.color]}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-800 text-sm mb-1">{item.title}</h3>
                                            <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Link href={ROUTES.AUTH.SIGN_UP} className="flex items-center gap-2 bg-primary-500 hover:bg-primary-700 text-neutral-0 font-medium px-6 py-3 rounded-full transition duration-200 text-sm shadow-md shadow-primary-500/20">
                                <span>Mentor হিসেবে যোগ দিন</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link href={ROUTES.CLASSES} className="flex items-center gap-2 bg-neutral-0 hover:bg-neutral-20 text-primary-500 font-medium px-6 py-3 rounded-full border border-primary-200 transition duration-200 text-sm">
                                <span>এখনই ক্লাস খুঁজুন</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Hero Visual */}
                    <div className="lg:col-span-6 relative flex justify-center">

                        {/* Background Backdrop Shape */}
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 rounded-3xl transform rotate-2 scale-95 -z-10"></div>

                            <div className="rounded-3xl p-6 relative">

                                {/* Online Tag */}
                                <div className="absolute top-4 right-4 z-20 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-green-100">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Online
                                </div>

                                {/* Left Floating Badges */}
                                <div className="absolute left-4 top-12 z-20 hidden sm:flex flex-col gap-2.5">
                                    {mentorSubjects.map((badge) => {
                                        const Icon = subjectIcons[badge.icon];

                                        return (
                                            <div key={badge.name} className="flex items-center gap-2 bg-neutral-0/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-neutral-30 text-xs text-neutral-700 font-medium cursor-pointer hover:shadow-md transition">
                                                <Icon className={`w-4 h-4 ${subjectColors[badge.color]}`} />
                                                <span>{badge.name}</span>
                                                <ChevronRight className="w-3 h-3 text-neutral-400 ml-1" />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Hero Instructor Image */}
                                <div className="relative z-10 flex justify-center pt-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                                        alt="Instructor"
                                        className="h-80 object-cover object-top rounded-2xl"
                                    />
                                </div>

                                {/* Sticky Sticker Tag */}
                                <div className="absolute top-12 -right-4 z-20 bg-neutral-0 px-3 py-2 rounded-xl shadow-lg border border-neutral-30 text-xs font-bold text-primary-500 rotate-12 hidden sm:block">
                                    Let&apos;s learn together!
                                </div>

                                {/* Main Profile Floating Card */}
                                <div className="bg-neutral-0 rounded-2xl p-4 shadow-xl border border-neutral-30 -mt-10 relative z-30">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <h2 className="font-bold text-neutral-800 text-base">Rafid Hasan</h2>
                                                <CheckCircle className="w-4 h-4 fill-primary-500 text-neutral-0" />
                                            </div>
                                            <p className="text-xs text-neutral-500 mt-0.5">Physics Teacher | B.Sc in Physics</p>

                                            <div className="flex items-center gap-3 mt-2 text-xs">
                                                <div className="flex items-center gap-1 text-orange-500 font-semibold">
                                                    <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                                                    <span>4.9</span>
                                                    <span className="text-neutral-400 font-normal">(320 reviews)</span>
                                                </div>
                                                <span className="text-neutral-300">|</span>
                                                <div className="font-bold text-neutral-800">
                                                    ৳400 <span className="text-neutral-400 font-normal">/ session</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href={ROUTES.MENTOR('rafid-hasan')} className="bg-primary-500 hover:bg-primary-700 text-neutral-0 px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition w-full sm:w-auto justify-center">
                                            <span>View Profile</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Sub Stats Card */}
                                <div className="bg-neutral-0/90 backdrop-blur rounded-xl p-3.5 shadow-sm border border-neutral-30 mt-3 grid grid-cols-3 gap-2 text-center relative z-30">
                                    <div className="flex flex-col items-center border-r border-neutral-100 pr-2">
                                        <div className="flex items-center gap-1 text-primary-500 text-xs font-bold">
                                            <Users className="w-3.5 h-3.5" />
                                            <span>700+</span>
                                        </div>
                                        <span className="text-[10px] text-neutral-400 mt-0.5">Students Taught</span>
                                    </div>

                                    <div className="flex flex-col items-center border-r border-neutral-100 px-2">
                                        <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                                            <Star className="w-3.5 h-3.5" />
                                            <span>4.9</span>
                                        </div>
                                        <span className="text-[10px] text-neutral-400 mt-0.5">Average Rating</span>
                                    </div>

                                    <div className="flex flex-col items-center pl-2">
                                        <div className="flex items-center gap-1 text-deep-blue-600 text-xs font-bold">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            <span>100%</span>
                                        </div>
                                        <span className="text-[10px] text-neutral-400 mt-0.5">On-Time Classes</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}