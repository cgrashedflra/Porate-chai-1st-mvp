import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export interface TrustCardProps {
    stepNumber: string;
    icon: React.ReactNode;
    iconBgColor: string;
    title: string;
    description: string;
    tag: string;
    tagBgColor?: string;
    tagTextColor?: string;
    actionHref?: string;
    onActionClick?: () => void;
}

export const TrustCard = ({
    stepNumber,
    icon,
    iconBgColor,
    title,
    description,
    tag,
    tagBgColor = 'bg-neutral-100',
    tagTextColor = 'text-neutral-600',
    actionHref = '/#how-it-works',
    onActionClick,
}: TrustCardProps) => {
    return (
        <div className="bg-neutral-0/80 backdrop-blur rounded-3xl p-6 border border-neutral-30 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl ${iconBgColor} flex items-center justify-center`}>
                        {icon}
                    </div>
                    <span className="text-xs font-bold text-neutral-400">{stepNumber}</span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                    {title}
                </h3>

                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${tagBgColor} ${tagTextColor}`}>
                    {tag}
                </span>

                {onActionClick ? (
                    <button
                        type="button"
                        onClick={onActionClick}
                        className="w-7 h-7 rounded-full bg-neutral-20 hover:bg-neutral-30 border border-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                        aria-label="Learn more"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                ) : (
                    <Link
                        href={actionHref}
                        className="w-7 h-7 rounded-full bg-neutral-20 hover:bg-neutral-30 border border-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                        aria-label="Learn more"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    );
};