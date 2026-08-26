import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Share2, Pause, Play } from 'lucide-react';
import { bookFacts } from '@/data/bookFacts';
import { site } from '@/config';
import { cn } from '@/lib/cn';

// The persistent rotating "playcard" featured on every page.
// Auto-rotates every 7s; prev/next arrows + pause; cross-fade between facts.
// Each card shows a headline fact, a supporting line, and chapter/page slots.
const ROTATE_MS = 7000;

export function BookTile({ variant = 'full', className }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const total = bookFacts.length;
  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total]
  );
  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  // auto-rotate
  useEffect(() => {
    if (paused) return undefined;
    timer.current = setInterval(next, ROTATE_MS);
    return () => clearInterval(timer.current);
  }, [paused, next]);

  const fact = bookFacts[index];

  const handleShare = async () => {
    const text = `"${fact.fact}" — ${site.book.title}, Ch. ${fact.chapter}, p.${fact.page}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: site.book.title, text });
      } else {
        await navigator.clipboard.writeText(text);
      }
    } catch {
      /* user dismissed */
    }
  };

  if (variant === 'compact') {
    return <CompactTile fact={fact} className={className} />;
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_30px_60px_-30px_rgba(13,59,31,0.4)]',
        className
      )}
    >
      {/* Book-cover gradient header */}
      <div className="relative bg-gradient-to-br from-[var(--color-forest-700)] to-[var(--color-forest-900)] px-6 py-5 text-[var(--color-paper-100)]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
              <BookOpen size={18} />
            </span>
            <div>
              <p className="font-display text-lg font-700 leading-tight">
                {site.book.title}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest-100)]/80">
                {site.book.status} · A Living Excerpt
              </p>
            </div>
          </div>
          <span className="hidden shrink-0 rounded-full bg-white/10 px-3 py-1 text-[11px] font-600 uppercase tracking-wider ring-1 ring-white/15 sm:block">
            Featured Book
          </span>
        </div>
      </div>

      {/* Rotating fact body */}
      <div className="relative px-6 py-7 md:px-8 md:py-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <p className="eyebrow mb-3">Did you know</p>
            <blockquote className="font-display text-xl leading-snug text-[var(--fg)] md:text-[1.6rem]">
              {fact.fact}
            </blockquote>
            <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
              {fact.detail}
            </p>

            {/* Chapter / Page playcard slots */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-muted)]/50 px-3 py-2">
                <span className="text-[10px] font-700 uppercase tracking-widest text-[var(--fg-muted)]">
                  Chapter
                </span>
                <span className="font-display text-base font-700 text-[var(--primary)]">
                  {fact.chapter}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-muted)]/50 px-3 py-2">
                <span className="text-[10px] font-700 uppercase tracking-widest text-[var(--fg-muted)]">
                  Page
                </span>
                <span className="font-display text-base font-700 text-[var(--primary)]">
                  {fact.page}
                </span>
              </div>
              <span className="ml-auto truncate text-xs text-[var(--fg-muted)] italic">
                {fact.chapterTitle}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous fact"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next fact"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <ChevronRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Resume' : 'Pause'}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs tabular-nums text-[var(--fg-muted)]">
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share this fact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-600 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Share2 size={13} /> Share
            </button>
          </div>
        </div>

        {/* progress dots */}
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {bookFacts.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to fact ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === index
                  ? 'w-6 bg-[var(--primary)]'
                  : 'w-1.5 bg-[var(--border)] hover:bg-[var(--fg-muted)]'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Compact variant — for embedding inline (e.g. sidebars).
function CompactTile({ fact, className }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5',
        className
      )}
    >
      <p className="eyebrow mb-2">From the book</p>
      <p className="font-display text-lg leading-snug">{fact.fact}</p>
      <div className="mt-3 flex items-center gap-2 text-xs text-[var(--fg-muted)]">
        <span>Ch. {fact.chapter}</span>
        <span aria-hidden>·</span>
        <span>p. {fact.page}</span>
      </div>
    </div>
  );
}
