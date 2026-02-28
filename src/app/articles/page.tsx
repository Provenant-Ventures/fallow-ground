import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Theological essays, exegetical studies, and reflections on discipleship from Fallow Ground.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="bg-aged-white dark:bg-dark-bg">
      {/* Page Header */}
      <section className="bg-forest dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="font-serif text-4xl font-bold text-cream md:text-5xl dark:text-dark-text">
            Articles
          </h1>
          <p className="mt-3 text-cream/70 dark:text-dark-text-muted">
            Exegesis, systematic theology, and reflections on the life of
            discipleship.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <p className="text-center text-dark-muted dark:text-dark-text-muted">
            Articles are coming soon. Check back shortly.
          </p>
        )}
      </div>
    </div>
  );
}
