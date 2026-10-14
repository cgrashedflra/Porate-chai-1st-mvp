import { initialEducators } from "@/data/educators";
import type { Educator } from "@/types/types";
import type { TeacherProfile } from "../types/teacher";

export const teacher: TeacherProfile = {
    name: "Mehedi Hasan",
    avatar: undefined,
    verified: true,
    title: "Mathematics Teacher",
    level: "HSC (1st Year)",
    location: "Dhaka, Bangladesh",
    joined: "Apr 2023",
    headline:
        "Passionate about making mathematics simple and enjoyable. Helping students build a strong foundation for their future.",
    quote: "Better Students, Brighter Future",
    social: { linkedin: "#", youtube: "#", facebook: "#", website: "#" },
    stats: {
        students: { value: "142", trend: "12%", note: "vs. last month" },
        classes: { value: "32", trend: "8%", note: "vs. last month" },
        rating: { value: "4.8", trend: "0.2", note: "from 12 reviews" },
    },
    about:
        "I'm Mehedi Hasan, a dedicated Mathematics teacher with 5+ years of experience. I believe in concept-based learning and personalized support. My goal is to help every student build confidence and achieve their academic dreams.",
    facts: [
        { icon: "sparkles", value: "5+ Years", label: "Teaching Experience" },
        { icon: "graduation", value: "HSC (1st Year)", label: "Grade Level" },
        { icon: "book", value: "Mathematics", label: "Subject" },
    ],
    qualifications: [
        { title: "B.Sc. in Mathematics", place: "University of Dhaka", years: "2018 – 2022" },
        { title: "HSC", place: "Notre Dame College", years: "2016 – 2018" },
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
    style: ["Concept Focused", "Interactive", "Practice Based", "Student Friendly"],
};

/**
 * The profile UI renders a `TeacherProfile`, while the app's educator dataset
 * (`data/educators.tsx`) uses the richer `Educator` shape. This adapter keeps a
 * single source of truth for demo data instead of duplicating mock profiles.
 *
 * `students` / `classes` aggregates are not tracked on `Educator`, so a stable
 * placeholder is derived for the demo.
 */
function toTeacherProfile(educator: Educator): TeacherProfile {
    const primarySubject = educator.subjects[0] ?? "General";
    const earliest =
        educator.timeline.length > 0 ? educator.timeline[educator.timeline.length - 1] : undefined;
    const startYear = earliest?.period.match(/\d{4}/)?.[0];
    const formats = educator.teachingFormats.join(" & ");

    return {
        name: educator.name,
        avatar: educator.avatar,
        verified: educator.verified,
        title: primarySubject,
        level: educator.whoITeach ?? formats,
        location: educator.location,
        joined: startYear ? `Since ${startYear}` : "New on Pirate Chai",
        headline: educator.description,
        quote: educator.teachingPhilosophy ?? educator.description,
        social: {},
        stats: {
            students: { value: `${educator.experience * 45}+`, trend: "12%", note: "vs. last month" },
            classes: { value: `${educator.experience * 32}`, trend: "8%", note: "vs. last month" },
            rating: {
                value: educator.rating.toFixed(1),
                trend: "0.2",
                note: `from ${educator.reviewCount} reviews`,
            },
        },
        about: educator.bio,
        facts: [
            { icon: "sparkles", value: `${educator.experience}+ Years`, label: "Teaching Experience" },
            { icon: "graduation", value: primarySubject, label: "Primary Subject" },
            { icon: "book", value: educator.location, label: "Location" },
        ],
        qualifications: educator.qualifications.map((title) => ({ title, place: "", years: "" })),
        highlights: [
            `${educator.experience}+ years of teaching experience`,
            `${educator.reviewCount} verified student reviews`,
            educator.availableThisWeek ? "Available for booking this week" : "Waitlist only this week",
            `Sessions: ${formats}`,
        ],
        subjects: educator.subjects.map((name) => ({ name })),
        style: educator.teachingFormats,
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
