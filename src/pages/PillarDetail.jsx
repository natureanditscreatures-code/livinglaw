import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Quote, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookTile } from '@/components/BookTile';
import { Icon } from '@/components/Icon';
import { getPillar, pillars } from '@/data/pillars';

export default function PillarDetail() {
  const { slug } = useParams();
  const pillar = getPillar(slug);
  if (!pillar) return <Navigate to="/pillars" replace />;

  const related = pillars.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Section className="!pb-10 pt-28 md:!pb-14 md:pt-36" tone="gradient">
        <div className="max-w-3xl">
          <Link
            to="/pillars"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] transition hover:text-[var(--primary)]"
          >
            <ArrowLeft size={15} /> All Pillars
          </Link>
          <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--bg-muted)] text-[var(--primary)]">
            <Icon name={pillar.icon} size={26} />
          </span>
          <h1 className="text-4xl leading-tight md:text-6xl">{pillar.name}</h1>
          <p className="mt-3 text-lg text-[var(--color-earth-500)] font-500">
            {pillar.tagline}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--fg-muted)]">
            {pillar.summary}
          </p>
        </div>
      </Section>

      {/* Deep content */}
      <Section className="!pt-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Block title="The Science" items={pillar.science} accent />
            <Block title="The Dysfunction" items={pillar.dysfunction} />
            <Block
              title="The Reclaim"
              items={pillar.reclaim}
              icon={CheckCircle2}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card>
              <CardBody>
                <p className="eyebrow mb-3">From the Book</p>
                <Quote className="mb-2 text-[var(--primary)]" size={22} />
                <blockquote className="font-display text-lg italic leading-snug">
                  {pillar.quote.text}
                </blockquote>
                <p className="mt-3 text-xs text-[var(--fg-muted)]">
                  The Will to Know · Ch. {pillar.quote.chapter}, p.{' '}
                  {pillar.quote.page}
                </p>
              </CardBody>
            </Card>
            <BookTile variant="compact" />
            <Card className="bg-gradient-to-br from-[var(--color-forest-700)] to-[var(--color-forest-900)] text-[var(--color-paper-100)]">
              <CardBody>
                <h3 className="text-xl text-[var(--color-paper-100)]">
                  Work with this pillar
                </h3>
                <p className="mt-2 text-sm text-[var(--color-forest-100)]/85">
                  Book a consultation to apply {pillar.name} to your life.
                </p>
                <Button
                  as="link"
                  to="/consultations"
                  className="mt-4 w-full !bg-white !text-[var(--color-forest-800)] hover:!brightness-95"
                >
                  Book Consultation <ArrowRight size={16} />
                </Button>
              </CardBody>
            </Card>
          </aside>
        </div>
      </Section>

      {/* Related */}
      <Section tone="muted" className="!pt-10">
        <h2 className="mb-8 text-2xl md:text-3xl">Explore another pillar</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} to={`/pillars/${p.slug}`}>
              <Card hover className="h-full">
                <CardBody>
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--bg-muted)] text-[var(--primary)]">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">
                    {p.tagline}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function Block({ title, items, accent = false, icon: IconCmp }) {
  return (
    <div className="mb-12">
      <h2
        className={
          accent
            ? 'text-2xl md:text-3xl text-[var(--primary)]'
            : 'text-2xl md:text-3xl'
        }
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4">
        {items.map((text, i) => (
          <div key={i} className="flex gap-3">
            {IconCmp ? (
              <IconCmp size={18} className="mt-1 shrink-0 text-[var(--primary)]" />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-earth-500)]" />
            )}
            <p className="leading-relaxed text-[var(--fg)]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
