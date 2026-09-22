import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export interface TestimonialCardProps {
    quote: string;
    rating?: number;
    authorName: string;
    authorRole: string;
    avatarUrl: string;
    isHighlighted?: boolean;
}

export const TestimonialCard = ({
    quote,
    rating = 5.0,
    authorName,
    authorRole,
    avatarUrl,
    isHighlighted = false,
}: TestimonialCardProps) => {
    return (
        <div
            className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 ${isHighlighted
                ? 'bg-primary-50/60 border border-primary-200/80 shadow-lg scale-105 z-10'
                : 'bg-green-50/30 border border-green-100/50 shadow-sm hover:shadow-md'
                }`}
        >
            <div className="text-5xl font-serif text-primary-400/60 leading-none mb-3">
                “
            </div>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                “{quote}”
            </p>

            <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-orange-400 text-orange-400"
                        />
                    ))}
                    <span className="text-xs font-semibold text-neutral-700 ml-1">
                        {rating.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Image
                        src={avatarUrl}
                        alt={authorName}
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-full object-cover border border-neutral-200"
                    />
                    <div>
                        <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                            {authorName}
                        </h4>
                        <p className="text-xs text-neutral-500">{authorRole}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};