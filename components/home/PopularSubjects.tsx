"use client";

import { ArrowRight } from 'lucide-react';
import { SubjectBadge, BadgeVariant } from '@/components/SubjectBadge';

interface SubjectItem {
    id: string;
    label: string;
    variant: BadgeVariant;
}

const subjectsData: SubjectItem[] = [
    // Row 1
    { id: '1', label: 'গণিত', variant: 'blue' },
    { id: '2', label: 'পদার্থবিজ্ঞান', variant: 'purple' },
    { id: '3', label: 'রসায়ন', variant: 'green' },
    { id: '4', label: 'জীববিজ্ঞান', variant: 'orange' },
    { id: '5', label: 'বাংলা', variant: 'blue' },

    // Row 2
    { id: '6', label: 'ইংরেজি', variant: 'green' },
    { id: '7', label: 'ICT', variant: 'blue' },
    { id: '8', label: 'কম্পিউটার প্রোগ্রামিং', variant: 'purple' },
    { id: '9', label: 'ব্যবসায় শিক্ষা', variant: 'green' },
    { id: '10', label: 'হিসাববিজ্ঞান', variant: 'orange' },

    // Row 3
    { id: '11', label: 'ইসলাম শিক্ষা', variant: 'blue' },
    { id: '12', label: 'সামাজিক বিজ্ঞান', variant: 'purple' },
    { id: '13', label: 'চারুকলা ও ডিজাইন', variant: 'green' },
    { id: '14', label: 'ভূগোল', variant: 'blue' },
    { id: '15', label: 'ইতিহাস', variant: 'purple' },

    // Row 4
    { id: '16', label: 'অর্থনীতি', variant: 'orange' },
    { id: '17', label: 'জাপানি ভাষা', variant: 'blue' },
    { id: '18', label: 'ফ্রিল্যান্সিং ও স্কিল ডেভেলপমেন্ট', variant: 'purple' },
    { id: '19', label: 'আরও অনেক বিষয়', variant: 'green' },
];

export const PopularSubjects: React.FC = () => {
    return (
        <section className="relative w-full bg-slate-50/30 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Top Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>জনপ্রিয় বিষয়সমূহ</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 leading-tight mb-4">
                    আপনার আগ্রহের বিষয়টি <br />
                    <span className="text-blue-600">বেছে নিন</span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed mb-12">
                    স্কুল, কলেজ, বিশ্ববিদ্যালয় কিংবা দক্ষতা উন্নয়ন — আপনার প্রয়োজন অনুযায়ী বিভিন্ন বিষয়ে অভিজ্ঞ শিক্ষক খুঁজে নিন এক প্ল্যাটফর্মেই।
                </p>

                {/* Subject Badges Container */}
                <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mb-12">
                    {subjectsData.map((subject) => (
                        <SubjectBadge
                            key={subject.id}
                            label={subject.label}
                            variant={subject.variant}
                            onClick={() => console.log(`Selected subject: ${subject.label}`)}
                        />
                    ))}
                </div>

                {/* Action Button */}
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-200 text-blue-600 font-medium text-sm hover:bg-blue-50 transition-colors duration-200 bg-white">
                    <span>সব বিষয় দেখুন</span>
                    <ArrowRight className="w-4 h-4" />
                </button>

            </div>
        </section>
    );
};

export default PopularSubjects;