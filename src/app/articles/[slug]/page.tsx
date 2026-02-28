import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { ArticleContent } from "@/components/ArticleContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-aged-white dark:bg-dark-bg">
      {/* Article Header */}
      <section className="bg-forest dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Link
            href="/articles"
            className="text-xs font-medium uppercase tracking-wider text-cream/60 transition-colors hover:text-cream dark:text-dark-text-muted dark:hover:text-dark-text"
          >
            &larr; All Articles
          </Link>
          <h1 className="mt-4 font-serif text-3xl font-bold text-cream md:text-4xl lg:text-5xl dark:text-dark-text">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-cream/60 dark:text-dark-text-muted">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {article.category && (
              <>
                <span>&middot;</span>
                <span className="uppercase tracking-wider">
                  {article.category}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <ArticleContent content={article.content} />

        {/* Back link */}
        <div className="mt-12 border-t border-dark-border pt-8 dark:border-dark-border-dark">
          <Link
            href="/articles"
            className="text-xs font-medium uppercase tracking-wider text-gold transition-colors hover:text-forest dark:text-dark-gold dark:hover:text-dark-text"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
