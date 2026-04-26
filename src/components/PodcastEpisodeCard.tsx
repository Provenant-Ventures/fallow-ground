export interface PodcastEpisode {
  number: number;
  title: string;
  description: string;
  date: string;
  duration: string;
}

export function PodcastEpisodeCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <article className="border-b border-dark-border pb-6 dark:border-dark-border-dark">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest text-sm font-medium text-cream dark:bg-dark-forest">
          {episode.number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 text-xs text-dark-muted dark:text-dark-text-muted">
            <time dateTime={episode.date}>
              {new Date(episode.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-dark-border dark:text-dark-border-dark">
              &middot;
            </span>
            <span>{episode.duration}</span>
          </div>
          <h3 className="mt-1 font-serif text-xl font-semibold text-forest dark:text-dark-gold">
            {episode.title}
          </h3>
          <p className="mt-2 text-sm text-muted-body">
            {episode.description}
          </p>
          <button
            type="button"
            className="link-cta mt-3 inline-flex items-center gap-2 rounded-md"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Listen
          </button>
        </div>
      </div>
    </article>
  );
}
