export type Role = "student" | "educator" | "admin";

export type NavUser = {
  name: string;
  email?: string;
  role: Role;
  avatarUrl?: string | null;
};
