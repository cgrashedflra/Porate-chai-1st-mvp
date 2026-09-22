import { AppShell } from "@/components/navigation/dashboard/AppShell";
import { LeftSidebar } from "@/components/navigation/sidebars/LeftSidebar";
import { RightSidebar } from "@/components/navigation/sidebars/RightSidebar";
import { educatorNav } from "@/config/nav/educator";
import type { NavUser } from "@/types/user";

export default async function EducatorLayout({ children }: { children: React.ReactNode }) {
    const user: NavUser = { name: "Mehedi Hasan", role: "educator" }; // await getCurrentUser()
    return (
        <AppShell
            user={user}
            left={<LeftSidebar config={educatorNav} user={user} />}
            right={<RightSidebar widgets={educatorNav.rightSidebar} />}
        >
            {children}
        </AppShell>
    );
}