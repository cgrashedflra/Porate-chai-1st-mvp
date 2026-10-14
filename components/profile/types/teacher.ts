import type { IconName } from "@/components/ui/Icon";
import type { EducationalQualification, WorkHistory } from "@/types/types";

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

export type Subject = {
    name: string;
};

export type TeacherProfile = {
    name: string;
    avatar?: string;
    verified: boolean;
    title: string;
    location: string;
    joined: string;
    headline: string;
    quote: string;
    stats: {
        students: Stat;
        classes: Stat;
        rating: Stat;
        experience: Stat;
    };
    about: string;
    qualifications: EducationalQualification[];
    highlights: string[];
    subjects: Subject[];
    teachingPhilosophy: string;
    whoITeach: string;
    workHistory: WorkHistory[];
};
