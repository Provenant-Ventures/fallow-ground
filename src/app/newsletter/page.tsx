import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the Fallow Ground Ministries newsletter for theological essays, exegetical studies, and podcast updates.",
};

export default function NewsletterPage() {
  return (
    <div className="bg-aged-white dark:bg-dark-bg">
      {/* Page Header */}
      <section className="bg-forest dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="font-serif text-4xl font-bold text-cream md:text-5xl dark:text-dark-text">
            Newsletter
          </h1>
          <p className="text-hero-lede">
            Receive new articles and podcast episodes directly in your inbox.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
        <div className="rounded-lg border border-dark-border bg-cream px-8 py-10 dark:border-dark-border-dark dark:bg-dark-surface">
          <h2 className="font-serif text-xl font-semibold text-forest dark:text-dark-gold">
            Stay Connected
          </h2>
          <p className="mt-3 text-sm text-muted-body">
            The Fallow Ground newsletter delivers thoughtful theological content
            to your inbox — exegetical essays, systematic theology reflections,
            podcast announcements, and recommended reading. No spam, no fluff.
            Just the deep things of God.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>

        {/* Additional context */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-body">
            Have a question or want to reach out directly?
          </p>
          <p className="mt-1 text-sm text-muted-body">
            Email:{" "}
            <span className="font-medium text-forest dark:text-dark-gold">
              hello@fallowground.org
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
