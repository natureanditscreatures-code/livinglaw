import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { PageHero } from '@/components/PageHero';
import { articles } from '@/data/articles';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Articles() {
  return (
    <>
      <PageHero
        eyebrow="Deep Research Series"
        title="The Science of Reclaiming Health"
        intro="Evidence-based research drawn from the themes of The Will to Know—natural health, biology, and the architecture of human vitality."
      />

      <Section className="!pt-4">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((a, i) => (
            <motion.div
              key={a.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Link to={`/articles/${a.slug}`} className="group block h-full">
                <Card hover className="h-full overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardBody>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--fg-muted)]">
                      <span className="font-600 uppercase tracking-wider text-[var(--primary)]">
                        {a.series}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} /> {a.readTime}
                      </span>
                      <span>·</span>
                      <span>
                        {new Date(a.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl transition group-hover:text-[var(--primary)]">
                      {a.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[var(--fg-muted)]">
                      {a.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-[var(--primary)] transition group-hover:gap-2.5">
                      Read research <ArrowRight size={14} />
                    </span>
                  </CardBody>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
