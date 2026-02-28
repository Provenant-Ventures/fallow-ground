import type { Metadata } from "next";
import {
  PodcastEpisodeCard,
  type PodcastEpisode,
} from "@/components/PodcastEpisodeCard";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The Fallow Ground podcast — conversations on theology, discipleship, and the quiet hour.",
};

const episodes: PodcastEpisode[] = [
  {
    number: 3,
    title: "The Means of Grace: Word, Prayer, and Fellowship",
    description:
      "What are the ordinary means by which God sustains and grows His people? In this episode, we explore the Reformed understanding of the means of grace — the preached Word, the sacraments, and prayer — and why neglecting them leads to spiritual drought.",
    date: "2025-03-01",
    duration: "42 min",
  },
  {
    number: 2,
    title: "Why Theology Matters for the Pew",
    description:
      "Theology is not an academic luxury — it is the foundation of the Christian life. We discuss why every believer is a theologian, how doctrinal ignorance leads to experiential poverty, and how to cultivate a love for truth in the local church.",
    date: "2025-02-15",
    duration: "38 min",
  },
  {
    number: 1,
    title: "Breaking Up Fallow Ground: An Introduction",
    description:
      "In this inaugural episode, Emmett introduces the vision behind Fallow Ground — a call to deep discipleship, the recovery of the quiet hour, and a counter-cultural commitment to knowing God through His Word. What does it mean to break up fallow ground, and why is it urgent?",
    date: "2025-01-30",
    duration: "35 min",
  },
];

export default function PodcastPage() {
  return (
    <div className="bg-aged-white dark:bg-dark-bg">
      {/* Page Header */}
      <section className="bg-forest dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="font-serif text-4xl font-bold text-cream md:text-5xl dark:text-dark-text">
            Podcast
          </h1>
          <p className="mt-3 text-cream/70 dark:text-dark-text-muted">
            Conversations on theology, discipleship, and the quiet hour.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {/* Subscribe Banner */}
        <div className="mb-12 rounded-lg border border-dark-border bg-cream px-6 py-6 dark:border-dark-border-dark dark:bg-dark-surface">
          <p className="text-sm leading-relaxed text-dark-muted dark:text-dark-text-muted">
            The Fallow Ground podcast is coming to all major platforms. Subscribe
            to the newsletter to be notified when new episodes are available on
            Apple Podcasts, Spotify, and wherever you listen.
          </p>
        </div>

        {/* Episodes */}
        <div className="flex flex-col gap-8">
          {episodes.map((episode) => (
            <PodcastEpisodeCard key={episode.number} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
}
