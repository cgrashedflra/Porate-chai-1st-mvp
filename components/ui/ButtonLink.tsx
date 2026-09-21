import { Button } from "./Button";
import type { IconName } from "./Icon";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  icon?: IconName;
  className?: string;
  children: React.ReactNode;
};

/** Navigation-only button. Owns link semantics; delegates all styling to <Button>. */
export function ButtonLink({ href, variant = "primary", size = "md", icon, className, children }: Props) {
  return (
    <Button href={href} variant={variant} size={size} icon={icon} className={className}>
      {children}
    </Button>
  );
}