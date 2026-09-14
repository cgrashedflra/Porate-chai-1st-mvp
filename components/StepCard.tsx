import React from 'react';

export interface StepCardProps {
    stepNumber: string;
    title: string;
    description: string;
    bgColor: string;
    badgeBgColor: string;
    badgeTextColor: string;
    children?: React.ReactNode;
}

export const StepCard = ({
    stepNumber,
    title,
    description,
    bgColor,
    badgeBgColor,
    badgeTextColor,
    children,
}: StepCardProps) => {
    return (
        <div className={`relative flex flex-col justify-between rounded-3xl p-6 ${bgColor} border border-neutral-30 transition-all duration-300 hover:shadow-lg h-full min-h-[420px]`}>
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