import React from 'react';

export type BadgeVariant = 'blue' | 'purple' | 'green' | 'orange';

export interface SubjectBadgeProps {
    label: string;
    variant?: BadgeVariant;
    onClick?: () => void;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    blue: 'bg-blue-50/80 text-blue-600 hover:bg-blue-100',
    purple: 'bg-purple-50/80 text-purple-600 hover:bg-purple-100',
    green: 'bg-emerald-50/80 text-emerald-600 hover:bg-emerald-100',
    orange: 'bg-amber-50/80 text-amber-600 hover:bg-amber-100',
};

export const SubjectBadge: React.FC<SubjectBadgeProps> = ({
    label,
    variant = 'blue',
    onClick,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${variantStyles[variant]} ${className}`}
        >
            {label}
        </button>
    );
};