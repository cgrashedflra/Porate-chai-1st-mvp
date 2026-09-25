import Image from "next/image";
import { AuthConfig } from "@/types/auth/auth.types";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";
import ROUTES from "@/constants/routes";

interface AuthBrandPanelProps {
    config: AuthConfig;
}

export function AuthBrandPanel({
    config,
}: AuthBrandPanelProps) {
    const brand = config.brand;

    if (!brand) return null;

    return (
        <aside className="hidden shrink-0 bg-primary-50 lg:flex lg:w-[45%]">

            <div className="flex h-full w-full flex-col justify-between gap-6 overflow-hidden p-6 lg:p-10">

                <div className="shrink-0">
                    <Logo variant="marketing" href={ROUTES.HOME} />
                </div>

                <div className="shrink-0">
                    <h2 className="heading-lg text-gradient-primary">
                        {brand.title}

                        {brand.highlightedTitle && (
                            <>
                                <br />
                                <span className="text-gradient-warm">
                                    {brand.highlightedTitle}
                                </span>
                            </>
                        )}
                    </h2>

                    {brand.description && (
                        <p className="body-md mt-2.5 text-deep-blue-600">
                            {brand.description}
                        </p>
                    )}
                </div>

                {brand.image && (
                    <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl shadow-pc-md">
                        <Image
                            src={brand.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                )}

                {brand.features && brand.features.length > 0 && (
                    <div className="w-full shrink-0 space-y-3">

                        {brand.features.map((feature) => (
                            <div
                                className="flex items-center gap-2.5"
                                key={feature.title}
                            >
                                {feature.icon && (
                                    <span
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600"
                                        aria-hidden="true"
                                    >
                                        <Icon name={feature.icon} size={14} />
                                    </span>
                                )}

                                <div className="min-w-0 text-left">
                                    <strong className="block label-md text-primary-900">
                                        {feature.title}
                                    </strong>

                                    {feature.description && (
                                        <span className="block text-xs text-deep-blue-600">
                                            {feature.description}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                )}

            </div>

        </aside>
    );
}