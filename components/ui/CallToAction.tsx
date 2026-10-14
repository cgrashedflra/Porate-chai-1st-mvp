import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./ButtonLink";
import type { IconName } from "./Icon";

export interface CtaAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  className?: string;
}

export interface CallToActionProps {
  id?: string;
  /** Optional pill rendered above the title (eyebrow / kicker). */
  eyebrow?: ReactNode;
  /** Headline. Pass nodes to accent a word, e.g. `<span className="text-gradient-warm">…</span>`. */
  title: ReactNode;
  description?: ReactNode;
  /** Buttons rendered under the copy. Each one is a link (`href`). */
  actions?: CtaAction[];
  /** Optional row under the actions. Defaults to the shared static trust badges. */
  footer?: ReactNode;
  /**
   * Extra classes for the outer `<section>`.
   * Spacing is intentionally owned by the caller (e.g. `py-24 sm:py-32` for a
   * full banner, `py-12 sm:py-16` when it should hug its content).
   */
  className?: string;
}

/** Shared trust badges — intentionally static so every CTA shows the same row. */
const DEFAULT_TRUST_ITEMS = (
  <>
    <span>✓ No account needed to browse</span>
    <span>✓ Server-verified payments</span>
    <span>✓ bKash &amp; SSLCommerz</span>
    <span>✓ Cancel anytime</span>
  </>
);

/**
 * Shared, presentation-only call-to-action band.
 *
 * The layout/design is the marketing one (gradient + decorations + centered
 * copy); every piece of copy is a prop so the same block can be reused with
 * different text in different places.
 */
export function CallToAction({
  id,
  eyebrow,
  title,
  description,
  actions,
  footer = DEFAULT_TRUST_ITEMS,
  className,
}: CallToActionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden gradient-brand", className)}
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
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
            {eyebrow}
          </span>
        )}

        <h2
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance",
            eyebrow ? "mt-6" : undefined
          )}
        >
          {title}
        </h2>

        {description && (
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {actions.map(({ label, href, variant = "primary", size = "md", icon, className }) => (
              <ButtonLink
                key={label}
                href={href}
                variant={variant}
                size={size}
                icon={icon}
                className={className}
              >
                {label}
              </ButtonLink>
            ))}
          </div>
        )}

        {footer && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            {footer}
          </div>
        )}
      </div>
    </section>
  );
}
