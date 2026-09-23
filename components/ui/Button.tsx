import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

const variants = {
  primary: "bg-primary-500 text-white shadow-md shadow-primary-500/25 hover:bg-primary-700",
  secondary: "border border-primary-300 bg-white text-primary-600 hover:bg-primary-50",
  danger: "bg-error-500 text-white shadow-md shadow-error-500/25 hover:bg-error-600",
  /** Translucent glass button — use on dark / gradient surfaces. */
  ghost: "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
} as const;

const sizes = {
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-4 text-base",
} as const;

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500";

type ButtonProps = {
  /** When set, renders a Next.js <Link> (navigation) instead of a <button>. */
  href?: string;
  /** Optional id — passes through to the rendered element (for tests / anchors). */
  id?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Optional trailing icon. */
  icon?: IconName;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  id,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    disabled && (href ? "pointer-events-none opacity-60" : "cursor-not-allowed opacity-60"),
    className
  );
  const iconSize = size === "lg" ? 18 : size === "md" ? 16 : 14;

  if (href) {
    return (
      <Link href={href} id={id} aria-disabled={disabled || undefined} className={classes}>
        {children}
        {icon && <Icon name={icon} size={iconSize} />}
      </Link>
    );
  }

  return (
    <button type={type} id={id} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </button>
  );
}