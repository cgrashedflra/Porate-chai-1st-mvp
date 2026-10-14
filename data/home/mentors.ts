import { initialEducators } from '@/data/educators';
import type { Educator } from '@/types/types';
import type { Mentor } from './types';

/**
 * Mentor cards are a projection of the single educator dataset
 * (`data/educators.tsx`). The app has no separate mentor list — the
 * marketplace and the home page both read from the same educators.
 */
export function educatorToMentor(educator: Educator): Mentor {
    return {
        id: educator.id,
        name: educator.name,
        image: educator.avatar,
        role: educator.subjects[0] ? `${educator.subjects[0]} Teacher` : 'Educator',
        qualification: educator.qualifications[0] ?? 'Verified educator',
        rating: educator.rating,
        reviewsCount: educator.reviewCount,
        experienceYears: educator.experience,
        isVerified: educator.verified,
        subjects: educator.subjects,
        bio: educator.description,
        pricePerSession: educator.priceMin,
    };
}

/** Educators safe to list publicly — suspended accounts are hidden. */
const listedEducators = initialEducators.filter(
    (educator) => educator.verificationStatus !== 'suspended'
);

/** Every publicly listed educator, as a marketplace mentor card. */
export const Mentors: Mentor[] = listedEducators.map(educatorToMentor);

/** Featured subset shown in the home page "Top Mentors" section. */
export const homeMentors: Mentor[] = Mentors.slice(0, 6);
