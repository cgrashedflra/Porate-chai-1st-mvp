import { Button } from "./Button";
import type { IconName } from "./Icon";

type Props = {
  href: string;
  id?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  className?: string;
  children: React.ReactNode;
};

/** Navigation-only button. Owns link semantics; delegates all styling to <Button>. */
export function ButtonLink({ href, id, variant = "primary", size = "md", icon, className, children }: Props) {
  return (
    <Button href={href} id={id} variant={variant} size={size} icon={icon} className={className}>
      {children}
    </Button>
  );
}