import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Optional id so a parent <section> can point `aria-labelledby` at the heading. */
  id?: string;
  /** Small label above the title (kicker). */
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Optional slot rendered under the description (e.g. a CTA). */
  children?: ReactNode;
  className?: string;
};

/**
 * Standard public-page section header: kicker · title · description.
 * Keeps the marketing pages visually consistent without repeating markup.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  children,
  className,
}: Props) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "relative",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2", centered && "justify-center")}>
          <span className="h-2 w-2 rounded-full bg-primary-500" aria-hidden="true" />
          <span className="overline text-primary-500">{eyebrow}</span>
          <span className="h-px w-8 bg-primary-200" aria-hidden="true" />
        </div>
      )}

      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-pretty text-sm leading-relaxed text-neutral-500 sm:text-base",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}

      {children}
    </header>
  );
}
