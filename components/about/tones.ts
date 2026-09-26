import type { AboutTone } from "@/data/about/types";

/**
 * Per-tone Tailwind classes shared by the about sections, so a card's icon,
 * surface tint and hover glow always come from the same brand colour family.
 */
export const ABOUT_TONE_STYLES: Record<
  AboutTone,
  { card: string; glow: string; icon: string }
> = {
  primary: {
    card: "gradient-tint-primary",
    glow: "shadow-md shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20",
    icon: "bg-primary-100 text-primary-600",
  },
  green: {
    card: "gradient-tint-green",
    glow: "shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/20",
    icon: "bg-green-100 text-green-600",
  },
  "deep-blue": {
    card: "gradient-tint-deep-blue",
    glow: "shadow-md shadow-deep-blue-500/10 hover:shadow-lg hover:shadow-deep-blue-500/20",
    icon: "bg-deep-blue-100 text-deep-blue-600",
  },
  orange: {
    card: "gradient-tint-orange",
    glow: "shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20",
    icon: "bg-orange-100 text-orange-600",
  },
};
