import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { products } from '@/data/products';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Products() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Premium Health Kits"
        title="The Knowledge Is the Core"
        intro="Every kit is paired with a research booklet—scientifically grounded, vintage-elegant, and modern. The premium look serves the premium health principles that shape your life."
      />

      <Section className="!pt-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={reveal}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Card hover className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <h3 className="text-2xl drop-shadow">{p.name}</h3>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-600 uppercase tracking-wider backdrop-blur">
                      {p.price}
                    </span>
                  </div>
                </div>
                <CardBody>
                  <p className="text-sm font-500 text-[var(--color-earth-500)]">
                    {p.tagline}
                  </p>
                  <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
                    {p.summary}
                  </p>

                  {/* Research booklet */}
                  <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/40 p-4">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-[var(--primary)]" />
                      <p className="text-sm font-700">
                        {p.booklet.title}
                      </p>
                    </div>
                    <p className="mt-1 text-xs text-[var(--fg-muted)]">
                      {p.booklet.pages}-page research booklet
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {p.booklet.excerpt}
                    </p>
                  </div>

                  {/* Uses */}
                  <ul className="mt-5 space-y-1.5">
                    {p.uses.map((u, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-1 shrink-0 text-[var(--primary)]"
                        />
                        {u}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.principles.map((pr) => (
                      <span
                        key={pr}
                        className="rounded-full bg-[var(--bg-muted)] px-2.5 py-1 text-[11px] font-500 text-[var(--fg-muted)]"
                      >
                        {pr}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelected(p.name)}
                    className="btn btn-primary mt-6 w-full"
                  >
                    Enquire <ArrowRight size={16} />
                  </button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Enquiry modal (inline) */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl bg-[var(--bg-elevated)] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-1">Product Enquiry</p>
                <h3 className="text-2xl">{selected}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border)]"
              >
                ✕
              </button>
            </div>
            <div className="mt-6">
              <EnquiryForm productName={selected} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
