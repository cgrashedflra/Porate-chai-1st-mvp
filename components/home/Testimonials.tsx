"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard, TestimonialCardProps } from '@/components/TestimonialCard';

const testimonialsData: TestimonialCardProps[] = [
    {
        quote:
            'আমি আগে অনলাইনে ক্লাস করতে অনেক দ্বিধায় ছিলাম। কিন্তু পড়াতে চাই-এ সঠিক শিক্ষক খুঁজে পেয়ে এখন নিয়মিত পড়াশোনা করছি। বিশেষ করে ম্যাথের স্যারের বোঝানোর ধরনটা অসাধারণ!',
        rating: 5.0,
        authorName: 'রাফিউল ইসলাম',
        authorRole: 'HSC Student',
        avatarUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
        isHighlighted: false,
    },
    {
        quote:
            'আমি একজন নতুন শিক্ষক হিসেবে পড়াতে চাই প্ল্যাটফর্মে যোগ দিয়ে খুবই সন্তুষ্ট। এখানে শিক্ষার্থীদের সাথে সংযোগ করা, ক্লাস নেওয়া এবং নিজেকে পরিচিত করার প্রক্রিয়াটা খুবই সহজ এবং পেশাদার।',
        rating: 5.0,
        authorName: 'সায়মা আক্তার',
        authorRole: 'Math Teacher',
        avatarUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        isHighlighted: true,
    },
    {
        quote:
            'আমি ঢাকার বাইরে থাকি, তাই ভালো টিউটর পাওয়া সবসময় কঠিন ছিল। পড়াতে চাই আমাকে এমন একজন শিক্ষকের সাথে যুক্ত করেছে যিনি আমার টার্গেট অনুযায়ী পড়ান এবং সবসময় সাপোর্ট দেন।',
        rating: 5.0,
        authorName: 'নাইম হাসান',
        authorRole: 'Class 10 Student',
        avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        isHighlighted: false,
    },
];

export const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="relative w-full bg-slate-50/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>আমাদের শিক্ষার্থীদের কথা</span>
                </div>

                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 leading-tight mb-4">
                    তাদের শেখার গল্প, <br />
                    <span className="text-emerald-500">আমাদের অনুপ্রেরণা</span>
                </h2>

                {/* Subtitle */}
                <p className="text-center text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed mb-16">
                    হাজারো শিক্ষার্থী ইতিমধ্যেই তাদের পছন্দের শিক্ষক খুঁজে পেয়েছে পড়াতে চাই-এ। <br />
                    চলুন, তাদের কিছু অভিজ্ঞতা থেকে জেনে নেই।
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch mb-12">
                    {testimonialsData.map((item, index) => (
                        <TestimonialCard
                            key={index}
                            quote={item.quote}
                            rating={item.rating}
                            authorName={item.authorName}
                            authorRole={item.authorRole}
                            avatarUrl={item.avatarUrl}
                            isHighlighted={index === activeIndex}
                        />
                    ))}
                </div>

                {/* Carousel Pagination Controls */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1))}
                        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-white hover:border-slate-300 transition shadow-sm"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {testimonialsData.map((_, dotIdx) => (
                            <button
                                key={dotIdx}
                                onClick={() => setActiveIndex(dotIdx)}
                                className={`h-2 rounded-full transition-all duration-300 ${dotIdx === activeIndex
                                    ? 'w-6 bg-blue-600'
                                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setActiveIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0))}
                        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-white hover:border-slate-300 transition shadow-sm"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;