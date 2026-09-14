import React from 'react';

export type BadgeVariant = 'blue' | 'purple' | 'green' | 'orange';

export interface SubjectBadgeProps {
    label: string;
    variant?: BadgeVariant;
    onClick?: () => void;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    blue: 'bg-primary-50/80 text-primary-500 hover:bg-primary-100',
    purple: 'bg-deep-blue-50/80 text-deep-blue-600 hover:bg-deep-blue-100',
    green: 'bg-green-50/80 text-green-600 hover:bg-green-100',
    orange: 'bg-orange-50/80 text-orange-600 hover:bg-orange-100',
};

export const SubjectBadge = ({
    label,
    variant = 'blue',
    onClick,
    className = '',
}: SubjectBadgeProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${variantStyles[variant]} ${className}`}
        >
            {label}
        </button>
    );
};