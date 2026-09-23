import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface BenefitCardProps {
    icon: React.ReactNode;
    iconBgColor: string;
    cardBgGradient: string;
    title: string;
    description: string;
    actionText?: string;
    actionTextColor?: string;
    actionHref?: string;
    onActionClick?: () => void;
    illustration: React.ReactNode;
    /** Tailwind shadow classes that tint the card shadow to match its gradient color family. */
    glowClassName?: string;
}

/** Default brand glow — indigo (primary-500) tint, matches `gradient-tint-primary`. */
const DEFAULT_GLOW = 'shadow-md shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20';

export const BenefitCard = ({
    icon,
    iconBgColor,
    cardBgGradient,
    title,
    description,
    actionText = 'আরও জানুন',
    actionTextColor = 'text-primary-500 hover:text-primary-700',
    actionHref = '/#how-it-works',
    onActionClick,
    illustration,
    glowClassName = DEFAULT_GLOW,
}: BenefitCardProps) => {
    return (
        <div
            className={`glass-card rounded-3xl p-6 flex flex-col justify-between h-full ${glowClassName} transition-all duration-300 relative overflow-hidden ${cardBgGradient}`}
        >
            <div>
                <div
                    className={`w-12 h-12 rounded-2xl ${iconBgColor} flex items-center justify-center mb-6 shadow-sm`}
                >
                    {icon}
                </div>

                <h3 className="text-xl font-extrabold text-neutral-900 mb-3 leading-snug">
                    {title}
                </h3>

                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    {description}
                </p>

                {onActionClick ? (
                    <button
                        type="button"
                        onClick={onActionClick}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${actionTextColor}`}
                    >
                        <span>{actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                ) : (
                    <Link
                        href={actionHref}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${actionTextColor}`}
                    >
                        <span>{actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                )}
            </div>

            <div className="mt-8 relative w-full flex items-end justify-center">
                {illustration}
            </div>
        </div>
    );
};