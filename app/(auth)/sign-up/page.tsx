import { AuthForm } from "@/components/auth/AuthForm";
import { registerConfig } from "@/config/auth/register";

export default function RegisterPage() {
    return <AuthForm config={registerConfig} />;
}