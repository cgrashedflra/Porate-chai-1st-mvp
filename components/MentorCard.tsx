import React from 'react';
import { Star, CheckCircle2, Video, ArrowRight } from 'lucide-react';

export interface MentorProps {
    id: string;
    name: string;
    image: string;
    role: string;
    qualification: string;
    rating: number;
    reviewsCount: number;
    experienceYears: number;
    isVerified?: boolean;
    subjects: string[];
    extraSubjectsCount?: number;
    bio: string;
    pricePerSession: number;
    classType?: string;
}

export const MentorCard: React.FC<MentorProps> = ({
    name,
    image,
    role,
    qualification,
    rating,
    reviewsCount,
    experienceYears,
    isVerified = true,
    subjects,
    extraSubjectsCount,
    bio,
    pricePerSession,
    classType = 'Online Class',
}) => {
    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
            <div>
                {/* Header: Avatar, Info, & Verified Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                        <img
                            src={image}
                            alt={name}
                            className="w-16 h-16 rounded-2xl object-cover object-center flex-shrink-0"
                        />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-bold text-slate-900 text-base">{name}</h3>
                                <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-600 stroke-white" />
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                                {role} <span className="text-slate-300">|</span> {qualification}
                            </p>

                            {/* Rating & Experience */}
                            <div className="flex items-center gap-2 mt-2 text-xs">
                                <div className="flex items-center gap-1 text-amber-500 font-bold">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span>{rating.toFixed(1)}</span>
                                    <span className="text-slate-400 font-normal">({reviewsCount} reviews)</span>
                                </div>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-500">{experienceYears} yrs experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Verified Tag */}
                    {isVerified && (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-100/80">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified
                        </span>
                    )}
                </div>

                {/* Subject Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {subjects.map((subject, index) => (
                        <span
                            key={index}
                            className="bg-blue-50/70 text-blue-600 text-xs px-3 py-1 rounded-full font-medium"
                        >
                            {subject}
                        </span>
                    ))}
                    {extraSubjectsCount && extraSubjectsCount > 0 && (
                        <span className="bg-slate-100 text-slate-500 text-xs px-2.5 py-1 rounded-full font-medium">
                            +{extraSubjectsCount}
                        </span>
                    )}
                </div>

                {/* Bio Text */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                    {bio}
                </p>
            </div>

            {/* Footer: Price, Class Type & Action Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                <div>
                    <span className="text-base font-extrabold text-slate-900">৳{pricePerSession}</span>
                    <span className="text-xs text-slate-400 font-normal"> / session</span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                        <Video className="w-3 h-3 text-blue-500" />
                        <span>{classType}</span>
                    </div>
                </div>

                <button className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors duration-200">
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
};