"use client";

import { Send } from "lucide-react";

/**
 * Newsletter signup form.
 * Kept as a client component so the footer itself can stay a server component.
 */
export function NewsletterForm() {
  return (
    <form
      className="mt-6 max-w-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        htmlFor="newsletter"
        className="text-xs font-medium text-white/70"
      >
        Get product updates (max 1 email / month)
      </label>
      <div className="mt-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 pl-4 focus-within:border-brand-primary transition-colors">
        <input
          id="newsletter"
          type="email"
          placeholder="you@example.com"
          className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none py-2"
        />
        <button
          type="submit"
          className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-deep transition-colors"
        >
          <Send className="h-3 w-3" />
          Subscribe
        </button>
      </div>
    </form>
  );
}