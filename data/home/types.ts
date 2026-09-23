export type HomeBatchStatus = 'Live Batch' | 'Upcoming' | 'Ongoing' | 'New';

export interface HomeMentor {
    id: string;
    name: string;
    image: string;
    role: string;
    qualification: string;
    rating: number;
    reviewsCount: number;
    experienceYears: number;
    isVerified: boolean;
    subjects: string[];
    extraSubjectsCount?: number;
    bio: string;
    pricePerSession: number;
}

export interface HomeBatchMentor {
    id: string;
    name: string;
    image: string;
}

export interface HomeBatch {
    id: string;
    category: string;
    status: HomeBatchStatus;
    title: string;
    description: string;
    tags: string[];
    mentors: HomeBatchMentor[];
    mentorsCountText: string;
    startDate: string;
    duration: string;
    filledSeats: number;
    totalSeats: number;
    currentPrice: number;
    originalPrice: number;
    discountPercentage: number;
    primaryButtonText: string;
    isSecondaryButton: boolean;
}

export interface HomeTestimonial {
    quote: string;
    rating: number;
    authorName: string;
    authorRole: string;
    avatarUrl: string;
}

export interface HomeFeature {
    icon: 'users' | 'calendar' | 'trending' | 'headphones';
    color: 'indigo' | 'emerald' | 'amber' | 'blue';
    title: string;
    description: string;
}

export interface HomeSubject {
    id: string;
    label: string;
}
