import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-aged-white dark:border-dark-border-dark dark:bg-dark-bg">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-forest dark:text-dark-gold">
              Fallow Ground
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-dark-muted dark:text-dark-text-muted">
              &ldquo;Sow for yourselves righteousness; reap in mercy; break up
              your fallow ground, for it is time to seek the Lord.&rdquo;
            </p>
            <p className="mt-1 text-sm text-dark-muted dark:text-dark-text-muted">
              &mdash; Hosea 10:12
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-forest dark:text-dark-gold">
              Navigate
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-dark-muted transition-colors hover:text-forest dark:text-dark-text-muted dark:hover:text-dark-gold"
              >
                About
              </Link>
              <Link
                href="/articles"
                className="text-sm text-dark-muted transition-colors hover:text-forest dark:text-dark-text-muted dark:hover:text-dark-gold"
              >
                Articles
              </Link>
              <Link
                href="/podcast"
                className="text-sm text-dark-muted transition-colors hover:text-forest dark:text-dark-text-muted dark:hover:text-dark-gold"
              >
                Podcast
              </Link>
              <Link
                href="/newsletter"
                className="text-sm text-dark-muted transition-colors hover:text-forest dark:text-dark-text-muted dark:hover:text-dark-gold"
              >
                Newsletter
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-forest dark:text-dark-gold">
              Connect
            </h4>
            <p className="mt-3 text-sm text-dark-muted dark:text-dark-text-muted">
              For inquiries, reach out via the newsletter page or connect on
              social media.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-dark-border pt-6 dark:border-dark-border-dark">
          <p className="text-center text-xs text-dark-muted dark:text-dark-text-muted">
            &copy; {new Date().getFullYear()} Fallow Ground. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
