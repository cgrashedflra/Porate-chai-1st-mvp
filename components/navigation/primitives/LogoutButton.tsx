"use client";

import { useRouter } from "next/navigation";

type Props = { className?: string; children: React.ReactNode };

export function LogoutButton({ className, children }: Props) {
  const router = useRouter();

  async function logout() {
    // TODO: replace with your auth library's sign-out (NextAuth signOut, Clerk, etc.)
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/");
    router.refresh();
  }

  return (
    <button type="button" onClick={logout} className={className}>
      {children}
    </button>
  );
}
