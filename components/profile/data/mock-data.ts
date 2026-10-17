import { initialEducators } from "@/data/educators";
import type { EducationalQualification, Review, WorkHistory } from "@/types/types";
import { z } from "zod";
import type { TeacherProfile } from "../types/teacher";

type EducatorProfileInput = {
    id?: unknown;
    name?: unknown;
    avatar?: unknown;
    verified?: unknown;
    location?: unknown;
    experience?: unknown;
    rating?: unknown;
    reviewCount?: unknown;
    availableThisWeek?: unknown;
    bio?: unknown;
    description?: unknown;
    qualifications?: unknown;
    subjects?: unknown;
    teachingPhilosophy?: unknown;
    whoITeach?: unknown;
    workHistory?: unknown;
    reviews?: unknown;
};

const workHistoryEntrySchema = z.object({
    period: z.string().nullish(),
    role: z.string().nullish(),
    institution: z.string().nullish(),
    description: z.string().nullish(),
});

const educationalQualificationSchema = z.object({
    degree: z.string().nullish(),
    institute: z.string().nullish(),
    passingYear: z.string().nullish(),
});

const reviewEntrySchema = z.object({
    id: z.string().nullish(),
    studentName: z.string().nullish(),
    avatar: z.string().nullish(),
    rating: z.number().nullish(),
    date: z.string().nullish(),
    text: z.string().nullish(),
    subject: z.string().nullish(),
});

function normalizeStringList(value: unknown): string[] {
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is string => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean);
}

