"use client";

import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

export interface MentorAvatar {
    id: string;
    name: string;
    image: string;
}

export interface ClassCardProps {
    id: string;
    category: string;
    status: 'Live Batch' | 'Upcoming' | 'Ongoing' | 'New';
    title: string;
    description: string;
    tags: string[];
    mentors: MentorAvatar[];
    mentorsCountText?: string;
    startDate: string;
    duration: string;
    filledSeats: number;
    totalSeats: number;
    currentPrice: number;
    originalPrice: number;
    discountPercentage: number;
    primaryButtonText?: string;
    isSecondaryButton?: boolean;
    onActionClick?: () => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({
    category,
    status,
    title,
    description,
    tags,
    mentors,
    mentorsCountText = 'Expert Mentors',
    startDate,
    duration,
    filledSeats,
    totalSeats,
    currentPrice,
    originalPrice,
    discountPercentage,
    primaryButtonText = 'View Batch Details',
    isSecondaryButton = false,
    onActionClick,
}) => {
    // Status badge styling helper
    const getStatusBadgeStyle = (status: ClassCardProps['status']) => {
        switch (status) {
            case 'Live Batch':
                return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'Upcoming':
                return 'bg-amber-50 text-amber-600 border-amber-100';
            case 'Ongoing':
                return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'New':
                return 'bg-rose-50 text-rose-600 border-rose-100';
            default:
                return 'bg-blue-50 text-blue-600 border-blue-100';
        }
    };

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
            <div>
                {/* Card Header: Category & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-blue-50/80 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {category}
                    </span>

                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${getStatusBadgeStyle(status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {status}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-5">
                    {description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-medium px-2.5 py-1 rounded-lg"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Mentors Row */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex -space-x-2 overflow-hidden">
                        {mentors.map((mentor) => (
                            <img
                                key={mentor.id}
                                src={mentor.image}
                                alt={mentor.name}
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                            />
                        ))}
                    </div>
                    <div className="text-xs">
                        <p className="text-slate-400 font-normal">Mentored by</p>
                        <p className="text-slate-900 font-semibold">{mentors.length} {mentorsCountText}</p>
                    </div>
                </div>

                {/* Details Grid: Starts, Duration, Seats */}
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                    <div className="bg-slate-50/60 rounded-2xl p-2.5 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-slate-400 text-[11px] mb-0.5">
                            <Calendar className="w-3.5 h-3.5 text-blue-500" />
                            <span>Starts</span>
                        </div>
                        <span className="text-xs font-bold text-slate-800">{startDate}</span>
                    </div>

                    <div className="bg-slate-50/60 rounded-2xl p-2.5 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-slate-400 text-[11px] mb-0.5">
                            <Clock className="w-3.5 h-3.5 text-blue-500" />
                            <span>Duration</span>
                        </div>
                        <span className="text-xs font-bold text-slate-800">{duration}</span>
                    </div>

                    <div className="bg-slate-50/60 rounded-2xl p-2.5 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-slate-400 text-[11px] mb-0.5">
                            <Users className="w-3.5 h-3.5 text-blue-500" />
                            <span>Seats</span>
                        </div>
                        <span className="text-xs font-bold text-slate-800">{filledSeats}/{totalSeats}</span>
                    </div>
                </div>
            </div>

            {/* Footer: Pricing & Action Button */}
            <div className="pt-2">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-slate-900">৳{currentPrice.toLocaleString()}</span>
                        <span className="text-xs text-slate-400 font-normal">/ batch</span>
                        <span className="text-xs text-slate-400 line-through ml-1">৳{originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                        {discountPercentage}% OFF
                    </span>
                </div>

                <button
                    onClick={onActionClick}
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs py-3 px-4 rounded-2xl transition-all duration-200 ${isSecondaryButton
                        ? 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10'
                        }`}
                >
                    <span>{primaryButtonText}</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};