import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, Quote, BookOpen } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { BookTile } from '@/components/BookTile';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { getArticle, articles } from '@/data/articles';

// Top-of-page reading progress bar.
function ReadingProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="reading-progress no-print" style={{ width: `${w}%` }} />;
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/articles" replace />;

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <Section className="!pb-8 pt-28 md:!pb-10 md:pt-36" tone="gradient">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/articles"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] transition hover:text-[var(--primary)]"
          >
            <ArrowLeft size={15} /> All Research
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--fg-muted)]">
            <span className="font-600 uppercase tracking-wider text-[var(--primary)]">
              {article.series}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} /> {article.readTime}
            </span>
            <span>·</span>
            <span>
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--fg-muted)]">
            {article.excerpt}
          </p>
        </div>
      </Section>

      {/* Cover image */}
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
      </div>

      {/* Body + sidebar */}
      <Section className="!pt-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <article className="prose-living lg:col-span-2">
            {article.body.map((b, i) => {
              if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
              if (b.type === 'quote')
                return (
                  <blockquote key={i}>
                    <Quote
                      size={20}
                      className="mb-2 inline text-[var(--primary)]"
                    />
                    {b.text}
                    {b.cite && (
                      <cite className="mt-2 block text-sm not-italic text-[var(--fg-muted)]">
                        — {b.cite}
                      </cite>
                    )}
                  </blockquote>
                );
              return <p key={i}>{b.text}</p>;
            })}

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]/40 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-[var(--primary)]" />
                <p className="eyebrow !mb-0">Go deeper</p>
              </div>
              <p className="mt-3 leading-relaxed">
                This research is drawn from <em>The Will to Know</em>—a deeper
                exploration of the human blueprint, the forces that overwrote
                it, and the path back to natural health.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <BookTile variant="compact" />
            <Card>
              <CardBody>
                <p className="eyebrow mb-3">Reclaim Your Health</p>
                <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                  Get research updates and exclusive insights in your inbox.
                </p>
                <div className="mt-4">
                  <NewsletterForm compact />
                </div>
              </CardBody>
            </Card>
          </aside>
        </div>
      </Section>

      {/* Related */}
      <Section tone="muted" className="!pt-6">
        <h2 className="mb-8 text-2xl md:text-3xl">Continue the research</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((a) => (
            <Link key={a.slug} to={`/articles/${a.slug}`} className="group">
              <Card hover className="h-full">
                <CardBody>
                  <span className="text-xs font-600 uppercase tracking-wider text-[var(--primary)]">
                    {a.series}
                  </span>
                  <h3 className="mt-2 text-xl transition group-hover:text-[var(--primary)]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--fg-muted)]">
                    {a.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-600 text-[var(--primary)]">
                    Read <ArrowRight size={14} />
                  </span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
