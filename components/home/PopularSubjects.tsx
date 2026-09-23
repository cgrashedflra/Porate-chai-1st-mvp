"use client";

import { SubjectBadge } from '@/components/SubjectBadge';
import { getSubjectVariant } from '@/constants/subjects';
import { homeSubjects } from '@/data/home/subjects';
import { ButtonLink } from '@/components/ui/ButtonLink';
import ROUTES from '@/constants/routes';

export const PopularSubjects = () => {
    return (
        <section className="relative w-full bg-neutral-20/30 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Top Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                    <span>জনপ্রিয় বিষয়সমূহ</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue-950 leading-tight mb-4">
                    আপনার আগ্রহের বিষয়টি <br />
                    <span className="text-primary-500">বেছে নিন</span>
                </h2>

                {/* Subtitle */}
                <p className="text-neutral-500 text-sm sm:text-base max-w-2xl leading-relaxed mb-12">
                    স্কুল, কলেজ, বিশ্ববিদ্যালয় কিংবা দক্ষতা উন্নয়ন — আপনার প্রয়োজন অনুযায়ী বিভিন্ন বিষয়ে অভিজ্ঞ শিক্ষক খুঁজে নিন এক প্ল্যাটফর্মেই।
                </p>

                {/* Subject Badges Container */}
                <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mb-12">
                    {homeSubjects.map((subject) => (
                        <SubjectBadge
                            key={subject.id}
                            label={subject.label}
                            variant={getSubjectVariant(subject.label)}
                            size="lg"
                            onClick={() => console.log(`Selected subject: ${subject.label}`)}
                        />
                    ))}
                </div>

                {/* Action Button */}
                <ButtonLink href={ROUTES.EDUCATORS} variant="secondary" icon="arrowRight">
                    সব বিষয় দেখুন
                </ButtonLink>

            </div>
        </section>
    );
};

export default PopularSubjects;