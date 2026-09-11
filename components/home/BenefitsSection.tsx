import React from 'react';
import { Users, CalendarCheck2, Video, Star, CheckCircle2 } from 'lucide-react';
import { BenefitCard } from '@/components/BenefitCard';

export const BenefitsSection: React.FC = () => {
    return (
        <section className="relative w-full bg-slate-50/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="max-w-2xl mb-14 relative">
                    {/* Top Pill Tag */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="text-xs font-bold text-blue-600">
                            আমাদের সুবিধাসমূহ
                        </span>
                        <span className="w-8 h-[1.5px] bg-blue-200" />
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                        শিখতে, শেখাতে — <br />
                        <span className="text-emerald-500">সবকিছু এক প্ল্যাটফর্মে</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        পড়াতে চাই হলো শিক্ষার্থী ও শিক্ষকের মধ্যে একটি সহজ, নিরাপদ এবং বিশ্বস্ত
                        সংযোগ স্থাপনকারী প্ল্যাটফর্ম — যেখানে শেখা হয় আরও সহজ, আর শেখানো হয়
                        আরও অর্থবহ।
                    </p>

                    {/* Hand-drawn Doodled Annotation Box */}
                    <div className="hidden lg:block absolute -right-48 top-4 rotate-12 text-blue-600 text-xs font-bold bg-blue-50/90 px-4 py-2 rounded-2xl border border-blue-100 shadow-sm">
                        ভালো শিক্ষাই <br />
                        উজ্জ্বল ভবিষ্যৎ ✨
                    </div>
                </div>

                {/* 4-Card Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {/* Card 1: Find Teacher */}
                    <BenefitCard
                        icon={<Users className="w-6 h-6 text-blue-600" />}
                        iconBgColor="bg-blue-100/80"
                        cardBgGradient="bg-gradient-to-b from-blue-50/50 to-blue-50/10"
                        title="শিক্ষক খুঁজুন"
                        description="আপনার পছন্দের বিষয় অনুযায়ী অভিজ্ঞ ও যাচাইকৃত শিক্ষকদের থেকে বেছে নিন।"
                        actionText="আরও জানুন"
                        actionTextColor="text-blue-600 hover:text-blue-700"
                        illustration={
                            <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 w-full max-w-[200px] relative">
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80"
                                        alt="Teacher"
                                        className="w-10 h-10 rounded-xl object-cover"
                                    />
                                    <div className="text-[10px]">
                                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                                            <span>4.9</span>
                                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1 text-[9px] font-medium text-slate-600">
                                    <div className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md w-fit">
                                        গণিত
                                    </div>
                                    <div className="bg-slate-50 px-2 py-0.5 rounded-md w-fit">
                                        ইংরেজি
                                    </div>
                                    <div className="bg-slate-50 px-2 py-0.5 rounded-md w-fit">
                                        বিজ্ঞান
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Card 2: Book Class */}
                    <BenefitCard
                        icon={<CalendarCheck2 className="w-6 h-6 text-emerald-600" />}
                        iconBgColor="bg-emerald-100/80"
                        cardBgGradient="bg-gradient-to-b from-emerald-50/50 to-emerald-50/10"
                        title="সহজে ক্লাস বুক করুন"
                        description="আপনার সুবিধামত সময় ও শিক্ষকের সাথে ক্লাস বুক করুন। সম্পূর্ণ অনলাইন ও ঝামেলাহীন প্রক্রিয়া।"
                        actionText="আরও জানুন"
                        actionTextColor="text-emerald-600 hover:text-emerald-700"
                        illustration={
                            <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 w-full max-w-[200px] text-center">
                                <div className="grid grid-cols-4 gap-1 mb-3 text-[9px] text-slate-400">
                                    <div className="bg-slate-100 p-1 rounded">স</div>
                                    <div className="bg-slate-100 p-1 rounded">সো</div>
                                    <div className="bg-blue-50 text-blue-600 font-bold p-1 rounded">
                                        ম
                                    </div>
                                    <div className="bg-slate-100 p-1 rounded">বু</div>
                                </div>
                                <button className="w-full bg-emerald-500 text-white text-[10px] font-bold py-1.5 rounded-xl shadow-sm">
                                    Book Class
                                </button>
                            </div>
                        }
                    />

                    {/* Card 3: Live Class */}
                    <BenefitCard
                        icon={<Video className="w-6 h-6 text-indigo-600" />}
                        iconBgColor="bg-indigo-100/80"
                        cardBgGradient="bg-gradient-to-b from-indigo-50/50 to-indigo-50/10"
                        title="লাইভ ক্লাস ও কনফারেন্স"
                        description="নিরাপদ ও স্থিতিশীল ভিডিও কলে লাইভ ক্লাস নিন এবং ইন্টারেক্টিভ লার্নিং অভিজ্ঞতা উপভোগ করুন।"
                        actionText="আরও জানুন"
                        actionTextColor="text-indigo-600 hover:text-indigo-700"
                        illustration={
                            <div className="bg-slate-900 rounded-2xl p-2.5 shadow-md border border-slate-800 w-full max-w-[200px] text-white">
                                <div className="bg-slate-800 rounded-xl h-20 flex items-center justify-center relative overflow-hidden mb-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                                        alt="Video Call"
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute bottom-1 right-1 bg-blue-600 p-1 rounded-full">
                                        <Video className="w-2.5 h-2.5 text-white" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                                </div>
                            </div>
                        }
                    />

                    {/* Card 4: Trusted Marketplace */}
                    <BenefitCard
                        icon={<Star className="w-6 h-6 text-amber-600 fill-amber-600" />}
                        iconBgColor="bg-amber-100/80"
                        cardBgGradient="bg-gradient-to-b from-amber-50/50 to-amber-50/10"
                        title="নির্ভরযোগ্য মার্কেটপ্লেস"
                        description="রেটিং, রিভিউ ও ভেরিফিকেশন-এর মাধ্যমে নির্ভরযোগ্য শিক্ষক বেছে নিয়ে নিশ্চিন্তে শিখুন।"
                        actionText="আরও জানুন"
                        actionTextColor="text-amber-600 hover:text-amber-700"
                        illustration={
                            <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 w-full max-w-[200px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                                        alt="Verified Teacher"
                                        className="w-9 h-9 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                                            <span>4.8</span>
                                            <div className="flex text-amber-400">
                                                {'★'.repeat(5)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Verified Tutors</span>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;