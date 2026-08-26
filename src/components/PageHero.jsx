import { Section } from '@/components/ui/Section';

// Compact hero for interior pages.
export function PageHero({ eyebrow, title, intro }) {
  return (
    <Section className="!pb-10 pt-28 md:!pb-14 md:pt-36" tone="gradient">
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="text-4xl leading-tight md:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-5 text-lg leading-relaxed text-[var(--fg-muted)]">
            {intro}
          </p>
        )}
      </div>
    </Section>
  );
}
