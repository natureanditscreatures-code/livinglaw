import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/PageHero';

export function LegalPage({ title, intro, children }) {
  return (
    <>
      <PageHero eyebrow="Website Information" title={title} intro={intro} />
      <Section className="!pt-4">
        <div className="prose-living mx-auto max-w-3xl">{children}</div>
      </Section>
    </>
  );
}
