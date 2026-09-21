import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

const variants = {
  primary: "bg-indigo-500 text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-600",
  secondary: "border border-indigo-300 bg-white text-indigo-600 hover:bg-indigo-50",
  danger: "bg-red-500 text-white shadow-md shadow-red-500/25 hover:bg-red-600",
} as const;

const sizes = {
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
} as const;

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

type ButtonProps = {
  /** When set, renders a Next.js <Link> (navigation) instead of a <button>. */
  href?: string;
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

  if (href) {
    return (
      <Link href={href} aria-disabled={disabled || undefined} className={classes}>
        {children}
        {icon && <Icon name={icon} size={size === "md" ? 16 : 14} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon && <Icon name={icon} size={size === "md" ? 16 : 14} />}
    </button>
  );
}