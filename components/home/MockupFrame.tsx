import type { ReactNode } from 'react';

type MockupFrameProps = {
    children: ReactNode;
    className?: string;
};

export function MockupFrame({ children, className = '' }: MockupFrameProps) {
    return (
        <div className={`glass-card rounded-2xl p-3 shadow-md shadow-primary-500/10 w-full max-w-50 ${className}`}>
            {children}
        </div>
    );
}