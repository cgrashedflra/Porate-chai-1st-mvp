import type { ReactNode } from 'react';

type MockupFrameProps = {
    children: ReactNode;
    className?: string;
};

export function MockupFrame({ children, className = '' }: MockupFrameProps) {
    return (
        <div className={`bg-neutral-0 rounded-2xl p-3 shadow-md border border-neutral-30 w-full max-w-50 ${className}`}>
            {children}
        </div>
    );
}