import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { BookingForm } from '@/components/forms/BookingForm';
import { consultations } from '@/data/consultations';
import { site } from '@/config';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Consultations() {
  const [params] = useSearchParams();
  const service = params.get('service') || '';

  return (
    <>
      <PageHero
        eyebrow="Personal Guidance"
        title={`Consult with ${site.author.name}`}
        intro="Personalized guidance based on the principles of natural biological alignment. Understand how healing happens—and your role in triggering it."
      />

      {/* Services */}
      <Section className="!pt-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {consultations.map((c, i) => {
            const active = c.slug === service;
            return (
              <motion.div
                key={c.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={reveal}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card
                  hover
                  className={
                    active
                      ? 'h-full ring-2 ring-[var(--primary)]'
                      : 'h-full'
                  }
                >
                  <CardBody className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--bg-muted)] text-[var(--primary)]">
                        <Icon name={c.icon} size={22} />
                      </span>
                      <span className="text-xs text-[var(--fg-muted)]">
                        {c.duration}
                      </span>
                    </div>
                    <h3 className="text-xl">{c.title}</h3>
                    <p className="mt-1 text-sm font-500 text-[var(--color-earth-500)]">
                      {c.tagline}
                    </p>
                    <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
                      {c.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {c.outcomes.map((o, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-[var(--fg-muted)]"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-[var(--primary)]"
                          />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`#book-${c.slug}`}
                      className="btn btn-outline mt-6 w-full"
                    >
                      Select & Book <ArrowRight size={16} />
                    </a>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Booking form */}
      <Section id="book" tone="muted" className="!pt-10">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="eyebrow mb-3">Book Your Session</p>
            <h2 className="text-3xl md:text-4xl">
              Request a consultation with {site.author.name}
            </h2>
            <p className="mt-3 text-[var(--fg-muted)]">
              Share a few details and we'll confirm a time together. Your
              request is received personally, not by a queue.
            </p>
          </div>
          <Card className="mt-10">
            <CardBody>
              <BookingForm defaultService={service} />
            </CardBody>
          </Card>
        </div>
      </Section>
    </>
  );
}
