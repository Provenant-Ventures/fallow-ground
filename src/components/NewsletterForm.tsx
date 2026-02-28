"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up to email service later
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-forest/20 bg-forest/5 px-6 py-8 text-center dark:border-dark-forest/30 dark:bg-dark-forest/10">
        <p className="font-serif text-lg text-forest dark:text-dark-gold">
          Thank you for subscribing.
        </p>
        <p className="mt-2 text-sm text-dark-muted dark:text-dark-text-muted">
          Grace and peace to you — we&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 rounded-lg border border-dark-border bg-white px-4 py-3 text-sm text-dark placeholder:text-dark-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest dark:border-dark-border-dark dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-text-muted/60 dark:focus:border-dark-gold dark:focus:ring-dark-gold"
      />
      <button
        type="submit"
        className="rounded-lg bg-forest px-6 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-forest-light dark:bg-dark-forest dark:text-dark-text dark:hover:bg-dark-gold"
      >
        Subscribe
      </button>
    </form>
  );
}
