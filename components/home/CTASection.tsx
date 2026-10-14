import ROUTES from "@/constants/routes";
import { CallToAction, type CtaAction } from "@/components/ui/CallToAction";

const actions: CtaAction[] = [
    {
        label: "Find an educator",
        href: ROUTES.MARKETPLACE,
        variant: "secondary",
        size: "lg",
        icon: "arrowRight",
        className: "shadow-pc-lg",
    },
    {
        label: "Become a tutor",
        href: ROUTES.AUTH.SIGN_UP,
        variant: "ghost",
        size: "lg",
        icon: "graduation",
    },
];

export default function CTASection() {
    return (
        <CallToAction
            id="cta"
            className="py-24 sm:py-32"
            eyebrow={
                <>
                    <span className="font-bengali text-white">পড়াতে চাই?</span>
                    Want to learn?
                </>
            }
            title={
                <>
                    Find a tutor you can <span className="text-gradient-warm">actually trust</span>.
                </>
            }
            description={
                <>
                    Whether you are a student chasing your next grade or a tutor building a
                    reputation — your first session is one click away. No credit card needed to
                    browse.
                </>
            }
            actions={actions}
        />
    );
}
