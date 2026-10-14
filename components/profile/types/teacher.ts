import type { IconName } from "@/components/ui/Icon";

export type SocialLinks = {
    linkedin?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
};

export type Stat = {
    value: string;
    trend: string;
    note: string;
};

export type Fact = {
    icon: IconName;
    value: string;
    label: string;
};

export type Qualification = {
    title: string;
    place: string;
    years: string;
};

export type Subject = {
    name: string;
};

export type TeacherProfile = {
    name: string;
    avatar?: string;
    verified: boolean;
    title: string;
    level: string;
    location: string;
    joined: string;
    headline: string;
    quote: string;
    social: SocialLinks;
    stats: {
        students: Stat;
        classes: Stat;
        rating: Stat;
    };
    about: string;
    facts: Fact[];
    qualifications: Qualification[];
    highlights: string[];
    subjects: Subject[];
    style: string[];
};
