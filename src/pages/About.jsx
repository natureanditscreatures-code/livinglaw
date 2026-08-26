import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/PageHero';
import { BookTile } from '@/components/BookTile';
import { site } from '@/config';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="The Mission"
        title="The Will to Know"
        intro="To restore humanity's understanding of the body's natural intelligence—and to return the power of health to the individual."
      />

      {/* Story */}
      <Section className="!pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80"
                alt={site.author.name}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          <div className="prose-living">
            <p className="eyebrow mb-3">{site.author.name} — {site.author.role}</p>
            <h2 className="text-3xl md:text-4xl">
              A mirror, not a manual.
            </h2>
            <p className="mt-2">
              This work began with a question that haunts anyone who has ever
              wondered how we got here. The most successful species in Earth's
              history—the creature that survived ice ages, predators, famines,
              and plagues—became disconnected, depleted, and despairing. The
              answer is not simple. But it is waiting.
            </p>
            <p>
              The book is not written to alarm or reject progress. It is a
              mirror—a chance to look at life from a distance and notice the
              patterns we rarely see. One idea runs through every page: life is
              shaped by small, repeated actions. Not by one big decision, but by
              the daily patterns of how we eat, move, sleep, and think.
            </p>
            <p>
              The platform exists to make that knowledge accessible—through
              research, protocols, and the quiet, practical return to the rhythms
              that built human health.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="link" to="/consultations">
                Book a Consultation <ArrowRight size={16} />
              </Button>
              <Button as="link" to="/articles" variant="outline">
                Read the Research
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What We Believe"
          title="The principles of natural biological alignment"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'The body was never meant to fail',
              d: 'Chronic disease, fatigue, and dependence are not destiny. They are the result of mismatched signals—signals that can be changed.',
            },
            {
              t: 'Nature, not the lab',
              d: 'The finest science confirms what the body always knew: real food, real light, real rest, real connection. Reclaimable in the lap of nature.',
            },
            {
              t: 'Knowledge is the medicine',
              d: 'The Doctor Within awakens under the right conditions. Our role is not to heal, but to create the conditions in which healing does itself.',
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card hover className="h-full">
                <CardBody>
                  <h3 className="text-lg">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {p.d}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quote band + book tile */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-[var(--color-forest-900)] p-8 text-[var(--color-paper-100)] md:p-12">
            <Quote className="mb-4 text-[var(--color-forest-300)]" size={32} />
            <p className="font-display text-2xl leading-relaxed md:text-3xl">
              “Once you begin to understand, the will to know begins to awaken—
              and that is where the journey truly begins.”
            </p>
            <p className="mt-5 text-sm uppercase tracking-widest text-[var(--color-forest-200)]/80">
              The Will to Know — Introduction
            </p>
          </div>
          <BookTile />
        </div>
      </Section>
    </>
  );
}
