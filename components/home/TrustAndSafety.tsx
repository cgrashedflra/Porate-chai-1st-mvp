import React from 'react';
import {
    ShieldCheck,
    Wallet,
    CheckCircle2,
    CalendarCheck,
    Globe,
    Lock,
    Users
} from 'lucide-react';
import { TrustCard } from '@/components/TrustCard';
import ROUTES from '@/constants/routes';
import { ButtonLink } from '@/components/ui/ButtonLink';

export const TrustAndSafety = () => {
    return (
        <section className="relative w-full bg-neutral-20/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Top Header Badge */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-semibold mb-6">
                        <ShieldCheck className="w-4 h-4 text-primary-500" />
                        <span>নিরাপত্তা ও নিশ্চয়তা</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
                        আপনার আস্থাই আমাদের শক্তি <br />
                        <span className="text-primary-500">নিরাপদ, স্বচ্ছ ও নিশ্চিন্ত প্ল্যাটফর্ম</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                        আপনার সময়, টাকা এবং শিক্ষার মান — সবকিছুর নিরাপত্তায় আমরা প্রতিশ্রুতিবদ্ধ। <br className="hidden sm:inline" />
                        আমাদের আধুনিক সুরক্ষা ব্যবস্থা এবং কঠোর যাচাই প্রক্রিয়ার মাধ্যমে আমরা নিশ্চিত করি আপনি এবং আপনার মেন্টর দুজনেই থাকবেন সম্পূর্ণ নিরাপদ।
                    </p>

                    {/* Decorative Doodled Text Tag */}
                    <div className="hidden lg:block absolute -right-12 top-2 rotate-12 text-primary-500 text-xs font-bold bg-primary-50/80 px-3 py-1.5 rounded-xl border border-primary-100 shadow-sm">
                        কারণ, শিক্ষা মানেই বিশ্বাস!
                    </div>
                </div>

                {/* 3-Column Layout with Center Visual 3D Shield */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">

                    {/* Left Column (Cards 01 & 02) */}
                    <div className="lg:col-span-4 space-y-6">
                        <TrustCard
                            stepNumber="01"
                            icon={<Wallet className="w-5 h-5 text-primary-500" />}
                            iconBgColor="bg-primary-50"
                            title="অগ্রিম পেমেন্ট & এসক্রো সুরক্ষা"
                            description="স্টুডেন্টরা আগে পেমেন্ট করলে সোাট আমাদের নিরাপদ এসক্রো অ্যাকাউন্টে থাকে। মেন্টর ক্লাস করালে পরই পেমেন্ট রিলিজ হয়।"
                            tag="Your Money, Our Responsibility"
                            tagBgColor="bg-primary-50"
                            tagTextColor="text-primary-500"
                        />

                        <TrustCard
                            stepNumber="02"
                            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
                            iconBgColor="bg-green-50"
                            title="কঠোর যাচাই প্রক্রিয়ায় মেন্টর নির্বাচন"
                            description="প্রতিটি মেন্টরকে আমাদের শক্তিশালী প্রার্থী নিরীক্ষণ প্রক্রিয়ায় বাছাই করা হয়। শুধুমাত্র পেশাদার, সৎ, নির্ভরযোগ্য এবং যোগ্য শিক্ষকরাই পান আমাদের প্ল্যাটফর্মে সুযোগ।"
                            tag="Verified • Qualified • Trusted"
                            tagBgColor="bg-green-50"
                            tagTextColor="text-green-600"
                        />
                    </div>

                    {/* Center Column (3D Security Shield Visual) */}
                    <div className="lg:col-span-4 flex justify-center py-8 lg:py-0 relative">
                        <div className="relative w-full max-w-sm aspect-square bg-linear-to-b from-primary-100/50 to-deep-blue-100/30 rounded-full p-8 flex items-center justify-center">

                            {/* Floating Badge - Top Left */}
                            <div className="absolute top-8 left-0 z-20 bg-neutral-0/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-neutral-30 flex items-center gap-1.5 text-xs font-medium text-green-600">
                                <CheckCircle2 className="w-3.5 h-3.5 fill-green-500 text-neutral-0" />
                                <span>Secure Payment</span>
                            </div>

                            {/* Floating Badge - Middle Right */}
                            <div className="absolute top-20 right-0 z-20 bg-neutral-0/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-neutral-30 flex items-center gap-1.5 text-xs font-medium text-primary-500">
                                <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
                                <span>Verified Mentor</span>
                            </div>

                            {/* Central 3D Shield Display */}
                            <div className="relative z-10 w-44 h-52 bg-linear-to-b from-primary-500 to-deep-blue-600 rounded-b-full rounded-t-3xl p-1 shadow-2xl flex items-center justify-center border-4 border-neutral-0/60">
                                <div className="w-full h-full bg-primary-500/90 rounded-b-full rounded-t-2xl flex items-center justify-center">
                                    <div className="w-16 h-20 bg-neutral-0 rounded-xl shadow-inner flex items-center justify-center">
                                        <Lock className="w-8 h-8 text-primary-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Bottom Left */}
                            <div className="absolute bottom-8 left-2 z-20 bg-neutral-0/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-neutral-30 flex items-center gap-1.5 text-xs font-medium text-deep-blue-600">
                                <Users className="w-3.5 h-3.5 text-deep-blue-600" />
                                <span>Safe for Everyone</span>
                            </div>

                        </div>
                    </div>

                    {/* Right Column (Cards 03 & 04) */}
                    <div className="lg:col-span-4 space-y-6">
                        <TrustCard
                            stepNumber="03"
                            icon={<CalendarCheck className="w-5 h-5 text-deep-blue-600" />}
                            iconBgColor="bg-deep-blue-50"
                            title="সময়ে ক্লাস, নিশ্চিত পেমেন্ট"
                            description="মেন্টর নিশ্চিত সময়ে ক্লাস উপস্থিত হয়ে সঠিকভাবে ক্লাস করালে তবেই পেমেন্ট রিলিজ হয়। ক্লাস সম্পন্ন না হলে পেমেন্ট আটকে থাকে।"
                            tag="No Class = No Payment"
                            tagBgColor="bg-deep-blue-50"
                            tagTextColor="text-deep-blue-600"
                        />

                        <TrustCard
                            stepNumber="04"
                            icon={<Globe className="w-5 h-5 text-orange-600" />}
                            iconBgColor="bg-orange-50"
                            title="দূরত্ব বা অচেনা? তবুও নির্ভয়ে"
                            description="আপনি যেখানেই থাকুন না কেন — দেশ, শহর, বা বিদেশ, সবকিছুই আমরা নিশ্চিত করছি। নিরাপদ ভিডিও ক্লাস, প্রাইভেসি এবং সহায়তা দল সবসময় আপনার পাশে।"
                            tag="Anywhere • Anytime • Always"
                            tagBgColor="bg-orange-50"
                            tagTextColor="text-orange-600"
                        />
                    </div>

                </div>

                {/* Bottom Banner Component */}
                <div className="bg-neutral-0/90 backdrop-blur rounded-3xl p-6 lg:p-8 border border-neutral-30 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

                    <div className="flex items-start gap-4 max-w-2xl">
                        <div className="p-3.5 rounded-2xl bg-deep-blue-50 text-deep-blue-600 shrink-0 mt-1">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-1">
                                শিক্ষার্থীর ফাঁকিবাজি থেকে সম্পূর্ণ সুরক্ষা
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                                স্টুডেন্টরা যেন পেমেন্ট না দিয়ে ক্লাস না করে — সেই জন্য আমাদের রয়েছে কঠোর মনিটরিং ও সিকিউরিটি সিস্টেম, যাতে মেন্টরদের পরিশ্রম ও সময় সবসময় সুরক্ষিত থাকে।
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-neutral-30">
                        <div className="text-left hidden sm:block">
                            <span className="text-xs font-bold text-primary-500 block">আপনার শিক্ষা,</span>
                            <span className="text-xs font-bold text-primary-500">আমাদের অঙ্গীকার</span>
                        </div>

                        <ButtonLink href={ROUTES.AUTH.SIGN_UP} icon="arrowRight" className="w-full sm:w-auto">
                            আজই যুক্ত হোন
                        </ButtonLink>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrustAndSafety;