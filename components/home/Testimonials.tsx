"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from '@/components/TestimonialCard';
import { homeTestimonials } from '@/data/home/testimonials';

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="relative w-full bg-neutral-20/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-medium mb-6">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>আমাদের শিক্ষার্থীদের কথা</span>
                </div>

                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-900 leading-tight mb-4">
                    তাদের শেখার গল্প, <br />
                    <span className="text-green-500">আমাদের অনুপ্রেরণা</span>
                </h2>

                {/* Subtitle */}
                <p className="text-center text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed mb-16">
                    হাজারো শিক্ষার্থী ইতিমধ্যেই তাদের পছন্দের শিক্ষক খুঁজে পেয়েছে পড়াতে চাই-এ। <br />
                    চলুন, তাদের কিছু অভিজ্ঞতা থেকে জেনে নেই।
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch mb-12">
                    {homeTestimonials.map((item, index) => (
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
                        onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : homeTestimonials.length - 1))}
                        className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-0 hover:border-neutral-300 transition shadow-sm shadow-primary-500/10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {homeTestimonials.map((_, dotIdx) => (
                            <button
                                key={dotIdx}
                                onClick={() => setActiveIndex(dotIdx)}
                                className={`h-2 rounded-full transition-all duration-300 ${dotIdx === activeIndex
                                    ? 'w-6 bg-primary-500'
                                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setActiveIndex((prev) => (prev < homeTestimonials.length - 1 ? prev + 1 : 0))}
                        className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-0 hover:border-neutral-300 transition shadow-sm shadow-primary-500/10"
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