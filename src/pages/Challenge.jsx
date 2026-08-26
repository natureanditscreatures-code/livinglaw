import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { PageHero } from '@/components/PageHero';
import { BookTile } from '@/components/BookTile';
import { ChallengeForm } from '@/components/forms/ChallengeForm';
import { challenge } from '@/data/challenge';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Challenge() {
  return (
    <>
      <PageHero
        eyebrow="The 30-Day Turning Point"
        title={challenge.title}
        intro={challenge.intro}
      />

      {/* Weeks */}
      <Section className="!pt-4">
        <div className="grid gap-6 md:grid-cols-2">
          {challenge.weeks.map((w, i) => (
            <motion.div
              key={w.week}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Card hover className="h-full">
                <CardBody>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-800 text-[var(--primary)]">
                      {String(w.week).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--fg-muted)]">
                        Week {w.week}
                      </p>
                      <h3 className="text-xl">{w.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 italic text-[var(--color-earth-500)]">
                    {w.theme}
                  </p>
                  <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
                    {w.summary}
                  </p>
                  <div className="mt-5 space-y-2">
                    {w.practices.map((p, j) => (
                      <div
                        key={j}
                        className="flex gap-2 text-sm text-[var(--fg)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        {p}
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-gradient-to-br from-[var(--color-forest-700)] to-[var(--color-forest-900)] p-8 text-center text-[var(--color-paper-100)] md:p-12">
          <p className="font-display text-xl leading-relaxed md:text-2xl md:leading-relaxed">
            {challenge.closing}
          </p>
        </div>
      </Section>

      {/* Signup */}
      <Section tone="muted" className="!pt-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Sparkles className="mb-4 text-[var(--color-earth-500)]" />
            <h2 className="text-3xl md:text-4xl">
              Receive the daily rhythm series
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--fg-muted)]">
              Sign up and we'll guide you through each day of the Turning Point—
              one practice, one signal, one small reclamation at a time.
            </p>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardBody>
                <ChallengeForm />
              </CardBody>
            </Card>
            <BookTile variant="compact" />
          </div>
        </div>
      </Section>
    </>
  );
}
