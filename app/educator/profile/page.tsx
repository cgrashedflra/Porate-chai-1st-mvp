import { TeacherProfilePage } from "@/components/profile/teacher-profile-page";
import { teacher } from "@/components/profile/data/mock-data";

export default function Profile() {
    return (
        <TeacherProfilePage
            teacher={teacher}
            tabs={["About", "Availability", "Reviews"]}
            maxWidthClassName="max-w-5xl"
        />
    );
}
