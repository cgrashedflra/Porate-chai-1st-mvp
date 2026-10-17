import ROUTES from "@/constants/routes";
import { cn } from "@/lib/cn";
import { CallToAction, type CtaAction } from "@/components/ui/CallToAction";

interface CTASectionProps {
    /** Public id of the educator being viewed — used for the message deep link. */
    educatorId: string;
    className?: string;
}

/**
 * Profile call-to-action. Rendered for every educator profile, so the copy is
 * fixed; only the message link varies, and it carries the educator id.
 */
export function CTASection({ educatorId, className }: CTASectionProps) {
    const actions: CtaAction[] = [
        {
            label: "Send a Message",
            href: `${ROUTES.STUDENT.MESSAGES}?chat=${encodeURIComponent(educatorId)}`,
            variant: "ghost",
            size: "md",
            icon: "message",
        },
        {
            label: "Book Class",
            href: ROUTES.STUDENT.MY_CLASSES,
            variant: "secondary",
            size: "md",
            icon: "calendar",
        },
    ];

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
            description="Send a message or book a class with this educator"
            actions={actions}
        />
    );
}
