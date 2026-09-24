import { AuthForm } from "@/components/auth/AuthForm";
import { loginConfig } from "@/config/auth/login";

export default function LoginPage() {
    return <AuthForm config={loginConfig} />;
}