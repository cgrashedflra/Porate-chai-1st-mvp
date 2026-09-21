import Link from "next/link";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  if (brand.logoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={brand.logoSrc} alt="" className={cn("object-contain", className)} />;
  }
  // Placeholder mark: two overlapping rounded shapes in the brand colours
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="3" y="6" width="19" height="28" rx="8" fill="#6366F1" />
      <rect x="18" y="6" width="19" height="28" rx="8" fill="#22D3EE" fillOpacity=".8" />
    </svg>
  );
}

type Props = {
  /** marketing: English wordmark large. app: Bengali wordmark large (sidebar) */
  variant?: "marketing" | "app";
  href?: string;
  className?: string;
};

export function Logo({ variant = "marketing", href = brand.homeHref, className }: Props) {
  return (
    <Link
      href={href}
      aria-label={`${brand.name} ${brand.accent} home`}
      className={cn("inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500", className)}
    >
      <LogoMark className="h-9 w-9 shrink-0" />
      {variant === "marketing" ? (
        <span className="flex flex-col leading-none">
          <span className="text-[22px] font-bold tracking-tight text-slate-900">
            {brand.name} <span className="text-indigo-500">{brand.accent}</span>
          </span>
          <span className="mt-1 text-xs text-slate-500">{brand.tagline}</span>
        </span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="text-2xl font-bold text-indigo-600">{brand.tagline}</span>
          <span className="mt-1 text-xs lowercase text-slate-500">{brand.name} {brand.accent}</span>
        </span>
      )}
    </Link>
  );
}
