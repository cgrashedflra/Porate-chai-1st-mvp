import ROUTES from "@/constants/routes";
import { cn } from "@/lib/cn";
import { CallToAction, type CtaAction } from "@/components/ui/CallToAction";

interface CTASectionProps {
    className?: string;
}

const actions: CtaAction[] = [
    {
        label: "Send a Message",
        href: ROUTES.STUDENT.MESSAGES,
        variant: "ghost",
        size: "md",
        icon: "message",
    },
    {
        label: "Book a Class Now",
        href: ROUTES.MARKETPLACE,
        variant: "secondary",
        size: "md",
        icon: "calendar",
    },
];

export function CTASection({ className }: CTASectionProps) {
    return (
        <CallToAction
            className={cn("rounded-2xl py-12 sm:py-16", className)}
            eyebrow={
                <>
                    <span className="font-bengali text-white">পড়াশোনা শুরু করি?</span>
                    Start learning today
                </>
            }
            title="Ready to start learning?"
            description="Send a message or book your first class with this mentor"
            actions={actions}
        />
    );
}
