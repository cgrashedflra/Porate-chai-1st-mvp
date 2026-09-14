import { HomeFeature } from './types';

export const mentorFeatures: HomeFeature[] = [
    {
        icon: 'users',
        color: 'indigo',
        title: 'সারা দেশের শিক্ষার্থী',
        description: 'দেশজুড়ে হাজারো আগ্রহী শিক্ষার্থীর সাথে যুক্ত হোন।',
    },
    {
        icon: 'calendar',
        color: 'emerald',
        title: 'সহজে ক্লাস বুক করুন',
        description: 'নিজের সময় অনুযায়ী ক্লাস স্লট সেট করুন এবং বুকিং নিন।',
    },
    {
        icon: 'trending',
        color: 'amber',
        title: 'নিজের আয় বৃদ্ধি করুন',
        description: 'আপনার দক্ষতাকে পরিণত করুন আয়ের একটি নির্ভরযোগ্য উৎসে।',
    },
    {
        icon: 'headphones',
        color: 'blue',
        title: 'সাপোর্ট ও গাইডলাইন',
        description: 'আমরা আছি আপনার পাশে — প্রতি ধাপে।',
    },
];

export const mentorSubjects = [
    { name: 'Physics', icon: 'atom', color: 'blue' },
    { name: 'Mathematics', icon: 'book', color: 'emerald' },
    { name: 'Chemistry', icon: 'atom', color: 'amber' },
    { name: 'ICT', icon: 'laptop', color: 'purple' },
] as const;

export const heroTopics = ['Mathematics', 'Physics', 'IELTS', 'Programming', 'Chemistry'];
