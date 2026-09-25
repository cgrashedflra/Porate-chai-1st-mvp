import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { MentorCard } from '@/components/MentorCard';
import { homeMentors } from '@/data/home/mentors';
import ROUTES from '@/constants/routes';

export const TopMentors = () => {
    return (
        <section className="relative w-full bg-neutral-20/50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-semibold">
                            <Star className="w-3.5 h-3.5 fill-primary-500 text-primary-500" />
                            <span>প্রিমিয়াম মেন্টর</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
                            শীর্ষ মেন্টরদের সাথে <br />
                            <span className="text-primary-500">শিখুন, এগিয়ে যান</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            প্রমাণিত অভিজ্ঞতা, বাস্তব দক্ষতা এবং আন্তরিক গাইডেন্স — আমাদের প্ল্যাটফর্মের সেরা মেন্টরদের সাথে আপনার শেখার যাত্রা শুরু করুন।
                        </p>
                    </div>

                    {/* View All Button */}
                    <a
                        href={ROUTES.MARKETPLACE}
                        className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-700 font-semibold text-sm transition-colors duration-200 self-start md:self-end pb-1"
                    >
                        <span>সকল মেন্টর দেখুন</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {homeMentors.map((mentor) => (
                        <MentorCard key={mentor.id} {...mentor} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopMentors;