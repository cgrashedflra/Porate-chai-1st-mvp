import { AuthForm } from "@/components/auth/AuthForm";
import { recoveryConfig } from "@/config/auth/recovery";

export default function RecoveryPage() {
    return <AuthForm config={recoveryConfig} />;
}
