import { cn } from "@/lib/cn";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";

type Props = {
  title: string;
  body?: string;
  cta?: { label: string; href: string };
  /** Swap the placeholder block for a real illustration */
  imageSrc?: string;
  className?: string;
};

export function PromoCard({ title, body, cta, imageSrc, className }: Props) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-linear-to-br from-primary-50 via-primary-100/70 to-skyblue-100/60 p-5", className)}>
      <h3 className="max-w-[80%] text-lg font-semibold leading-snug text-indigo-700">{title}</h3>
      {body && <p className="mt-2 max-w-[75%] text-sm text-slate-500">{body}</p>}
      {cta && <ButtonLink href={cta.href} icon="arrowRight" className="mt-4">{cta.label}</ButtonLink>}
      {/* Illustration slot */}
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt="" className="pointer-events-none absolute bottom-0 right-0 h-2/3 w-auto object-contain" />
      ) : (
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-4 -right-4 grid h-24 w-24 place-items-center rounded-full bg-white/50 text-indigo-300">
          <Icon name="sparkles" size={36} />
        </div>
      )}
    </div>
  );
}
