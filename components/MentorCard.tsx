import React from 'react';
import { Star, CheckCircle2, Video } from 'lucide-react';
import Image from 'next/image';
import ROUTES from '@/constants/routes';
import { SubjectBadge } from '@/components/SubjectBadge';
import { getSubjectVariant } from '@/constants/subjects';
import { ButtonLink } from '@/components/ui/ButtonLink';

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

export const MentorCard = ({
    id,
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
}: MentorProps) => {
    return (
        <div className="glass-card rounded-3xl p-6 shadow-md shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20 transition-shadow duration-300 flex flex-col justify-between h-full">
            <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                        <Image
                            src={image}
                            alt={name}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-2xl object-cover object-center flex-shrink-0"
                        />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-bold text-neutral-900 text-base">{name}</h3>
                                <CheckCircle2 className="w-4 h-4 text-primary-500 fill-primary-500 stroke-neutral-0" />
                            </div>
                            <p className="text-xs text-neutral-500 mt-0.5">
                                {role} <span className="text-neutral-300">|</span> {qualification}
                            </p>

                            <div className="flex items-center gap-2 mt-2 text-xs">
                                <div className="flex items-center gap-1 text-orange-500 font-bold">
                                    <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                                    <span>{rating.toFixed(1)}</span>
                                    <span className="text-neutral-400 font-normal">({reviewsCount} reviews)</span>
                                </div>
                                <span className="text-neutral-300">•</span>
                                <span className="text-neutral-500">{experienceYears} yrs experience</span>
                            </div>
                        </div>
                    </div>

                    {isVerified && (
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-green-100/80">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified
                        </span>
                    )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {subjects.map((subject, index) => (
                        <SubjectBadge
                            key={`${subject}-${index}`}
                            label={subject}
                            variant={getSubjectVariant(subject)}
                            size="sm"
                        />
                    ))}
                    {extraSubjectsCount && extraSubjectsCount > 0 && (
                        <span className="bg-neutral-100 text-neutral-500 text-xs px-2.5 py-1 rounded-full font-medium">
                            +{extraSubjectsCount}
                        </span>
                    )}
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3 mb-6">
                    {bio}
                </p>
            </div>

            <div className="pt-4 border-t border-neutral-30 flex items-center justify-between gap-2 mt-auto">
                <div>
                    <span className="text-base font-extrabold text-neutral-900">৳{pricePerSession}</span>
                    <span className="text-xs text-neutral-400 font-normal"> / session</span>
                    <div className="flex items-center gap-1 text-[11px] text-neutral-500 mt-0.5">
                        <Video className="w-3 h-3 text-primary-500" />
                        <span>{classType}</span>
                    </div>
                </div>

                <ButtonLink href={ROUTES.EDUCATOR_PROFILE(id)} size="sm" icon="arrowRight">
                    Book Session
                </ButtonLink>
            </div>
        </div>
    );
};