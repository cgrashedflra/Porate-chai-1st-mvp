"use client";

import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

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

export const ClassCard = ({
    id,
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
}: ClassCardProps) => {
    const getStatusBadgeStyle = (status: ClassCardProps['status']) => {
        switch (status) {
            case 'Live Batch':
                return 'bg-green-50 text-green-600 border-green-100';
            case 'Upcoming':
                return 'bg-orange-50 text-orange-600 border-orange-100';
            case 'Ongoing':
                return 'bg-green-50 text-green-600 border-green-100';
            case 'New':
                return 'bg-primary-50 text-primary-500 border-primary-100';
            default:
                return 'bg-primary-50 text-primary-500 border-primary-100';
        }
    };

    return (
        <div className="bg-neutral-0 rounded-3xl p-6 border border-neutral-30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
            <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-primary-50/80 text-primary-500 text-xs font-medium px-3 py-1 rounded-full">
                        {category}
                    </span>

                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${getStatusBadgeStyle(status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {status}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight group-hover:text-primary-500 transition-colors">
                    {title}
                </h3>

                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3 mb-5">
                    {description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-neutral-20 border border-neutral-30 text-neutral-600 text-[11px] font-medium px-2.5 py-1 rounded-lg"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-30">
                    <div className="flex -space-x-2 overflow-hidden">
                        {mentors.map((mentor) => (
                            <img
                                key={mentor.id}
                                src={mentor.image}
                                alt={mentor.name}
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-0 object-cover"
                            />
                        ))}
                    </div>
                    <div className="text-xs">
                        <p className="text-neutral-400 font-normal">Mentored by</p>
                        <p className="text-neutral-900 font-semibold">{mentors.length} {mentorsCountText}</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                    <div className="bg-neutral-20/60 rounded-2xl p-2.5 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-neutral-400 text-[11px] mb-0.5">
                            <Calendar className="w-3.5 h-3.5 text-primary-500" />
                            <span>Starts</span>
                        </div>
                        <span className="text-xs font-bold text-neutral-800">{startDate}</span>
                    </div>

                    <div className="bg-neutral-20/60 rounded-2xl p-2.5 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-neutral-400 text-[11px] mb-0.5">
                            <Clock className="w-3.5 h-3.5 text-primary-500" />
                            <span>Duration</span>
                        </div>
                        <span className="text-xs font-bold text-neutral-800">{duration}</span>
                    </div>

                    <div className="bg-neutral-20/60 rounded-2xl p-2.5 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-neutral-400 text-[11px] mb-0.5">
                            <Users className="w-3.5 h-3.5 text-primary-500" />
                            <span>Seats</span>
                        </div>
                        <span className="text-xs font-bold text-neutral-800">{filledSeats}/{totalSeats}</span>
                    </div>
                </div>
            </div>

            <div className="pt-2">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-neutral-900">৳{currentPrice.toLocaleString()}</span>
                        <span className="text-xs text-neutral-400 font-normal">/ batch</span>
                        <span className="text-xs text-neutral-400 line-through ml-1">৳{originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-0.5 rounded-md border border-green-100">
                        {discountPercentage}% OFF
                    </span>
                </div>

                {onActionClick ? (
                    <button
                        type="button"
                        onClick={onActionClick}
                        className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs py-3 px-4 rounded-2xl transition-all duration-200 ${isSecondaryButton
                            ? 'bg-neutral-0 hover:bg-primary-50 text-primary-500 border border-primary-200'
                            : 'bg-primary-500 hover:bg-primary-700 text-neutral-0 shadow-md shadow-primary-500/10'
                            }`}
                    >
                        <span>{primaryButtonText}</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                ) : (
                    <Link
                        href={ROUTES.CLASS(id)}
                        className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-xs py-3 px-4 rounded-2xl transition-all duration-200 ${isSecondaryButton
                            ? 'bg-neutral-0 hover:bg-primary-50 text-primary-500 border border-primary-200'
                            : 'bg-primary-500 hover:bg-primary-700 text-neutral-0 shadow-md shadow-primary-500/10'
                            }`}
                    >
                        <span>{primaryButtonText}</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    );
};