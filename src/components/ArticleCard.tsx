import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="group">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="border-b border-dark-border pb-6 transition-colors group-hover:border-gold dark:border-dark-border-dark dark:group-hover:border-dark-gold">
          <div className="flex items-center gap-3 text-xs text-dark-muted dark:text-dark-text-muted">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.category && (
              <>
                <span className="text-dark-border dark:text-dark-border-dark">
                  &middot;
                </span>
                <span className="uppercase tracking-wider">
                  {article.category}
                </span>
              </>
            )}
          </div>
          <h3 className="mt-2 font-serif text-xl font-semibold text-forest transition-colors group-hover:text-gold dark:text-dark-gold dark:group-hover:text-dark-text">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-dark-muted dark:text-dark-text-muted">
            {article.excerpt}
          </p>
          <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-gold dark:text-dark-gold">
            Read more &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
