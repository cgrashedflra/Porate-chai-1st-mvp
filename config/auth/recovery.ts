import { AuthConfig } from "@/types/auth/auth.types";

export const recoveryConfig: AuthConfig = {
    mode: "recovery",

    title: "Reset your password",
    subtitle:
        "Enter the email address linked to your account and we'll send you a reset link.",

    fields: [
        {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "Enter your email address",
            required: true,
        },
    ],

    submitLabel: "Send Reset Link",

    switchText: "Remember your password?",
    switchLabel: "Back to sign in",

    brand: {
        title: "No stress.",
        highlightedTitle: "We've got your back.",
        description:
            "Enter your email and we'll send you a secure link to reset your password.",

        image: "assets/assurance.png",

        features: [
            {
                title: "Private & secure",
                description: "Reset links are encrypted and expire quickly",
                icon: "shield",
            },
            {
                title: "Fast delivery",
                description: "The link lands in your inbox in minutes",
                icon: "clock",
            },
            {
                title: "You're protected",
                description: "Only you can recover your account",
                icon: "userCheck",
            },
        ],
    },
};
