import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeacherProfilePage } from "@/components/profile/teacher-profile-page";
import { getTeacherById } from "@/components/profile/data/mock-data";
import { initialEducators } from "@/data/educators";
import { todayInDhaka } from "@/lib/today";
import ROUTES from "@/constants/routes";

interface EducatorProfilePageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EducatorProfilePageProps): Promise<Metadata> {
    const { id } = await params;
    const teacher = getTeacherById(id);

    if (!teacher) {
        return { title: "Educator not found" };
    }

    return {
        title: `${teacher.name} — ${teacher.title}`,
        description: teacher.headline,
    };
}

export default async function Profile({ params }: EducatorProfilePageProps) {
    const { id } = await params;
    const teacher = getTeacherById(id);

    if (!teacher) {
        notFound();
    }

    const educator = initialEducators.find((e) => e.id === id);

    return (
        <TeacherProfilePage
            teacher={teacher}
            educator={educator}
            startDate={todayInDhaka()}
            maxWidthClassName="max-w-7xl"
            messageHref={ROUTES.STUDENT.MESSAGES}
        />
    );
}
