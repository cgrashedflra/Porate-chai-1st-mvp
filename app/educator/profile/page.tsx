import { notFound } from "next/navigation";
import { TeacherProfilePage } from "@/components/profile/teacher-profile-page";
import { getTeacherById } from "@/components/profile/data/mock-data";
import { initialEducators } from "@/data/educators";
import { todayInDhaka } from "@/lib/today";

export default function Profile() {
    const id = "tanvir-hossain";
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
            maxWidthClassName="max-w-5xl"
        />
    );
}
