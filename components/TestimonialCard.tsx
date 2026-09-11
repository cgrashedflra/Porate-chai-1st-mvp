import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialCardProps {
    quote: string;
    rating?: number;
    authorName: string;
    authorRole: string;
    avatarUrl: string;
    isHighlighted?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    rating = 5.0,
    authorName,
    authorRole,
    avatarUrl,
    isHighlighted = false,
}) => {
    return (
        <div
            className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 ${isHighlighted
                    ? 'bg-blue-50/60 border border-blue-200/80 shadow-lg scale-105 z-10'
                    : 'bg-emerald-50/30 border border-emerald-100/50 shadow-sm hover:shadow-md'
                }`}
        >
            {/* Quote Icon */}
            <div className="text-5xl font-serif text-blue-400/60 leading-none mb-3">
                “
            </div>

            {/* Quote Body */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                “{quote}”
            </p>

            {/* Bottom Section */}
            <div className="space-y-4 mt-auto">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                    ))}
                    <span className="text-xs font-semibold text-slate-700 ml-1">
                        {rating.toFixed(1)}
                    </span>
                </div>

                {/* User Metadata */}
                <div className="flex items-center gap-3">
                    <img
                        src={avatarUrl}
                        alt={authorName}
                        className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                            {authorName}
                        </h4>
                        <p className="text-xs text-slate-500">{authorRole}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};