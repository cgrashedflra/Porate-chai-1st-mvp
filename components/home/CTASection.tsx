import ROUTES from "@/constants/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function CTASection() {
    return (
        <section
            id="cta"
            className="relative py-24 sm:py-32 overflow-hidden gradient-brand"
        >
            {/* Decorative grid */}
            <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
                aria-hidden="true"
            />
            {/* Floating orbs */}
            <div
                className="absolute top-10 right-1/4 h-32 w-32 rounded-full bg-brand-orange/30 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-10 left-1/4 h-40 w-40 rounded-full bg-brand-sky/30 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                        <span className="font-bengali text-white">পড়াতে চাই?</span>
                        Want to learn?
                    </span>
                    <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
                        Find a tutor you can{" "}
                        <span className="text-gradient-warm">actually trust</span>.
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                        Whether you are a student chasing your next grade or a tutor
                        building a reputation — your first session is one click away.
                        No credit card needed to browse.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <ButtonLink
                            href={ROUTES.EDUCATORS}
                            variant="secondary"
                            size="lg"
                            icon="arrowRight"
                            className="shadow-pc-lg"
                        >
                            Find an educator
                        </ButtonLink>
                        <ButtonLink
                            href={ROUTES.AUTH.SIGN_UP}
                            variant="ghost"
                            size="lg"
                            icon="graduation"
                        >
                            Become a tutor
                        </ButtonLink>
                    </div>

                    {/* Micro-trust row */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
                        <span>✓ No account needed to browse</span>
                        <span>✓ Server-verified payments</span>
                        <span>✓ bKash & SSLCommerz</span>
                        <span>✓ Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
