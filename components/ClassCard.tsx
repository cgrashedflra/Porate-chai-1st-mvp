"use client";

import { Calendar, Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
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

    const actionClassName = `inline-flex items-center justify-center gap-1.5 font-semibold text-xs py-2 px-3.5 rounded-xl transition-all duration-200 ${isSecondaryButton
        ? 'bg-neutral-0 hover:bg-primary-50 text-primary-500 border border-primary-200'
        : 'bg-primary-500 hover:bg-primary-700 text-neutral-0 shadow-sm shadow-primary-500/10'
        }`;

    const action = onActionClick ? (
        <button type="button" onClick={onActionClick} className={actionClassName}>
            {primaryButtonText}
            <ArrowRight className="w-3.5 h-3.5" />
        </button>
    ) : (
        <Link href={ROUTES.LIVE_BATCH(id)} className={actionClassName}>
            {primaryButtonText}
            <ArrowRight className="w-3.5 h-3.5" />
        </Link>
    );

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-30 bg-neutral-0 shadow-sm transition-all duration-200 hover:border-primary-100 hover:shadow-md">
            <div className="relative h-44 shrink-0 overflow-hidden bg-linear-to-br from-primary-50 via-skyblue-50 to-neutral-20 text-primary-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <BookOpen className="mb-1.5 h-8 w-8" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{category}</span>
                </div>

                <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                    <span className="rounded bg-neutral-0/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-700">
                        {category}
                    </span>
                    <span className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${getStatusBadgeStyle(status)}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {status}
                    </span>
                </div>

                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 text-[11px] font-medium text-neutral-700">
                    <span className="inline-flex min-w-0 items-center gap-1.5 truncate rounded bg-neutral-0/80 px-2 py-1">
                        <Calendar className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                        {startDate}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded bg-neutral-0/80 px-2 py-1">
                        <Clock className="h-3.5 w-3.5 text-primary-500" />
                        {duration}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div>
                    <Link href={ROUTES.LIVE_BATCH(id)} className="block">
                        <h3 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-neutral-900 transition-colors group-hover:text-primary-500">
                            {title}
                        </h3>
                    </Link>

                    <div className="mb-3 flex items-center gap-2">
                        <div className="flex -space-x-2 overflow-hidden">
                            {mentors.slice(0, 3).map((mentor) => (
                                <Image key={mentor.id} src={mentor.image} alt={mentor.name} width={28} height={28} className="h-7 w-7 rounded-full border-2 border-neutral-0 object-cover" />
                            ))}
                        </div>
                        <span className="truncate text-xs font-semibold text-neutral-600">{mentors.length} {mentorsCountText}</span>
                    </div>

                    <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-neutral-500">{description}</p>

                    <div className="mb-3 flex flex-wrap gap-1.5">
                        {tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-md bg-neutral-20 px-2 py-1 text-[10px] font-medium text-neutral-600">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-neutral-30 pt-2.5 text-[11px] text-neutral-500">
                        <span className="inline-flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5 text-primary-500" />
                            {filledSeats}/{totalSeats} enrolled
                        </span>
                        <span className="font-semibold text-orange-600">{totalSeats - filledSeats} seats left</span>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-30 pt-3">
                    <div>
                        <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-neutral-400">Batch fee</span>
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-extrabold text-neutral-900">৳{currentPrice.toLocaleString()}</span>
                            <span className="text-[10px] text-neutral-400 line-through">৳{originalPrice.toLocaleString()}</span>
                            <span className="rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-600">{discountPercentage}% off</span>
                        </div>
                    </div>
                    {action}
                </div>
            </div>
        </article>
    );
};