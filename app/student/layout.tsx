import { AppShell } from "@/components/navigation/dashboard/AppShell";
import { LeftSidebar } from "@/components/navigation/sidebars/LeftSidebar";
import { RightSidebar } from "@/components/navigation/sidebars/RightSidebar";
import { studentNav } from "@/config/nav/student";
import type { NavUser } from "@/types/user";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
    const user: NavUser = { name: "Rafid Hasan", role: "student" }; // await getCurrentUser()
    return (
        <AppShell
            user={user}
            left={<LeftSidebar config={studentNav} user={user} />}
            right={<RightSidebar widgets={studentNav.rightSidebar} />}
        >
            {children}
        </AppShell>
    );
}