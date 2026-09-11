import React from 'react';
import {
    ShieldCheck,
    Wallet,
    CheckCircle2,
    CalendarCheck,
    Globe,
    Lock,
    Users,
    ArrowRight
} from 'lucide-react';
import { TrustCard } from '@/components/TrustCard';

export const TrustAndSafety: React.FC = () => {
    return (
        <section className="relative w-full bg-slate-50/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Top Header Badge */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span>নিরাপত্তা ও নিশ্চয়তা</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                        আপনার আস্থাই আমাদের শক্তি <br />
                        <span className="text-blue-600">নিরাপদ, স্বচ্ছ ও নিশ্চিন্ত প্ল্যাটফর্ম</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        আপনার সময়, টাকা এবং শিক্ষার মান — সবকিছুর নিরাপত্তায় আমরা প্রতিশ্রুতিবদ্ধ। <br className="hidden sm:inline" />
                        আমাদের আধুনিক সুরক্ষা ব্যবস্থা এবং কঠোর যাচাই প্রক্রিয়ার মাধ্যমে আমরা নিশ্চিত করি আপনি এবং আপনার মেন্টর দুজনেই থাকবেন সম্পূর্ণ নিরাপদ।
                    </p>

                    {/* Decorative Doodled Text Tag */}
                    <div className="hidden lg:block absolute -right-12 top-2 rotate-12 text-blue-600 text-xs font-bold bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-100 shadow-sm">
                        কারণ, শিক্ষা মানেই বিশ্বাস!
                    </div>
                </div>

                {/* 3-Column Layout with Center Visual 3D Shield */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">

                    {/* Left Column (Cards 01 & 02) */}
                    <div className="lg:col-span-4 space-y-6">
                        <TrustCard
                            stepNumber="01"
                            icon={<Wallet className="w-5 h-5 text-blue-600" />}
                            iconBgColor="bg-blue-50"
                            title="অগ্রিম পেমেন্ট & এসক্রো সুরক্ষা"
                            description="স্টুডেন্টরা আগে পেমেন্ট করলে সোাট আমাদের নিরাপদ এসক্রো অ্যাকাউন্টে থাকে। মেন্টর ক্লাস করালে পরই পেমেন্ট রিলিজ হয়।"
                            tag="Your Money, Our Responsibility"
                            tagBgColor="bg-blue-50"
                            tagTextColor="text-blue-600"
                        />

                        <TrustCard
                            stepNumber="02"
                            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                            iconBgColor="bg-emerald-50"
                            title="কঠোর যাচাই প্রক্রিয়ায় মেন্টর নির্বাচন"
                            description="প্রতিটি মেন্টরকে আমাদের শক্তিশালী প্রার্থী নিরীক্ষণ প্রক্রিয়ায় বাছাই করা হয়। শুধুমাত্র পেশাদার, সৎ, নির্ভরযোগ্য এবং যোগ্য শিক্ষকরাই পান আমাদের প্ল্যাটফর্মে সুযোগ।"
                            tag="Verified • Qualified • Trusted"
                            tagBgColor="bg-emerald-50"
                            tagTextColor="text-emerald-600"
                        />
                    </div>

                    {/* Center Column (3D Security Shield Visual) */}
                    <div className="lg:col-span-4 flex justify-center py-8 lg:py-0 relative">
                        <div className="relative w-full max-w-sm aspect-square bg-gradient-to-b from-blue-100/50 to-indigo-100/30 rounded-full p-8 flex items-center justify-center">

                            {/* Floating Badge - Top Left */}
                            <div className="absolute top-8 left-0 z-20 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                                <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-500 text-white" />
                                <span>Secure Payment</span>
                            </div>

                            {/* Floating Badge - Middle Right */}
                            <div className="absolute top-20 right-0 z-20 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 text-xs font-medium text-blue-600">
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                                <span>Verified Mentor</span>
                            </div>

                            {/* Central 3D Shield Display */}
                            <div className="relative z-10 w-44 h-52 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-b-full rounded-t-3xl p-1 shadow-2xl flex items-center justify-center border-4 border-white/60">
                                <div className="w-full h-full bg-blue-600/90 rounded-b-full rounded-t-2xl flex items-center justify-center">
                                    <div className="w-16 h-20 bg-white rounded-xl shadow-inner flex items-center justify-center">
                                        <Lock className="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Bottom Left */}
                            <div className="absolute bottom-8 left-2 z-20 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 text-xs font-medium text-purple-600">
                                <Users className="w-3.5 h-3.5 text-purple-600" />
                                <span>Safe for Everyone</span>
                            </div>

                        </div>
                    </div>

                    {/* Right Column (Cards 03 & 04) */}
                    <div className="lg:col-span-4 space-y-6">
                        <TrustCard
                            stepNumber="03"
                            icon={<CalendarCheck className="w-5 h-5 text-purple-600" />}
                            iconBgColor="bg-purple-50"
                            title="সময়ে ক্লাস, নিশ্চিত পেমেন্ট"
                            description="মেন্টর নিশ্চিত সময়ে ক্লাস উপস্থিত হয়ে সঠিকভাবে ক্লাস করালে তবেই পেমেন্ট রিলিজ হয়। ক্লাস সম্পন্ন না হলে পেমেন্ট আটকে থাকে।"
                            tag="No Class = No Payment"
                            tagBgColor="bg-purple-50"
                            tagTextColor="text-purple-600"
                        />

                        <TrustCard
                            stepNumber="04"
                            icon={<Globe className="w-5 h-5 text-amber-600" />}
                            iconBgColor="bg-amber-50"
                            title="দূরত্ব বা অচেনা? তবুও নির্ভয়ে"
                            description="আপনি যেখানেই থাকুন না কেন — দেশ, শহর, বা বিদেশ, সবকিছুই আমরা নিশ্চিত করছি। নিরাপদ ভিডিও ক্লাস, প্রাইভেসি এবং সহায়তা দল সবসময় আপনার পাশে।"
                            tag="Anywhere • Anytime • Always"
                            tagBgColor="bg-amber-50"
                            tagTextColor="text-amber-600"
                        />
                    </div>

                </div>

                {/* Bottom Banner Component */}
                <div className="bg-white/90 backdrop-blur rounded-3xl p-6 lg:p-8 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

                    <div className="flex items-start gap-4 max-w-2xl">
                        <div className="p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 mt-1">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                শিক্ষার্থীর ফাঁকিবাজি থেকে সম্পূর্ণ সুরক্ষা
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                স্টুডেন্টরা যেন পেমেন্ট না দিয়ে ক্লাস না করে — সেই জন্য আমাদের রয়েছে কঠোর মনিটরিং ও সিকিউরিটি সিস্টেম, যাতে মেন্টরদের পরিশ্রম ও সময় সবসময় সুরক্ষিত থাকে।
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                        <div className="text-left hidden sm:block">
                            <span className="text-xs font-bold text-blue-600 block">আপনার শিক্ষা,</span>
                            <span className="text-xs font-bold text-blue-600">আমাদের অঙ্গীকার</span>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-2xl transition duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 w-full sm:w-auto">
                            <span>আজই যুক্ত হোন</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrustAndSafety;