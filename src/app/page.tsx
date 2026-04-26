import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-forest dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <h1 className="flex flex-col items-center">
            <span className="font-serif text-5xl font-bold tracking-tight text-cream md:text-6xl lg:text-7xl dark:text-dark-text">Fallow Ground</span>
            <span className="text-brand-lockup-sub tracking-[0.25em] text-gold dark:text-dark-gold">
              Ministries
            </span>
          </h1>
          <p className="mt-4 font-serif text-lg text-cream-80 md:text-xl dark:text-dark-text-muted">
            &ldquo;Break up your fallow ground, for it is time to seek the
            Lord.&rdquo;
          </p>
          <p className="mt-1 font-[family-name:var(--font-baskerville)] text-sm tracking-wider text-cream-60 text-dark-text-muted-60">
            &mdash; Hosea 10:12
          </p>
        </div>
      </section>

      {/* Featured Scripture */}
      <section className="bg-gold dark:bg-dark-gold">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <blockquote className="font-serif text-xl leading-relaxed text-dark md:text-2xl dark:text-dark-bg">
            &ldquo;My soul shall be satisfied as with marrow and fatness, and my
            mouth shall praise You with joyful lips. When I remember You on my
            bed, I meditate on You in the night watches. Because You have been
            my help, therefore in the shadow of Your wings I will rejoice. My
            soul follows close behind You; Your right hand upholds me.&rdquo;
          </blockquote>
          <cite className="text-on-gold-meta mt-6 block">
            — Psalm 63:5–8
          </cite>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-aged-white dark:bg-dark-bg">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold text-forest dark:text-dark-gold">
              Recent Articles
            </h2>
            <Link href="/articles" className="link-cta">
              View all &rarr;
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gold dark:bg-dark-gold">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="text-on-gold-heading">
            About Fallow Ground Ministries
          </h2>
          <p className="text-on-gold-body mt-4">
            Fallow Ground Ministries exists to call the church back to the deep things of
            God — to the quiet hour of prayer, the careful study of Scripture,
            and the kind of discipleship that is formed in secret before it bears
            fruit in public. In a time of shallow spirituality and easy
            believism, we seek to break up the hardened soil of neglect and
            plant seeds of genuine communion with Christ.
          </p>
          <Link href="/about" className="link-cta-on-gold mt-6 inline-block">
            Learn more &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
