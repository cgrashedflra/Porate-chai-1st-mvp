import React from 'react';
import { User, GraduationCap, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

export interface CTASectionProps {
    studentBtnText?: string;
    mentorBtnText?: string;
    onStudentClick?: () => void;
    onMentorClick?: () => void;
}

export const CTASection = ({
    studentBtnText = 'আমি শিক্ষার্থী',
    mentorBtnText = 'আমি মেন্টর',
    onStudentClick,
    onMentorClick,
}: CTASectionProps) => {
    return (
        <section className="relative w-full bg-neutral-20/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Main CTA Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">

                    {/* Left Student Visual Side */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start relative order-2 lg:order-1">
                        <div className="relative w-full max-w-xs sm:max-w-sm">
                            {/* Sticker Badge - Left */}
                            <div className="absolute -top-6 left-2 z-20 bg-neutral-0 px-3.5 py-2 rounded-2xl shadow-md border border-neutral-30 text-xs font-bold text-primary-500 -rotate-6">
                                আমি শিখতে চাই...
                            </div>

                            {/* Character Image Placeholder Container */}
                            <div className="relative rounded-3xl bg-linear-to-tr from-primary-100/70 to-deep-blue-50/30 p-4 pt-8 flex flex-col items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80"
                                    alt="Learner Student"
                                    className="w-full h-56 sm:h-64 object-cover object-top rounded-2xl shadow-sm"
                                />

                                {/* Stacked Book Labels */}
                                <div className="w-full space-y-1 mt-3">
                                    <div className="bg-primary-500 text-neutral-0 text-[10px] font-bold py-1 px-3 rounded-lg text-center shadow-sm">
                                        Better Skills
                                    </div>
                                    <div className="bg-green-500 text-neutral-0 text-[10px] font-bold py-1 px-3 rounded-lg text-center shadow-sm">
                                        Bigger Dreams
                                    </div>
                                    <div className="bg-orange-500 text-neutral-0 text-[10px] font-bold py-1 px-3 rounded-lg text-center shadow-sm">
                                        Bright Future
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Main Content & Dual CTA Buttons */}
                    <div className="lg:col-span-6 text-center space-y-6 px-2 sm:px-6 order-1 lg:order-2 z-10">

                        {/* Top Pill Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-medium">
                            <Heart className="w-3.5 h-3.5 fill-primary-500 text-primary-500" />
                            <span>শিখি • শেখাই • একসাথে এগিয়ে যাই</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
                            তোমার শেখার যাত্রা <br />
                            <span className="text-green-500">শুরু হোক আজই</span>
                        </h2>

                        {/* Description */}
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                            পড়াতে চাই — যেখানে তুমি পাবে সেরা শিক্ষক, আর তুমি হতে পারো কোনো শিক্ষার্থীর অনুপ্রেরণা। শিখি, শেখাই, গড়ি উজ্জ্বল ভবিষ্যৎ।
                        </p>

                        {/* Action Buttons Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">

                            {/* Student Action Box */}
                            <div className="space-y-2">
                                {onStudentClick ? (
                                    <button
                                        type="button"
                                        onClick={onStudentClick}
                                        className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-700 text-neutral-0 font-semibold text-sm py-3.5 px-5 rounded-2xl transition duration-200 shadow-md shadow-primary-500/20"
                                    >
                                        <User className="w-4 h-4" />
                                        <span>{studentBtnText}</span>
                                        <ArrowRight className="w-4 h-4 ml-auto" />
                                    </button>
                                ) : (
                                    <Link href={ROUTES.MENTORS} className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-700 text-neutral-0 font-semibold text-sm py-3.5 px-5 rounded-2xl transition duration-200 shadow-md shadow-primary-500/20">
                                        <User className="w-4 h-4" />
                                        <span>{studentBtnText}</span>
                                        <ArrowRight className="w-4 h-4 ml-auto" />
                                    </Link>
                                )}
                                <p className="text-[11px] text-neutral-400">
                                    কোর্স খুঁজুন, শিক্ষক বেছে নিন, এবং আজই ক্লাস শুরু করুন।
                                </p>
                            </div>

                            {/* Mentor Action Box */}
                            <div className="space-y-2">
                                {onMentorClick ? (
                                    <button
                                        type="button"
                                        onClick={onMentorClick}
                                        className="w-full flex items-center justify-center gap-2 bg-neutral-0 hover:bg-green-50/50 text-green-600 border border-green-500 font-semibold text-sm py-3.5 px-5 rounded-2xl transition duration-200"
                                    >
                                        <GraduationCap className="w-4 h-4 text-green-600" />
                                        <span>{mentorBtnText}</span>
                                        <ArrowRight className="w-4 h-4 ml-auto" />
                                    </button>
                                ) : (
                                    <Link href={ROUTES.AUTH.SIGN_UP} className="w-full flex items-center justify-center gap-2 bg-neutral-0 hover:bg-green-50/50 text-green-600 border border-green-500 font-semibold text-sm py-3.5 px-5 rounded-2xl transition duration-200">
                                        <GraduationCap className="w-4 h-4 text-green-600" />
                                        <span>{mentorBtnText}</span>
                                        <ArrowRight className="w-4 h-4 ml-auto" />
                                    </Link>
                                )}
                                <p className="text-[11px] text-neutral-400">
                                    আপনার জ্ঞান দিয়ে অনুপ্রেরণা ছড়িয়ে দিন।
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Mentor Visual Side */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-end relative order-3">
                        <div className="relative w-full max-w-xs sm:max-w-sm">

                            {/* Sticker Badge - Right */}
                            <div className="absolute -top-6 right-2 z-20 bg-neutral-0 px-3.5 py-2 rounded-2xl shadow-md border border-neutral-30 text-xs font-bold text-green-600 rotate-6">
                                আমি শেখাতে চাই...
                            </div>

                            {/* Character Image Placeholder Container */}
                            <div className="relative rounded-3xl bg-linear-to-tl from-green-100/70 to-skyblue-50/30 p-4 pt-8 flex flex-col items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                                    alt="Mentor Teacher"
                                    className="w-full h-64 sm:h-72 object-cover object-top rounded-2xl shadow-sm"
                                />
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Doodle Tag */}
                <div className="mt-12 text-center">
                    <div className="inline-block transform -rotate-3 bg-primary-50/80 px-4 py-2 rounded-2xl border border-primary-100 text-primary-500 text-xs font-bold shadow-sm">
                        ভালো শিক্ষাঃ ভালো ভবিষ্যৎ 🚀
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTASection;