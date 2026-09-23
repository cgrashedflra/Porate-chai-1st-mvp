import React from 'react';
import { Users, CalendarCheck2, Video, Star, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { BenefitCard } from '@/components/BenefitCard';
import { MockupFrame } from '@/components/home/MockupFrame';

export const BenefitsSection = () => {
    return (
        <section className="relative w-full bg-neutral-20/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="max-w-2xl mb-14 relative">
                    {/* Top Pill Tag */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-xs font-bold text-primary-500">
                            আমাদের সুবিধাসমূহ
                        </span>
                        <span className="w-8 h-[1.5px] bg-primary-200" />
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
                        শিখতে, শেখাতে — <br />
                        <span className="text-green-500">সবকিছু এক প্ল্যাটফর্মে</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        পড়াতে চাই হলো শিক্ষার্থী ও শিক্ষকের মধ্যে একটি সহজ, নিরাপদ এবং বিশ্বস্ত
                        সংযোগ স্থাপনকারী প্ল্যাটফর্ম — যেখানে শেখা হয় আরও সহজ, আর শেখানো হয়
                        আরও অর্থবহ।
                    </p>

                    {/* Hand-drawn Doodled Annotation Box */}
                    <div className="glass-card hidden lg:block absolute -right-48 top-4 rotate-12 text-primary-500 text-xs font-bold bg-primary-50/90 px-4 py-2 rounded-2xl shadow-sm shadow-primary-500/20">
                        ভালো শিক্ষাই <br />
                        উজ্জ্বল ভবিষ্যৎ ✨
                    </div>
                </div>

                {/* 4-Card Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {/* Card 1: Find Teacher */}
                    <BenefitCard
                        icon={<Users className="w-6 h-6 text-primary-500" />}
                        iconBgColor="bg-primary-100/80"
                        cardBgGradient="gradient-tint-primary"
                        title="শিক্ষক খুঁজুন"
                        description="আপনার পছন্দের বিষয় অনুযায়ী অভিজ্ঞ ও যাচাইকৃত শিক্ষকদের থেকে বেছে নিন।"
                        actionText="আরও জানুন"
                        actionTextColor="text-primary-500 hover:text-primary-700"
                        illustration={
                            <MockupFrame className="relative">
                                <div className="flex items-center gap-2 mb-2">
                                    <Image
                                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80"
                                        alt="Teacher"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-xl object-cover"
                                    />
                                    <div className="text-[10px]">
                                        <div className="flex items-center gap-1 text-orange-500 font-bold">
                                            <span>4.9</span>
                                            <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1 text-[9px] font-medium text-neutral-600">
                                    <div className="bg-primary-50 text-primary-500 px-2 py-0.5 rounded-md w-fit">
                                        গণিত
                                    </div>
                                    <div className="bg-neutral-20 px-2 py-0.5 rounded-md w-fit">
                                        ইংরেজি
                                    </div>
                                    <div className="bg-neutral-20 px-2 py-0.5 rounded-md w-fit">
                                        বিজ্ঞান
                                    </div>
                                </div>
                            </MockupFrame>
                        }
                    />

                    {/* Card 2: Book Class */}
                    <BenefitCard
                        icon={<CalendarCheck2 className="w-6 h-6 text-green-600" />}
                        iconBgColor="bg-green-100/80"
                        cardBgGradient="gradient-tint-green"
                        glowClassName="shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                        title="সহজে ক্লাস বুক করুন"
                        description="আপনার সুবিধামত সময় ও শিক্ষকের সাথে ক্লাস বুক করুন। সম্পূর্ণ অনলাইন ও ঝামেলাহীন প্রক্রিয়া।"
                        actionText="আরও জানুন"
                        actionTextColor="text-green-600 hover:text-green-700"
                        illustration={
                            <MockupFrame className="text-center">
                                <div className="grid grid-cols-4 gap-1 mb-3 text-[9px] text-neutral-400">
                                    <div className="bg-neutral-100 p-1 rounded">স</div>
                                    <div className="bg-neutral-100 p-1 rounded">সো</div>
                                    <div className="bg-primary-50 text-primary-500 font-bold p-1 rounded">
                                        ম
                                    </div>
                                    <div className="bg-neutral-100 p-1 rounded">বু</div>
                                </div>
                                <div className="w-full bg-green-500 text-neutral-0 text-[10px] font-bold py-1.5 rounded-xl shadow-sm shadow-green-500/25 text-center">
                                    Book Class
                                </div>
                            </MockupFrame>
                        }
                    />

                    {/* Card 3: Live Class */}
                    <BenefitCard
                        icon={<Video className="w-6 h-6 text-deep-blue-600" />}
                        iconBgColor="bg-deep-blue-100/80"
                        cardBgGradient="gradient-tint-deep-blue"
                        glowClassName="shadow-md shadow-deep-blue-500/10 hover:shadow-lg hover:shadow-deep-blue-500/20"
                        title="লাইভ ক্লাস ও কনফারেন্স"
                        description="নিরাপদ ও স্থিতিশীল ভিডিও কলে লাইভ ক্লাস নিন এবং ইন্টারেক্টিভ লার্নিং অভিজ্ঞতা উপভোগ করুন।"
                        actionText="আরও জানুন"
                        actionTextColor="text-deep-blue-600 hover:text-deep-blue-700"
                        illustration={
                            <MockupFrame className="bg-neutral-900 p-2.5 text-neutral-0">
                                <div className="bg-neutral-800 rounded-xl h-20 flex items-center justify-center relative overflow-hidden mb-2">
                                    <Image
                                        fill
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                                        alt="Video Call"
                                        sizes="200px"
                                        className="object-cover opacity-80"
                                    />
                                    <div className="absolute bottom-1 right-1 bg-primary-500 p-1 rounded-full">
                                        <Video className="w-2.5 h-2.5 text-neutral-0" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-error-500" />
                                    <div className="w-2 h-2 rounded-full bg-neutral-600" />
                                    <div className="w-2 h-2 rounded-full bg-neutral-600" />
                                </div>
                            </MockupFrame>
                        }
                    />

                    {/* Card 4: Trusted Marketplace */}
                    <BenefitCard
                        icon={<Star className="w-6 h-6 text-orange-600 fill-orange-600" />}
                        iconBgColor="bg-orange-100/80"
                        cardBgGradient="gradient-tint-orange"
                        glowClassName="shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
                        title="নির্ভরযোগ্য মার্কেটপ্লেস"
                        description="রেটিং, রিভিউ ও ভেরিফিকেশন-এর মাধ্যমে নির্ভরযোগ্য শিক্ষক বেছে নিয়ে নিশ্চিন্তে শিখুন।"
                        actionText="আরও জানুন"
                        actionTextColor="text-orange-600 hover:text-orange-700"
                        illustration={
                            <MockupFrame>
                                <div className="flex items-center gap-2 mb-2">
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                                        alt="Verified Teacher"
                                        width={36}
                                        height={36}
                                        className="w-9 h-9 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-800">
                                            <span>4.8</span>
                                            <div className="flex text-orange-400">
                                                {'★'.repeat(5)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[9px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Verified Tutors</span>
                                </div>
                            </MockupFrame>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;