function normalizeText(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function normalizeNumber(value: unknown): number {
    return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function normalizeWorkHistory(value: unknown): WorkHistory[] {
    if (!Array.isArray(value)) return [];

    return value.flatMap((entry) => {
        const result = workHistoryEntrySchema.safeParse(entry);
        if (!result.success) return [];

        const period = result.data.period?.trim() ?? "";
        const role = result.data.role?.trim() ?? "";
        const institution = result.data.institution?.trim() ?? "";
        const description = result.data.description?.trim() ?? "";
        if (![period, role, institution, description].some(Boolean)) return [];

        return [{
            period: period || "Dates not provided",
            role: role || "Role not provided",
            institution: institution || "Institution not provided",
            description: description || "No description provided.",
        }];
    });
}

function normalizeQualifications(value: unknown): EducationalQualification[] {
    if (!Array.isArray(value)) return [];

    return value.flatMap((entry) => {
        const result = educationalQualificationSchema.safeParse(entry);
        if (!result.success) return [];

        const degree = result.data.degree?.trim() ?? "";
        if (!degree) return [];

        return [{
            degree,
            institute: result.data.institute?.trim() ?? "",
            passingYear: result.data.passingYear?.trim() ?? "",
        }];
    });
}

function normalizeReviews(value: unknown): Review[] {
    if (!Array.isArray(value)) return [];

    return value.flatMap((entry, index) => {
        const result = reviewEntrySchema.safeParse(entry);
        if (!result.success) return [];

        const studentName = result.data.studentName?.trim() ?? "";
        const text = result.data.text?.trim() ?? "";
        if (!studentName && !text) return [];

        const rating = Math.min(5, Math.max(0, normalizeNumber(result.data.rating)));

        return [{
            id: result.data.id?.trim() || `review-${index + 1}`,
            studentName: studentName || "Anonymous student",
            avatar: result.data.avatar?.trim() || undefined,
            rating,
            date: result.data.date?.trim() || "Recently",
            text: text || "No comments provided.",
            subject: result.data.subject?.trim() || undefined,
        }];
    });
}

/**
 * The profile is a prototype: each educator stores only a couple of hand-written
 * reviews while `reviewCount` is much larger. So the dedicated "all reviews" page
 * (rating breakdown + pagination) has enough to show, every educator is topped up
 * to a fixed batch of placeholder reviews. Values are picked from seeded pools so a
 * given educator always renders the same reviews on the server and the client.
 */
const MOCK_REVIEW_TARGET = 15;

const MOCK_REVIEWER_NAMES = [
    "Farhan Kabir",
    "Nusrat Jahan",
    "Sajid Islam",
    "Mehjabin Rahman",
    "Tanjila Akter",
    "Arif Mahmud",
    "Rumana Begum",
    "Shakib Al Noman",
    "Ishrat Jahan",
    "Mahmudul Hasan",
    "Samiha Chowdhury",
    "Rezwan Ahmed",
    "Anika Tabassum",
    "Naeem Hossain",
    "Sabrina Yasmin",
    "Tahmid Rahman",
    "Fariha Islam",
    "Zubayer Alam",
    "Maliha Noor",
    "Imran Khan",
];

const MOCK_REVIEW_TEXTS = [
    "Very clear explanations and a calm teaching style. I finally understood topics I had been struggling with for weeks.",
    "Always prepared with structured notes and practice problems. Sessions feel focused and I never leave confused.",
    "Extremely patient and encouraging. Would happily recommend to anyone preparing for their exams.",
    "Breaks down complex problems step by step and checks for understanding before moving on. Excellent educator.",
    "The mock tests and feedback after each class made a huge difference to my confidence.",
    "Friendly, punctual and very knowledgeable. Answers every question without making you feel rushed.",
    "Great balance of theory and practice. My exam scores improved noticeably within a month.",
    "Explains with real-life examples that make the concepts stick. Highly recommended.",
    "Responsive to messages and flexible with scheduling. The class notes are genuinely useful for revision.",
    "Made a difficult subject feel approachable. I look forward to every session.",
    "Thorough, supportive and well organised. The personalised study plan kept me on track.",
    "Really knows how to keep a student motivated. My progress felt steady and measurable.",
];

const MOCK_REVIEW_DATES = [
    "1 week ago",
    "2 weeks ago",
    "3 weeks ago",
    "1 month ago",
    "2 months ago",
    "3 months ago",
    "4 months ago",
    "5 months ago",
    "6 months ago",
    "7 months ago",
    "8 months ago",
    "9 months ago",
    "10 months ago",
    "11 months ago",
    "1 year ago",
];

/** Weighted toward 5 with a sprinkling of 4s so the breakdown looks natural. */
const MOCK_REVIEW_RATINGS = [5, 5, 4, 5, 4, 5, 5, 4, 5, 5, 4, 5];

/** Small deterministic PRNG (mulberry32) seeded from a string hash. */
function hashString(value: string): number {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
        hash ^= value.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
}

function createSeededRandom(seed: number): () => number {
    let state = seed || 1;
    return () => {
        state = (state + 0x6d2b79f5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function expandReviews(reviews: Review[], subjects: string[], educatorId: string): Review[] {
    if (reviews.length >= MOCK_REVIEW_TARGET) return reviews;

    const random = createSeededRandom(hashString(educatorId));
    const usedNames = new Set(reviews.map((review) => review.studentName));
    const result = [...reviews];

    for (let i = result.length; i < MOCK_REVIEW_TARGET; i++) {
        const name = pickUniqueName(usedNames, random, i);
        const subject = subjects.length > 0
            ? subjects[Math.floor(random() * subjects.length)]
            : undefined;
        const rating = MOCK_REVIEW_RATINGS[Math.floor(random() * MOCK_REVIEW_RATINGS.length)];
        const text = MOCK_REVIEW_TEXTS[Math.floor(random() * MOCK_REVIEW_TEXTS.length)];
        const date = MOCK_REVIEW_DATES[Math.min(i + 1, MOCK_REVIEW_DATES.length - 1)];

        result.push({
            id: `${educatorId}-review-${i + 1}`,
            studentName: name,
            rating,
            date,
            text,
            subject,
        });
    }

    return result;
}

function pickUniqueName(usedNames: Set<string>, random: () => number, fallbackIndex: number): string {
    const start = Math.floor(random() * MOCK_REVIEWER_NAMES.length);

    for (let attempt = 0; attempt < MOCK_REVIEWER_NAMES.length; attempt++) {
        const candidate = MOCK_REVIEWER_NAMES[(start + attempt) % MOCK_REVIEWER_NAMES.length];
        if (!usedNames.has(candidate)) {
            usedNames.add(candidate);
            return candidate;
        }
    }

    return MOCK_REVIEWER_NAMES[fallbackIndex % MOCK_REVIEWER_NAMES.length];
}

function toTeacherProfile(educator: EducatorProfileInput): TeacherProfile {
    const id = normalizeText(educator.id) || "unknown-educator";
    const name = normalizeText(educator.name) || "Educator";
    const avatar = normalizeText(educator.avatar) || undefined;
    const location = normalizeText(educator.location) || "Location not provided";
    const experience = Math.max(0, normalizeNumber(educator.experience));
    const rating = Math.max(0, normalizeNumber(educator.rating));
    const reviewCount = Math.max(0, Math.trunc(normalizeNumber(educator.reviewCount)));
    const availableThisWeek = typeof educator.availableThisWeek === "boolean"
        ? educator.availableThisWeek
        : undefined;
    const qualifications = normalizeQualifications(educator.qualifications);
    const subjects = normalizeStringList(educator.subjects);
    const workHistory = normalizeWorkHistory(educator.workHistory);
    const description = normalizeText(educator.description);
    const teachingPhilosophy = normalizeText(educator.teachingPhilosophy);
    const whoITeach = normalizeText(educator.whoITeach);
    const latestWorkHistory = workHistory[workHistory.length - 1];
    const startYear = latestWorkHistory?.period.match(/\d{4}/)?.[0];

    return {
        id,
        name,
        avatar,
        verified: educator.verified === true,
        title: qualifications[0]?.degree || "Educator",
        location,
        joined: startYear ? `Since ${startYear}` : "New on Pirate Chai",
        headline: description || "Educator profile",
        quote: teachingPhilosophy || description || "Not provided.",
        stats: {
            students: {
                value: experience > 0 ? `${experience * 45}+` : "-",
                trend: "-",
                note: experience > 0 ? "Estimated from experience" : "Not available",
            },
            classes: {
                value: experience > 0 ? `${experience * 32}` : "-",
                trend: "-",
                note: experience > 0 ? "Estimated from experience" : "Not available",
            },
            rating: {
                value: rating > 0 ? rating.toFixed(1) : "-",
                trend: "-",
                note: reviewCount > 0 ? `from ${reviewCount} reviews` : "No reviews yet",
            },
            experience: {
                value: experience > 0 ? `${experience}+` : "-",
                trend: experience > 0 ? "years" : "",
                note: experience > 0 ? "of teaching experience" : "Not provided",
            },
        },
        about: normalizeText(educator.bio),
        qualifications,
        highlights: [
            ...(experience > 0 ? [`${experience}+ years of teaching experience`] : []),
            ...(reviewCount > 0 ? [`${reviewCount} verified student reviews`] : []),
            availableThisWeek === undefined
                ? "Availability not provided"
                : availableThisWeek
                    ? "Available for booking this week"
                    : "Waitlist only this week",
        ],
        subjects: subjects.map((name) => ({ name })),
        teachingPhilosophy,
        whoITeach,
        workHistory,
        reviews: expandReviews(normalizeReviews(educator.reviews), subjects, id),
    };
}

/**
 * Look up a public educator profile by id — the educator slug used everywhere
 * in the app (e.g. `mehedi-hasan`). Returns `undefined` when the id is unknown.
 */
export function getTeacherById(id: string): TeacherProfile | undefined {
    const educator = initialEducators.find((e) => e.id === id);
    return educator ? toTeacherProfile(educator) : undefined;
}
