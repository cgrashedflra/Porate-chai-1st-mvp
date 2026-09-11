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

export const StepCard: React.FC<StepCardProps> = ({
    stepNumber,
    title,
    description,
    bgColor,
    badgeBgColor,
    badgeTextColor,
    children,
}) => {
    return (
        <div className={`relative flex flex-col justify-between rounded-3xl p-6 ${bgColor} border border-slate-100/80 transition-all duration-300 hover:shadow-lg h-full min-h-[420px]`}>

            {/* Top Content */}
            <div>
                {/* Step Badge */}
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${badgeBgColor} ${badgeTextColor} font-bold text-sm mb-4`}>
                    {stepNumber}
                </div>

                {/* Header */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* Visual / Dynamic Graphic Area */}
            <div className="mt-auto w-full flex items-center justify-center">
                {children}
            </div>

        </div>
    );
};