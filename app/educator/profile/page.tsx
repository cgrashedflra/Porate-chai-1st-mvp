import { TeacherProfilePage, teacher } from "@/components/profile";

export default function Profile() {
    return (
        <TeacherProfilePage
            teacher={teacher}
            tabs={["About", "Classes", "Availability", "Reviews"]}
            maxWidthClassName="max-w-5xl"
        />
    );
}
