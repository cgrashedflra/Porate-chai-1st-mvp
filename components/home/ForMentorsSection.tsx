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

const FeaturesData = [
    {
        icon: <Users className="w-5 h-5 text-indigo-600" />,
        bgColor: 'bg-indigo-50',
        title: 'সারা দেশের শিক্ষার্থী',
        description: 'দেশজুড়ে হাজারো আগ্রহী শিক্ষার্থীর সাথে যুক্ত হোন।'
    },
    {
        icon: <Calendar className="w-5 h-5 text-emerald-600" />,
        bgColor: 'bg-emerald-50',
        title: 'সহজে ক্লাস বুক করুন',
        description: 'নিজের সময় অনুযায়ী ক্লাস স্লট সেট করুন এবং বুকিং নিন।'
    },
    {
        icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
        bgColor: 'bg-amber-50',
        title: 'নিজের আয় বৃদ্ধি করুন',
        description: 'আপনার দক্ষতাকে পরিণত করুন আয়ের একটি নির্ভরযোগ্য উৎসে।'
    },
    {
        icon: <Headphones className="w-5 h-5 text-blue-600" />,
        bgColor: 'bg-blue-50',
        title: 'সাপোর্ট ও গাইডলাইন',
        description: 'আমরা আছি আপনার পাশে — প্রতি ধাপে।'
    }
];

const SubjectBadges = [
    { name: 'Physics', icon: <Atom className="w-4 h-4 text-blue-500" /> },
    { name: 'Mathematics', icon: <BookOpen className="w-4 h-4 text-emerald-500" /> },
    { name: 'Chemistry', icon: <Atom className="w-4 h-4 text-amber-500" /> },
    { name: 'ICT', icon: <Laptop className="w-4 h-4 text-purple-500" /> },
];

export default function ForMentorSection() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-50/50 py-12 lg:py-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column - Content */}
                    <div className="lg:col-span-6 space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                            <GraduationCap className="w-4 h-4" />
                            <span>শিক্ষক নেটওয়ার্ক</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            জানুন আপনি যা জানেন, <br />
                            <span className="text-blue-600">শেখান অন্যকে।</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-slate-600 text-base leading-relaxed">
                            আপনার জ্ঞান, আপনার অভিজ্ঞতা — এখন হতে পারে অন্য কারো ভবিষ্যৎ গড়ার অনুপ্রেরণা। আমাদের প্ল্যাটফর্ম যুক্ত হোন এবং গড়ে তুলুন নিজস্ব টিচিং প্রোফাইল, ক্লাস নিন, শিক্ষার্থীদের সাথে।
                        </p>

                        {/* 2x2 Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {FeaturesData.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <div className={`p-2.5 rounded-xl h-fit shrink-0 ${item.bgColor}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition duration-200 text-sm shadow-md shadow-blue-500/20">
                                <span>Mentor হিসেবে যোগ দিন</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <button className="flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-600 font-medium px-6 py-3 rounded-full border border-blue-200 transition duration-200 text-sm">
                                <span>এখনই ক্লাস খুঁজুন</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Hero Visual */}
                    <div className="lg:col-span-6 relative flex justify-center">

                        {/* Background Backdrop Shape */}
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 bg-blue-100/60 rounded-3xl transform rotate-2 scale-95 -z-10"></div>

                            <div className="bg-gradient-to-b from-blue-50/80 to-indigo-50/50 rounded-3xl p-6 relative">

                                {/* Online Tag */}
                                <div className="absolute top-4 right-4 z-20 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-emerald-100">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Online
                                </div>

                                {/* Left Floating Badges */}
                                <div className="absolute left-4 top-12 z-20 flex flex-col gap-2.5 hidden sm:flex">
                                    {SubjectBadges.map((badge, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-slate-100 text-xs text-slate-700 font-medium cursor-pointer hover:shadow-md transition">
                                            {badge.icon}
                                            <span>{badge.name}</span>
                                            <ChevronRight className="w-3 h-3 text-slate-400 ml-1" />
                                        </div>
                                    ))}
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
                                <div className="absolute top-12 -right-4 z-20 bg-white px-3 py-2 rounded-xl shadow-lg border border-slate-100 text-xs font-bold text-blue-600 rotate-12 hidden sm:block">
                                    Let's learn together!
                                </div>

                                {/* Main Profile Floating Card */}
                                <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-100 mt-[-40px] relative z-30">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <h2 className="font-bold text-slate-800 text-base">Rafid Hasan</h2>
                                                <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500 text-white" />
                                            </div>
                                            <p className="text-xs text-slate-500 mt-0.5">Physics Teacher | B.Sc in Physics</p>

                                            <div className="flex items-center gap-3 mt-2 text-xs">
                                                <div className="flex items-center gap-1 text-amber-500 font-semibold">
                                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                    <span>4.9</span>
                                                    <span className="text-slate-400 font-normal">(320 reviews)</span>
                                                </div>
                                                <span className="text-slate-300">|</span>
                                                <div className="font-bold text-slate-800">
                                                    ৳400 <span className="text-slate-400 font-normal">/ session</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition w-full sm:w-auto justify-center">
                                            <span>View Profile</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Sub Stats Card */}
                                <div className="bg-white/90 backdrop-blur rounded-xl p-3.5 shadow-sm border border-slate-100 mt-3 grid grid-cols-3 gap-2 text-center relative z-30">
                                    <div className="flex flex-col items-center border-r border-slate-100 pr-2">
                                        <div className="flex items-center gap-1 text-blue-600 text-xs font-bold">
                                            <Users className="w-3.5 h-3.5" />
                                            <span>700+</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 mt-0.5">Students Taught</span>
                                    </div>

                                    <div className="flex flex-col items-center border-r border-slate-100 px-2">
                                        <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                                            <Star className="w-3.5 h-3.5" />
                                            <span>4.9</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 mt-0.5">Average Rating</span>
                                    </div>

                                    <div className="flex flex-col items-center pl-2">
                                        <div className="flex items-center gap-1 text-indigo-600 text-xs font-bold">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            <span>100%</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 mt-0.5">On-Time Classes</span>
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