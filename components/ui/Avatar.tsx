import { cn } from "@/lib/cn";

const sizes = {
  xs: "size-9 text-xs",
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
  xl: "size-20 text-xl",
  "2xl": "size-40 text-4xl sm:size-48 sm:text-5xl md:size-44 md:text-4xl lg:size-48 lg:text-5xl",
};

const variants = {
  /** Brand gradient — the default identity colour. */
  gradient: "bg-linear-to-br from-primary-400 to-skyblue-400 text-white",
  /** Quiet indigo tint for dense lists and tables. */
  soft: "bg-indigo-100 text-indigo-600",
};

type Props = {
  name: string;
  src?: string | null;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
};

export function Avatar({ name, src, size = "md", variant = "gradient", className }: Props) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className={cn("shrink-0 rounded-full object-cover", sizes[size], className)} />;
  }
  // Placeholder: initials on a brand gradient
  return (
    <span aria-hidden="true" className={cn("grid shrink-0 place-items-center rounded-full font-semibold", variants[variant], sizes[size], className)}>
      {initials || "?"}
    </span>
  );
}
