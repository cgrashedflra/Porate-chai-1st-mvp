import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface TrustCardProps {
    stepNumber: string;
    icon: React.ReactNode;
    iconBgColor: string;
    title: string;
    description: string;
    tag: string;
    tagBgColor?: string;
    tagTextColor?: string;
    onActionClick?: () => void;
}

export const TrustCard: React.FC<TrustCardProps> = ({
    stepNumber,
    icon,
    iconBgColor,
    title,
    description,
    tag,
    tagBgColor = 'bg-slate-100',
    tagTextColor = 'text-slate-600',
    onActionClick,
}) => {
    return (
        <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
            <div>
                {/* Header: Icon & Step Number */}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl ${iconBgColor} flex items-center justify-center`}>
                        {icon}
                    </div>
                    <span className="text-xs font-bold text-slate-400">{stepNumber}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* Footer Tag & Action */}
            <div className="flex items-center justify-between gap-2 pt-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${tagBgColor} ${tagTextColor}`}>
                    {tag}
                </span>

                <button
                    onClick={onActionClick}
                    className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                    aria-label="Learn more"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};