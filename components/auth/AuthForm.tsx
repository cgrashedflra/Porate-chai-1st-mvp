"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { AuthConfig } from "@/types/auth/auth.types";
import { AuthBrandPanel } from "./AuthBrandPanel";
import { AuthField } from "./AuthField";
import { AuthSocialButtons } from "./AuthSocialButtons";
import ROUTES from "@/constants/routes";

interface AuthFormProps {
    config: AuthConfig;
}

export function AuthForm({ config }: AuthFormProps) {
    const isRecovery = config.mode === "recovery";

    const [activeRole, setActiveRole] = useState<string>(
        () => config.roleOptions?.[0]?.value ?? ""
    );

    // Controlled values keyed by field name — drives the progressive reveal.
    const [values, setValues] = useState<Record<string, string>>({});

    // How many fields have been filled so far (drives the reveal transition).
    const [revealedCount, setRevealedCount] = useState(1);

    const handleChange = (name: string, value: string) => {
        setValues((prev) => ({ ...prev, [name]: value }));

        // Reveal the next field as soon as this one has content.
        const index = config.fields.findIndex((f) => f.name === name);

        if (index >= 0 && value.trim() !== "" && index + 1 >= revealedCount) {
            setRevealedCount((prev) =>
                Math.min(prev + 1, config.fields.length)
            );
        }
    };

    const switchHref =
        isRecovery || config.mode === "register"
            ? ROUTES.AUTH.SIGN_IN
            : ROUTES.AUTH.SIGN_UP;

    return (
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="glass-card flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl shadow-pc-xl lg:h-[85vh] lg:flex-row">

                <AuthBrandPanel config={config} />

                <div
                    className="flex-1 overflow-y-auto bg-white scrollbar-none"
                >
                    <div className="flex min-h-full">
                        <div className="m-auto flex w-full max-w-md animate-fade-up flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12">

                            <header>
                                <span className="overline text-primary-500">
                                    {config.mode === "register"
                                        ? "Join us today"
                                        : config.mode === "recovery"
                                          ? "Reset your password"
                                          : "Welcome back"}
                                </span>

                                <h1 className="heading-lg mt-2 text-primary-500">
                                    {config.title}
                                </h1>

                                {config.subtitle && (
                                    <p className="body-md mt-1.5 text-primary-400">
                                        {config.subtitle}
                                    </p>
                                )}
                            </header>

                            {/* Social login — always visible first, above the fields. */}
                            {config.showSocialLogin &&
                                config.socialProviders &&
                                config.socialProviders.length > 0 && (
                                    <div className="flex flex-col gap-2">
                                        <AuthSocialButtons providers={config.socialProviders} />
                                    </div>
                                )}

                            {/* Role toggle (register only). */}
                            {config.roleOptions &&
                                config.roleOptions.length > 0 &&
                                !isRecovery && (
                                    <div
                                        role="group"
                                        aria-label="Select account type"
                                        className="flex gap-1.5 rounded-2xl bg-primary-50 p-1.5"
                                    >
                                        {config.roleOptions.map((role) => (
                                            <button
                                                key={role.value}
                                                type="button"
                                                onClick={() => setActiveRole(role.value)}
                                                aria-pressed={activeRole === role.value}
                                                className={cn(
                                                    "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2.5 label-md transition-all",
                                                    activeRole === role.value
                                                        ? "gradient-primary text-white shadow-pc-sm"
                                                        : "text-primary-500 hover:bg-white hover:text-primary-600"
                                                )}
                                            >
                                                <span aria-hidden="true" className="text-base leading-none">
                                                    {role.icon}
                                                </span>
                                                {role.label}
                                            </button>
                                        ))}
                                    </div>
                                )}

                            <form className="flex flex-col gap-5">
                                <div className="flex flex-col gap-4">
                                    {config.fields.map((field, index) => {
                                        const revealed = isRecovery || index < revealedCount;

                                        return (
                                            <div
                                                key={field.name}
                                                data-field={field.name}
                                                className={cn(
                                                    "transition-[opacity,transform] duration-300 ease-out",
                                                    !revealed && "opacity-40 translate-y-1"
                                                )}
                                            >
                                                <AuthField
                                                    field={field}
                                                    value={values[field.name] ?? ""}
                                                    onChange={(value) => handleChange(field.name, value)}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>

                                {!isRecovery &&
                                    (config.showRememberMe || config.showForgotPassword) && (
                                        <div className="flex items-center justify-between gap-3">
                                            {config.showRememberMe && (
                                                <label className="flex cursor-pointer select-none items-center gap-2 caption text-primary-700">
                                                    <input
                                                        type="checkbox"
                                                        className="size-4 rounded border-primary-300 accent-primary-500"
                                                    />
                                                    <span>Remember me</span>
                                                </label>
                                            )}

                                            {config.showForgotPassword && (
                                                <Link
                                                    href={ROUTES.AUTH.RECOVERY}
                                                    className="label-md cursor-pointer text-primary-600 underline-offset-4 transition-colors hover:text-primary-700 hover:underline"
                                                >
                                                    Forgot password?
                                                </Link>
                                            )}
                                        </div>
                                    )}

                                {!isRecovery && config.showTerms && (
                                    <label className="flex cursor-pointer select-none items-start gap-2 caption leading-relaxed text-primary-700">
                                        <input
                                            type="checkbox"
                                            className="mt-0.5 size-4 rounded border-primary-300 accent-primary-500"
                                        />
                                        <span>
                                            I agree to the{" "}
                                            <a href="#" className="font-medium text-primary-600 hover:underline">
                                                Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" className="font-medium text-primary-600 hover:underline">
                                                Privacy Policy
                                            </a>
                                        </span>
                                    </label>
                                )}

                                <button
                                    type="submit"
                                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 label-lg text-white shadow-pc-md transition-all hover:brightness-110 hover:shadow-pc-lg active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                                >
                                    {config.submitLabel}
                                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </button>
                            </form>

                            {(config.switchText || config.switchLabel) && (
                                <div className="flex items-center justify-center gap-1.5 body-sm text-primary-500">
                                    <span>{config.switchText}</span>

                                    <Link
                                        href={switchHref}
                                        className="label-md cursor-pointer text-primary-600 underline-offset-4 transition-colors hover:text-primary-700 hover:underline"
                                    >
                                        {config.switchLabel}
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
