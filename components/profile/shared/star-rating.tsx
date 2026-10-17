import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

const sizes = {
    sm: "size-3.5",
    md: "size-4",
    lg: "size-5",
} as const;

interface StarRatingProps {
    rating: number;
    size?: keyof typeof sizes;
    className?: string;
}

/** Five-star row — filled stars follow the given rating. */
export function StarRating({ rating, size = "sm", className }: StarRatingProps) {
    const filled = Math.round(rating);

    return (
        <span
            className={cn("flex items-center gap-0.5", className)}
            aria-label={`${rating.toFixed(1)} out of 5 stars`}
        >
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    aria-hidden
                    className={cn(
                        sizes[size],
                        i < filled ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200",
                    )}
                />
            ))}
        </span>
    );
}
