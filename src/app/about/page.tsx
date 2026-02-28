import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Emmett Yeagley and the mission of Fallow Ground — breaking up the hardened soil of neglect through biblical studies and theological reflection.",
};

export default function AboutPage() {
  return (
    <div className="bg-aged-white dark:bg-dark-bg">
      {/* Page Header */}
      <section className="bg-forest dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="font-serif text-4xl font-bold text-cream md:text-5xl dark:text-dark-text">
            About
          </h1>
          <p className="mt-3 text-cream/70 dark:text-dark-text-muted">
            The man, the mission, and the meaning behind Fallow Ground.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {/* About the Author */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-forest dark:text-dark-gold">
            Emmett Yeagley
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-dark-muted dark:text-dark-text-muted">
            <p>
              Emmett Yeagley is a student of Scripture, a lover of systematic
              theology, and a believer convinced that the church&apos;s greatest
              need is not innovation but renovation — a return to the deep wells
              of communion with God that have sustained the saints throughout the
              centuries.
            </p>
            <p>
              His theological interests span Reformed soteriology, biblical
              exegesis, the doctrine of sanctification, and the intersection of
              devotional life and doctrinal precision. He writes and teaches with
              the conviction that sound theology is not the enemy of warm piety
              but its truest friend.
            </p>
            <p>
              Emmett believes that the quiet hour — the discipline of sustained,
              unhurried time with God in prayer and the Word — is the single
              most neglected practice in the Western church and the single most
              transformative one. Fallow Ground is his effort to recover and
              commend that practice to a new generation.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-dark-border dark:border-dark-border-dark" />

        {/* Mission */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-forest dark:text-dark-gold">
            The Mission
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-dark-muted dark:text-dark-text-muted">
            <p>
              Fallow Ground is a biblical studies and theological platform
              dedicated to true discipleship, deep communion with Christ, and the
              quiet hour that empowers evangelism. We are counter-cultural to
              easy believism — the notion that saving faith requires nothing of
              the believer beyond an initial decision.
            </p>
            <p>
              We believe that genuine faith transforms. It produces hunger for
              God&apos;s Word, delight in prayer, seriousness about sin, and
              sacrificial love for neighbor. These are not additions to the
              gospel but evidences of its power.
            </p>
            <p>
              Through exegetical articles, systematic theological reflection,
              and a forthcoming podcast, Fallow Ground aims to serve the church
              by equipping believers to go deeper — deeper into Scripture, deeper
              into prayer, deeper into the knowledge of God Himself.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-dark-border dark:border-dark-border-dark" />

        {/* Meaning of Fallow Ground */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-forest dark:text-dark-gold">
            Why &ldquo;Fallow Ground&rdquo;?
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-dark-muted dark:text-dark-text-muted">
            <p>
              The name comes from the prophet Hosea&apos;s urgent appeal to
              Israel:
            </p>
            <blockquote className="border-l-3 border-gold pl-5 font-serif text-lg italic text-dark dark:border-dark-gold dark:text-dark-text">
              &ldquo;Sow for yourselves righteousness; reap in mercy; break up
              your fallow ground, for it is time to seek the Lord, till He comes
              and rains righteousness on you.&rdquo;
              <cite className="mt-2 block text-sm not-italic text-gold dark:text-dark-gold">
                &mdash; Hosea 10:12 (NKJV)
              </cite>
            </blockquote>
            <p>
              In agriculture, fallow ground is soil that was once cultivated but
              has been left unplowed. Over time it becomes hard, compacted,
              unresponsive to seed. It is not barren by nature — it is barren by
              neglect.
            </p>
            <p>
              Hosea uses this image to describe the spiritual condition of
              God&apos;s people when they have allowed their hearts to grow
              hardened through inattention to the things of God. The remedy is
              not a new seed — the Word of God is sufficient — but new soil. The
              ground must be broken up. The plow must cut through the compacted
              layers of distraction, self-sufficiency, and worldliness.
            </p>
            <p>
              This is what we mean by &ldquo;Fallow Ground.&rdquo; It is an
              invitation to the hard, holy work of spiritual renewal — to allow
              the Spirit of God to break up the neglected places in our souls so
              that the seed of His Word can take root and bear fruit. It is a
              call to the quiet hour, to the plow of prayer, to the patient work
              of seeking God until He comes and rains righteousness upon us.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
