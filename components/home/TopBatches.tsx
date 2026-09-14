"use client";

import React, { useState } from 'react';
import { Star, ArrowRight, Award, ShieldCheck, Users, GraduationCap, ChevronDown } from 'lucide-react';
import { ClassCard } from '@/components/ClassCard';
import { batchCategories, homeBatches } from '@/data/home/batches';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

const categoryGroups: Record<string, string[]> = {
    Engineering: ['Web Development', 'Data Science'],
    Business: ['Business'],
    Design: ['UI/UX Design'],
    Languages: ['Language'],
};

export const TopBatches = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <section className="relative w-full bg-neutral-20/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
                    <div className="space-y-3 max-w-2xl">
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-semibold">
                            <Star className="w-3.5 h-3.5 fill-primary-500 text-primary-500" />
                            <span>Featured Batches</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
                            Popular Batch Classes <br />
                            for Your <span className="text-primary-500">Learning Journey</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                            Join our structured batch classes and learn with expert mentors, from basics to advanced. Choose your track and start today!
                        </p>
                    </div>

                    {/* View All Button */}
                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <Link
                            href={ROUTES.CLASSES}
                            className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-700 font-semibold text-xs transition-colors duration-200"
                        >
                            <span>View All Batches</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center gap-2">
                            {batchCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${activeCategory === cat
                                        ? 'bg-primary-500 text-neutral-0 shadow-sm'
                                        : 'bg-neutral-0 text-neutral-600 hover:bg-neutral-100 border border-neutral-30'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}

                            <Link href={ROUTES.CLASSES} className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold bg-neutral-0 text-neutral-600 hover:bg-neutral-100 border border-neutral-30">
                                <span>More</span>
                                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Batches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
                    {homeBatches
                        .filter((batch) => activeCategory === 'All' || categoryGroups[activeCategory]?.includes(batch.category))
                        .map((batch) => (
                            <ClassCard key={batch.id} {...batch} />
                        ))}
                </div>

                {/* Bottom Feature Highlights Bar */}
                <div className="bg-neutral-0/80 backdrop-blur rounded-3xl p-6 border border-neutral-30 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-primary-50 text-primary-500 shrink-0">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-neutral-900">Expert Mentors</h4>
                            <p className="text-[11px] text-neutral-400">Learn from industry professionals</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-primary-50 text-primary-500 shrink-0">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-neutral-900">Flexible Learning</h4>
                            <p className="text-[11px] text-neutral-400">Learn at your pace, from anywhere</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-primary-50 text-primary-500 shrink-0">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-neutral-900">Small Batch Size</h4>
                            <p className="text-[11px] text-neutral-400">Get personal attention</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-primary-50 text-primary-500 shrink-0">
                            <Award className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-neutral-900">Certificate of Completion</h4>
                            <p className="text-[11px] text-neutral-400">Showcase your new skills</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TopBatches;