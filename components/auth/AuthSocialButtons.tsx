import type { ReactElement } from "react";
import { cn } from "@/lib/cn";

type Provider = "google" | "facebook";

interface AuthSocialButtonsProps {
    providers: Provider[];
}

/** Inline Google "G" — official brand mark, no icon dependency. */
function GoogleLogo(): ReactElement {
    return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true">
            <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.79c2.23-2.05 3.55-5.08 3.55-8.62z"
            />
            <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.79-3c-1.05.71-2.39 1.12-4.14 1.12-3.19 0-5.88-2.15-6.84-5.04H1.28v3.09C3.64 21.36 7.54 24 12 24z"
            />
            <path
                fill="#FBBC05"
                d="M5.16 14.17c-.19-.56-.36-1.22-.36-2.17 0-.95.13-1.6.42-2.17V6.73H1.28C.47 8.35 0 10.1 0 12s.47 3.65 1.28 5.27l3.88-3.1z"
            />
            <path
                fill="#EA4335"
                d="M12 4.88c1.77 0 3.3.61 4.59 1.28l3.3-3.3C17.92 1.28 15.2 0 12 0 7.53 0 3.64 2.64 1.28 5.27l3.88 3.1z"
            />
        </svg>
    );
}

/** Inline Facebook "f" — official brand mark, no icon dependency. */
function FacebookLogo(): ReactElement {
    return (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true">
            <path
                fill="#1877F2"
                d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05v-2.66c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z"
            />
        </svg>
    );
}

const PROVIDER_META: Record<Provider, { label: string; logo: () => ReactElement }> = {
    google: { label: "Google", logo: GoogleLogo },
    facebook: { label: "Facebook", logo: FacebookLogo },
};

export function AuthSocialButtons({ providers }: AuthSocialButtonsProps) {
    if (!providers || providers.length === 0) return null;

    return (
        <div className="flex flex-col gap-4">

            {/* Compact horizontal row — buttons first, divider below. */}
            <div className="grid grid-cols-2 gap-3">
                {providers.map((provider) => {
                    const meta = PROVIDER_META[provider];
                    const Logo = meta.logo;

                    return (
                        <button
                            key={provider}
                            type="button"
                            className={cn(
                                "group flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-40 bg-white px-3 py-2.5 body-sm text-primary-700 shadow-pc-sm transition-all",
                                "hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-pc-md active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                            )}
                        >
                            <Logo />
                            <span className="label-md">{meta.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-primary-100" />
                <span className="overline text-primary-500">or continue with</span>
                <span className="h-px flex-1 bg-primary-100" />
            </div>
        </div>
    );
}

export default AuthSocialButtons;