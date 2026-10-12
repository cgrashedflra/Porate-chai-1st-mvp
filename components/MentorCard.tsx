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
    orientation?: 'vertical' | 'horizontal';
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
    classType = '1 on 1',
    orientation = 'vertical',
}: MentorProps) => {
    const isHorizontal = orientation === 'horizontal';
    const identity = (
        <div className="flex min-w-0 flex-col gap-2">
            <div className="flex items-center gap-2">
                <h3 className="text-[18px] font-semibold text-deep-blue-900">{name}</h3>
                {isVerified && (
                    <CheckCircle2 className="size-4.5 shrink-0 fill-primary-500 text-primary-500 stroke-neutral-0" />
                )}
            </div>
            <p className="text-xs text-deep-blue-300">
                {role} <span>|</span> {qualification}
            </p>
        </div>
    );
    const subjectList = (
        <div className={`flex flex-wrap items-center ${isHorizontal ? 'gap-2' : 'gap-1.5 mb-4'}`}>
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
        <div className="flex items-center gap-2 text-xs">
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
        <div className={`glass-card flex shadow-md shadow-primary-500/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-500/20 ${isHorizontal ? 'w-full flex-col gap-4 rounded-2xl p-4 lg:flex-row lg:items-stretch' : 'h-full flex-col justify-between rounded-3xl p-6'}`}>
            {isHorizontal ? (
                <>
                    <div className="flex min-w-0 flex-1 flex-row gap-3 sm:gap-4">
                        <Image
                            src={image}
                            alt={name}
                            width={192}
                            height={192}
                            className="size-24 shrink-0 self-start rounded-xl object-cover object-center sm:size-40 lg:size-48"
                        />
                        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                            {identity}
                            {subjectList}
                            {bioContent}
                            {ratingSummary}
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center lg:w-40 lg:shrink-0 lg:flex-col lg:items-center">
                        <div className="flex items-center gap-1 text-xs text-[#a4a3b5]">
                            <Video className="size-6 shrink-0 text-primary-500" />
                            <span>{classType}</span>
                        </div>
                        <div className="whitespace-nowrap">
                            <span className="text-xl font-semibold text-deep-blue-900">৳{pricePerSession}/</span>
                            <span className="text-xs text-[#a4a3b5]">Session</span>
                        </div>
                        <ButtonLink
                            href={ROUTES.EDUCATOR_PROFILE(id)}
                            size="md"
                            icon="arrowRight"
                            className="w-full! rounded-xl! px-6! py-3! lg:w-auto!"
                        >
                            Book Session
                        </ButtonLink>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div className="mb-2.5 flex items-start gap-4">
                            <Image
                                src={image}
                                alt={name}
                                width={84}
                                height={84}
                                className="size-21 shrink-0 rounded-xl object-cover object-center"
                            />
                            <div className="flex h-21 min-w-0 flex-col justify-center gap-2">
                                {identity}
                                {ratingSummary}
                            </div>
                        </div>
                        {subjectList}
                        <div className="mb-6">{bioContent}</div>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-1 border-t border-neutral-30 pt-4">
                        <div>
                            <span className="text-base font-extrabold text-primary-900">৳{pricePerSession}</span>
                            <span className="text-xs font-normal text-deep-blue-700"> / session</span>
                        </div>
                        <div className="mt-0.5 flex items-center gap-3 text-[11px] text-neutral-500">
                            <Video className="h-6 w-6 text-primary-500" />
                            <span>{classType}</span>
                        </div>
                        <ButtonLink href={ROUTES.EDUCATOR_PROFILE(id)} size="md" icon="arrowRight">
                            Book Session
                        </ButtonLink>
                    </div>
                </>
            )}
        </div>
    );
};