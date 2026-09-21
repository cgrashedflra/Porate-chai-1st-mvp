import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

const variants = {
  primary: "bg-indigo-500 text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-600",
  secondary: "border border-indigo-300 bg-white text-indigo-600 hover:bg-indigo-50",
};

type Props = {
  href: string;
  variant?: keyof typeof variants;
  icon?: IconName;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant = "primary", icon, size = "md", className, children }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
        size === "md" ? "px-5 py-2.5 text-sm" : "px-3.5 py-1.5 text-xs",
        variants[variant],
        className
      )}
    >
      {children}
      {icon && <Icon name={icon} size={size === "md" ? 16 : 14} />}
    </Link>
  );
}
