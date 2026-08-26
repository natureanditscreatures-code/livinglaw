import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { pillars } from '@/data/pillars';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Pillars() {
  return (
    <>
      <PageHero
        eyebrow="The Six Pillars"
        title="Protocols of Natural Health"
        intro="Each pillar reveals a piece of the forgotten blueprint: the science of how the body was designed to work, how modern life broke it, and the practical path back to alignment."
      />

      <Section className="!pt-4">
        <div className="space-y-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={reveal}
              transition={{ duration: 0.5 }}
            >
              <Card hover className="overflow-hidden">
                <div className="grid md:grid-cols-12">
                  {/* visual / icon side */}
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-[var(--color-forest-700)] to-[var(--color-forest-900)] p-10 text-[var(--color-paper-100)] md:col-span-4">
                    <span className="font-display text-7xl font-800 opacity-20">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="absolute grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <Icon name={p.icon} size={28} />
                    </span>
                  </div>
                  {/* content */}
                  <CardBody className="md:col-span-8">
                    <h2 className="text-2xl md:text-3xl">{p.name}</h2>
                    <p className="mt-1 text-[var(--color-earth-500)] font-500">
                      {p.tagline}
                    </p>
                    <p className="mt-4 leading-relaxed text-[var(--fg-muted)]">
                      {p.summary}
                    </p>
                    <blockquote className="mt-5 flex gap-3 border-l-2 border-[var(--primary)] pl-4 text-sm italic text-[var(--fg-muted)]">
                      <Quote size={16} className="mt-1 shrink-0 text-[var(--primary)]" />
                      <span>
                        {p.quote.text}
                        <span className="mt-1 block not-italic text-xs text-[var(--fg-muted)]/80">
                          — Ch. {p.quote.chapter}, p. {p.quote.page}
                        </span>
                      </span>
                    </blockquote>
                    <a
                      href={`/pillars/${p.slug}`}
                      className="btn btn-primary mt-6"
                    >
                      Reveal the Science <ArrowRight size={16} />
                    </a>
                  </CardBody>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
