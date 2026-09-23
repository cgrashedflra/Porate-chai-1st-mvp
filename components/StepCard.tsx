import React from 'react';

export interface StepCardProps {
    stepNumber: string;
    title: string;
    description: string;
    bgColor: string;
    badgeBgColor: string;
    badgeTextColor: string;
    children?: React.ReactNode;
    /** Tailwind shadow classes that tint the card shadow to match its background color family. */
    glowClassName?: string;
}

/** Default brand glow — indigo (primary-500) tint. */
const DEFAULT_GLOW = 'shadow-md shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20';

export const StepCard = ({
    stepNumber,
    title,
    description,
    bgColor,
    badgeBgColor,
    badgeTextColor,
    children,
    glowClassName = DEFAULT_GLOW,
}: StepCardProps) => {
    return (
        <div className={`glass-card relative flex flex-col justify-between rounded-3xl p-6 ${bgColor} ${glowClassName} transition-all duration-300 h-full min-h-[420px]`}>
            <div>
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${badgeBgColor} ${badgeTextColor} font-bold text-sm mb-4`}>
                    {stepNumber}
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                    {title}
                </h3>

                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <div className="mt-auto w-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};