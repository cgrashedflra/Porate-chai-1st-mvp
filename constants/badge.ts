// ============================================================
// BADGE TOKENS — single source of truth for badge variants & sizes
// Consumed by components/SubjectBadge.tsx and data/home/types.ts
// ============================================================

export type BadgeVariant = 'blue' | 'purple' | 'green' | 'orange';

export type BadgeSize = 'sm' | 'md' | 'lg';

/** Background / text / hover styling per variant (all @theme tokens) */
export const BADGE_VARIANTS: Record<BadgeVariant, string> = {
    blue: 'bg-primary-50/80 text-primary-500 hover:bg-primary-100',
    purple: 'bg-deep-blue-50/80 text-deep-blue-600 hover:bg-deep-blue-100',
    green: 'bg-green-50/80 text-green-600 hover:bg-green-100',
    orange: 'bg-orange-50/80 text-orange-600 hover:bg-orange-100',
};

/** Padding / typography per size */
export const BADGE_SIZES: Record<BadgeSize, string> = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-6 py-3 text-sm',
};