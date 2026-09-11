import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { MentorCard, MentorProps } from '@/components/MentorCard';

const mentorsData: MentorProps[] = [
    {
        id: '1',
        name: 'Rafid Hasan',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
        role: 'Physics Teacher',
        qualification: 'B.Sc in Physics',
        rating: 4.9,
        reviewsCount: 320,
        experienceYears: 7,
        isVerified: true,
        subjects: ['Physics', 'Mathematics', 'Higher Math'],
        extraSubjectsCount: 1,
        bio: 'Conceptual clarity এবং practical approach দিয়ে Physics ও Mathematics শেখাই। বোর্ড এবং বিশ্ববিদ্যালয় উভয় স্তরের শিক্ষার্থীদের জন্য উপযোগী।',
        pricePerSession: 600,
    },
    {
        id: '2',
        name: 'Nusrat Jahan',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        role: 'English Teacher',
        qualification: 'MA in English',
        rating: 4.8,
        reviewsCount: 214,
        experienceYears: 5,
        isVerified: true,
        subjects: ['English', 'IELTS', 'Spoken English'],
        extraSubjectsCount: 1,
        bio: 'IELTS, Academic Writing এবং Spoken English এ বিশেষজ্ঞ। শিখনকে সহজ, মজাদার এবং কার্যকর করার প্রচেষ্টা করি।',
        pricePerSession: 500,
    },
    {
        id: '3',
        name: 'Tanzim Chowdhury',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        role: 'Biology Teacher',
        qualification: 'MBBS (Dhaka)',
        rating: 4.9,
        reviewsCount: 178,
        experienceYears: 6,
        isVerified: true,
        subjects: ['Biology', 'Chemistry', 'Medical Admission'],
        extraSubjectsCount: 1,
        bio: 'মেডিকেল এডমিশন প্রস্তুতি, বায়োলজি ও কেমিস্ট্রিতে সহজবোধ্য করে শেখাই। ১০০+ সফল শিক্ষার্থী আমার সাথে প্রস্তুতি নিয়ে মেডিকেলে ভর্তি হয়েছে।',
        pricePerSession: 700,
    },
    {
        id: '4',
        name: 'Sadia Akter',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
        role: 'Mathematics Teacher',
        qualification: 'B.Sc in Math',
        rating: 4.8,
        reviewsCount: 142,
        experienceYears: 4,
        isVerified: true,
        subjects: ['Mathematics', 'HSC Preparation', 'SSC'],
        extraSubjectsCount: 1,
        bio: 'গণিতকে সহজ করে শেখানোর প্রতি আমার বিশ্বাস। বোর্ড পরীক্ষার প্রস্তুতি, সমস্যা সমাধান এবং রেগুলার প্র্যাকটিস ক্লাসের মূল ফোকাস।',
        pricePerSession: 500,
    },
    {
        id: '5',
        name: 'Arif Hossain',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        role: 'Programming Teacher',
        qualification: 'B.Sc in CSE',
        rating: 4.9,
        reviewsCount: 276,
        experienceYears: 5,
        isVerified: true,
        subjects: ['Web Development', 'Python', 'JavaScript'],
        extraSubjectsCount: 2,
        bio: 'Coding কে সহজ ও প্রজেক্ট বেসড লার্নিং এর মাধ্যমে শেখাই। Beginner থেকে Advanced level পর্যন্ত সব স্তরের শিক্ষার্থীদের জন্য সাপোর্ট দেই।',
        pricePerSession: 800,
    },
    {
        id: '6',
        name: 'Farzana Islam',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        role: 'Accounting Teacher',
        qualification: 'M.Com (DU)',
        rating: 4.7,
        reviewsCount: 98,
        experienceYears: 5,
        isVerified: true,
        subjects: ['Accounting', 'Finance', 'Business Studies'],
        extraSubjectsCount: 1,
        bio: 'Accounting, Finance ও Business Studies এ অভিজ্ঞতা সম্পন্ন। সহজ উদাহরণ দিয়ে জটিল বিষয়ও সহজ করে শেখাই।',
        pricePerSession: 600,
    },
];

export const TopMentors: React.FC = () => {
    return (
        <section className="relative w-full bg-slate-50/50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                            <span>প্রিমিয়াম মেন্টর</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                            শীর্ষ মেন্টরদের সাথে <br />
                            <span className="text-blue-600">শিখুন, এগিয়ে যান</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                            প্রমাণিত অভিজ্ঞতা, বাস্তব দক্ষতা এবং আন্তরিক গাইডেন্স — আমাদের প্ল্যাটফর্মের সেরা মেন্টরদের সাথে আপনার শেখার যাত্রা শুরু করুন।
                        </p>
                    </div>

                    {/* View All Button */}
                    <a
                        href="#all-mentors"
                        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 self-start md:self-end pb-1"
                    >
                        <span>সকল মেন্টর দেখুন</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {mentorsData.map((mentor) => (
                        <MentorCard key={mentor.id} {...mentor} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopMentors;