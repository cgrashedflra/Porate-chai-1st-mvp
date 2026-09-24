import { AppShell } from "@/components/navigation/dashboard/AppShell";
import { LeftSidebar } from "@/components/navigation/sidebars/LeftSidebar";
import { RightSidebar } from "@/components/navigation/sidebars/RightSidebar";
import { adminNav } from "@/config/nav/admin";
import type { NavUser } from "@/types/user";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const user: NavUser = { name: "Admin", role: "admin" }; // await getCurrentUser()
    return (
        <AppShell
            user={user}
            left={<LeftSidebar config={adminNav} />}
            right={<RightSidebar widgets={adminNav.rightSidebar} />}
        >
            {children}
        </AppShell>
    );
}