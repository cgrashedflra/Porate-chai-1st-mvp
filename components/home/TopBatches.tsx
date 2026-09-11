"use client";

import React, { useState } from 'react';
import { Star, ArrowRight, Award, ShieldCheck, Users, GraduationCap, ChevronDown } from 'lucide-react';
import { ClassCard, ClassCardProps } from '@/components/ClassCard';

const categories = ['All', 'Engineering', 'Business', 'Design', 'Languages'];

const batchData: ClassCardProps[] = [
    {
        id: '1',
        category: 'Web Development',
        status: 'Live Batch',
        title: 'Full Stack Web Development',
        description: 'Learn modern web development with React, Next.js, Node.js, and PostgreSQL. Build real projects and get job-ready.',
        tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
        mentors: [
            { id: 'm1', name: 'Rahat', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80' },
            { id: 'm2', name: 'Tanvir', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
            { id: 'm3', name: 'Sabbir', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
        ],
        mentorsCountText: 'Expert Mentors',
        startDate: 'Apr 28, 2025',
        duration: '12 Weeks',
        filledSeats: 24,
        totalSeats: 30,
        currentPrice: 6500,
        originalPrice: 8000,
        discountPercentage: 18,
        primaryButtonText: 'View Batch Details',
        isSecondaryButton: false,
    },
    {
        id: '2',
        category: 'Data Science',
        status: 'Upcoming',
        title: 'Data Science with Python',
        description: 'Master data analysis, visualization, and machine learning with Python. Work on real datasets and build your portfolio.',
        tags: ['Python', 'Pandas', 'NumPy', 'ML'],
        mentors: [
            { id: 'm4', name: 'Asif', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
            { id: 'm5', name: 'Farhan', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80' },
        ],
        mentorsCountText: 'Expert Mentors',
        startDate: 'May 10, 2025',
        duration: '10 Weeks',
        filledSeats: 20,
        totalSeats: 25,
        currentPrice: 5500,
        originalPrice: 7000,
        discountPercentage: 21,
        primaryButtonText: 'Save Your Seat',
        isSecondaryButton: true,
    },
    {
        id: '3',
        category: 'UI/UX Design',
        status: 'Ongoing',
        title: 'UI/UX Design Fundamentals',
        description: 'Learn design thinking, Figma, and modern UI/UX principles. Create beautiful and user-friendly digital experiences.',
        tags: ['Figma', 'Wireframing', 'Prototyping', 'UX'],
        mentors: [
            { id: 'm6', name: 'Naim', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80' },
            { id: 'm7', name: 'Siam', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80' },
        ],
        mentorsCountText: 'Expert Mentors',
        startDate: 'Apr 15, 2025',
        duration: '8 Weeks',
        filledSeats: 15,
        totalSeats: 20,
        currentPrice: 4000,
        originalPrice: 6000,
        discountPercentage: 33,
        primaryButtonText: 'View Batch Details',
        isSecondaryButton: false,
    },
    {
        id: '4',
        category: 'Language',
        status: 'New',
        title: 'Spoken English (Confidence Building)',
        description: 'Improve your speaking, listening and communication skills with practical sessions and real-life conversations.',
        tags: ['Speaking', 'Listening', 'Grammar', 'Fluency'],
        mentors: [
            { id: 'm8', name: 'Ayesha', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
            { id: 'm9', name: 'Sadia', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80' },
        ],
        mentorsCountText: 'Expert Mentors',
        startDate: 'May 5, 2025',
        duration: '6 Weeks',
        filledSeats: 18,
        totalSeats: 25,
        currentPrice: 3500,
        originalPrice: 5000,
        discountPercentage: 30,
        primaryButtonText: 'Save Your Seat',
        isSecondaryButton: true,
    },
];

export const TopBatches: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <section className="relative w-full bg-slate-50/40 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
                    <div className="space-y-3 max-w-2xl">
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                            <span>Featured Batches</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                            Popular Batch Classes <br />
                            for Your <span className="text-blue-600">Learning Journey</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                            Join our structured batch classes and learn with expert mentors, from basics to advanced. Choose your track and start today!
                        </p>
                    </div>

                    {/* View All Button */}
                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <a
                            href="#all-batches"
                            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-xs transition-colors duration-200"
                        >
                            <span>View All Batches</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${activeCategory === cat
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}

                            <button className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-100">
                                <span>More</span>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Batches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
                    {batchData.map((batch) => (
                        <ClassCard key={batch.id} {...batch} />
                    ))}
                </div>

                {/* Bottom Feature Highlights Bar */}
                <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900">Expert Mentors</h4>
                            <p className="text-[11px] text-slate-400">Learn from industry professionals</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900">Flexible Learning</h4>
                            <p className="text-[11px] text-slate-400">Learn at your pace, from anywhere</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900">Small Batch Size</h4>
                            <p className="text-[11px] text-slate-400">Get personal attention</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                            <Award className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-900">Certificate of Completion</h4>
                            <p className="text-[11px] text-slate-400">Showcase your new skills</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TopBatches;