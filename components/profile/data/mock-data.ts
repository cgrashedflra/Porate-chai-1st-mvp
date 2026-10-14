import { initialEducators } from "@/data/educators";
import type { EducationalQualification, WorkHistory } from "@/types/types";
import { z } from "zod";
import type { TeacherProfile } from "../types/teacher";

type EducatorProfileInput = {
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

export const teacher: TeacherProfile = {
    name: "Mehedi Hasan",
    avatar: undefined,
    verified: true,
    title: "Mathematics Teacher",
    location: "Dhaka, Bangladesh",
    joined: "Apr 2023",
    headline:
        "Passionate about making mathematics simple and enjoyable. Helping students build a strong foundation for their future.",
    quote: "Better Students, Brighter Future",
    stats: {
        students: { value: "142", trend: "12%", note: "vs. last month" },
        classes: { value: "32", trend: "8%", note: "vs. last month" },
        rating: { value: "4.8", trend: "0.2", note: "from 12 reviews" },
        experience: {value: "7+", trend: "years", note: "of teaching experience"}
    },
    about:
        "I'm Mehedi Hasan, a dedicated Mathematics teacher with 5+ years of experience. I believe in concept-based learning and personalized support. My goal is to help every student build confidence and achieve their academic dreams.",
    qualifications: [
        { degree: "B.Sc. in Mathematics", institute: "University of Dhaka", passingYear: "2022" },
        { degree: "Higher Secondary Certificate (HSC)", institute: "Notre Dame College", passingYear: "2018" },
    ],
    highlights: [
        "Proven track record of student success",
        "Clear and simple teaching method",
        "Flexible schedule and support",
        "Regular progress updates",
    ],
    subjects: [
        { name: "Mathematics" },
        { name: "Calculus" },
        { name: "Trigonometry" },
        { name: "Algebra" },
        { name: "Statistics" },
    ],
    teachingPhilosophy: "Concept Focused",
    whoITeach: "HSC (1st Year)",
        workHistory: [],
};


function toTeacherProfile(educator: EducatorProfileInput): TeacherProfile {
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
