import React from 'react';
import { Star, CheckCircle2, Video } from 'lucide-react';
import Image from 'next/image';
import ROUTES from '@/constants/routes';
import { SubjectBadge } from '@/components/SubjectBadge';
import { getSubjectVariant } from '@/constants/subjects';
import { ButtonLink } from '@/components/ui/ButtonLink';

export interface EducatorCardProps {
    id: string;
    name: string;
    image: string;
    qualification: string;
    rating: number;
    reviewsCount: number;
    experienceYears: number;
    isVerified?: boolean;
    subjects: string[];
    extraSubjectsCount?: number;
    bio: string;
    pricePerSession: number;
}

/**
 * EducatorCard — always vertical, always responsive.
 * The card stacks its footer below `sm` so a 1-column grid never overflows,
 * and settles into the horizontal price / CTA row from `sm` upwards.
 */
export const EducatorCard = ({
    id,
    name,
    image,
    qualification,
    rating,
    reviewsCount,
    experienceYears,
    isVerified = true,
    subjects,
    extraSubjectsCount,
    bio,
    pricePerSession,
}: EducatorCardProps) => {
    const identity = (
        <div className="flex min-w-0 flex-col gap-2">
            <div className="flex items-center gap-2">
                <h3 className="text-[18px] font-semibold text-deep-blue-900">{name}</h3>
                {isVerified && (
                    <CheckCircle2 className="size-4.5 shrink-0 fill-primary-500 text-primary-500 stroke-neutral-0" />
                )}
            </div>
            <p className="text-xs text-deep-blue-300">
                {qualification}
            </p>
        </div>
    );
    const subjectList = (
        <div className="mb-4 flex flex-wrap items-center gap-1.5">
            {subjects.map((subject, index) => (
                <SubjectBadge
                    key={`${subject}-${index}`}
                    label={subject}
                    variant={getSubjectVariant(subject)}
                    size="sm"
                />
            ))}
            {extraSubjectsCount && extraSubjectsCount > 0 && (
                <span className="bg-sky-100 text-sky-500 text-xs px-2.5 py-1 rounded-full font-medium">
                    +{extraSubjectsCount}
                </span>
            )}
        </div>
    );
    const ratingSummary = (
        <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="flex items-center gap-1 font-semibold text-deep-blue-900">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-[11px] tracking-[0.55px]">{rating.toFixed(1)}</span>
                <span className="font-normal text-[#a4a3b5]">({reviewsCount} reviews)</span>
            </div>
            <span className="text-[#a4a3b5]">*</span>
            <span className="text-[#a4a3b5]">{experienceYears} years experience</span>
        </div>
    );
    const bioContent = (
        <p className="line-clamp-3 text-sm leading-normal text-[#a4a3b5]">
            {bio}
        </p>
    );

    return (
        <div className="glass-card flex h-full min-w-0 flex-col justify-between gap-4 rounded-3xl p-6 shadow-md shadow-primary-500/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-500/20">
            <div>
                <div className="mb-2.5 flex flex-col items-start gap-4 sm:flex-row">
                    <Image
                        src={image}
                        alt={name}
                        width={84}
                        height={84}
                        className="h-48 w-full shrink-0 rounded-xl object-cover object-center sm:size-21"
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                        {identity}
                        {ratingSummary}
                    </div>
                </div>
                {subjectList}
                <div className="mb-6">{bioContent}</div>
            </div>
            <div className="mt-auto flex flex-col items-center gap-5 border-t border-neutral-30 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-1">
                <div className="whitespace-nowrap">
                    <span className="text-lg font-extrabold text-primary-900 sm:text-base">৳{pricePerSession}</span>
                    <span className="text-sm font-normal text-deep-blue-700 sm:text-xs"> / session</span>
                </div>

                <Video className="hidden h-6 w-6 shrink-0 text-primary-500 sm:block" />

                <ButtonLink
                    href={ROUTES.EDUCATOR_PROFILE(id)}
                    size="md"
                    icon="arrowRight"
                    className="w-full sm:w-auto"
                >
                    Book Session
                </ButtonLink>
            </div>
        </div>
    );
};
