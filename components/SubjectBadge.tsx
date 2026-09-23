import { cn } from "@/lib/cn";
import { BadgeSize, BadgeVariant, BADGE_SIZES, BADGE_VARIANTS } from "@/constants/badge";

export interface SubjectBadgeProps {
    label: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
    onClick?: () => void;
    className?: string;
}

const baseClass =
    'inline-flex items-center gap-1 rounded-full font-medium transition-colors duration-200';

/**
 * Reusable subject chip. Renders a <button> when `onClick` is provided,
 * otherwise a static <span> (safe to use inside Server Components).
 */
export const SubjectBadge = ({
    label,
    variant = 'blue',
    size = 'md',
    onClick,
    className,
}: SubjectBadgeProps) => {
    const classes = cn(baseClass, BADGE_SIZES[size], BADGE_VARIANTS[variant], className);

    if (onClick) {
        return (
            <button type="button" onClick={onClick} className={cn(classes, 'cursor-pointer')}>
                {label}
            </button>
        );
    }

    return <span className={classes}>{label}</span>;
};