import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface BenefitCardProps {
    icon: React.ReactNode;
    iconBgColor: string;
    cardBgGradient: string;
    title: string;
    description: string;
    actionText?: string;
    actionTextColor?: string;
    onActionClick?: () => void;
    illustration: React.ReactNode;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
    icon,
    iconBgColor,
    cardBgGradient,
    title,
    description,
    actionText = 'আরও জানুন',
    actionTextColor = 'text-blue-600 hover:text-blue-700',
    onActionClick,
    illustration,
}) => {
    return (
        <div
            className={`rounded-3xl p-6 flex flex-col justify-between h-full border border-slate-100/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden ${cardBgGradient}`}
        >
            <div>
                {/* Top Icon Badge */}
                <div
                    className={`w-12 h-12 rounded-2xl ${iconBgColor} flex items-center justify-center mb-6 shadow-sm`}
                >
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {description}
                </p>

                {/* Action Link */}
                <button
                    onClick={onActionClick}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${actionTextColor}`}
                >
                    <span>{actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Visual / Illustration Area at Bottom */}
            <div className="mt-8 relative w-full flex items-end justify-center">
                {illustration}
            </div>
        </div>
    );
};