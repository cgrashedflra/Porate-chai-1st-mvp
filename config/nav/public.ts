import ROUTES from "@/constants/routes";
import type { NavItem } from "./types";

/**
 * Public (guest) Navbar config — the single home for the public navbar.
 *
 * Every `href` comes from the canonical `ROUTES` map (single source of URL
 * truth). There are deliberately NO auth-scoped mobile links here: personal
 * routes (`Messages`, `Saved`, `Profile`, `Settings`) live in the role nav
 * configs (`config/nav/student.ts`, `config/nav/educator.ts`, …) because they
 * only exist for signed-in users and are role-scoped. The public nav handles
 * guests (auth CTA + public pages); signed-in menus come from the role nav.
 */
export const PublicNav = {
    auth: {
        login: ROUTES.AUTH.SIGN_IN,
        signup: ROUTES.AUTH.SIGN_UP,
    },

    items: [
        { label: "Home", href: ROUTES.HOME, icon: "home", exact: true },
        { label: "Marketplace", href: ROUTES.MARKETPLACE, icon: "layers" },
        { label: "How It Works", href: ROUTES.HOW_IT_WORKS_SECTION, icon: "fileText" },
        { label: "About", href: ROUTES.ABOUT, icon: "info" },
    ] satisfies readonly NavItem[],

    promo: {
        title: "Better Learning, Bigger Dreams",
        body: "Find the right educator for your bright future.",
        cta: { label: "Browse the marketplace", href: ROUTES.MARKETPLACE },
    },
} as const;
