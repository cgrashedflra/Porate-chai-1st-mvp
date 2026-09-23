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
    /** Tailwind shadow classes (`shadow-*` + `hover:shadow-*`) that tint the realistic drop shadow with brand colors. */
    glowClassName?: string;
    /** Subtle brand-color accent on the glass background (`bg-*` only) — a faint colored glow, not too much. */
    tintClassName?: string;
}

/** Default brand glow — indigo (primary-500) tint. */
const DEFAULT_GLOW = 'shadow-lg shadow-primary-500/10 hover:shadow-xl hover:shadow-primary-500/25';

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
    glowClassName = DEFAULT_GLOW,
    tintClassName = 'bg-primary-500/15',
}: TrustCardProps) => {
    return (
        <div
            className={`glass-card relative h-full flex flex-col justify-between rounded-3xl p-5 overflow-hidden transition-shadow duration-300 ${glowClassName}`}
        >
            {/* Faint brand-color accent glow on the glass background */}
            <div
                aria-hidden="true"
                className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none ${tintClassName}`}
            />

            {/* Glossy sheen overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/70 via-white/20 to-transparent"
            />

            <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-2xl ${iconBgColor} flex items-center justify-center`}>
                        {icon}
                    </div>
                    <span className="text-xs font-bold text-primary-500/80">{stepNumber}</span>
                </div>

                <h3 className="text-[15px] font-bold mb-1.5 leading-snug bg-linear-to-r from-primary-600 to-deep-blue-700 bg-clip-text text-transparent">
                    {title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {description}
                </p>
            </div>

            <div className="relative flex items-center justify-between gap-2 pt-1">
                <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${tagBgColor} ${tagTextColor}`}>
                    {tag}
                </span>

                {onActionClick ? (
                    <button
                        type="button"
                        onClick={onActionClick}
                        className="w-6 h-6 rounded-full bg-white/70 hover:bg-white border border-white/60 flex items-center justify-center text-neutral-600 transition-colors"
                        aria-label="Learn more"
                    >
                        <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                ) : (
                    <Link
                        href={actionHref}
                        className="w-6 h-6 rounded-full bg-white/70 hover:bg-white border border-white/60 flex items-center justify-center text-neutral-600 transition-colors"
                        aria-label="Learn more"
                    >
                        <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                )}
            </div>
        </div>
    );
};