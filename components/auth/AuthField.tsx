import type { ChangeEvent } from "react";
import { AuthFieldConfig } from "@/types/auth/auth.types";

interface AuthFieldProps {
    field: AuthFieldConfig;

    /** Controlled value — needed for the progressive-reveal form. */
    value?: string;
    onChange?: (value: string) => void;
}

export function AuthField({ field, value = "", onChange }: AuthFieldProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={field.name}
                className="label-md text-primary-700"
            >
                {field.label}

                {field.required && (
                    <span className="ml-0.5 text-error-500" aria-hidden="true">*</span>
                )}
            </label>

            <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={value}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-40 bg-neutral-10 px-3.5 py-2.5 body-md text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-60 hover:border-primary-200 focus:-translate-y-px focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/15"
            />
        </div>
    );
}
