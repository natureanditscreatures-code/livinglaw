import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center pt-28 text-center md:pt-36">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-7xl font-800 text-[var(--primary)]">
          404
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl">This page drifted away</h1>
        <p className="mt-4 text-[var(--fg-muted)]">
          The path you were looking for isn't here. But the blueprint is. Let's
          get you back to it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button as="link" to="/">
            Return Home
          </Button>
          <Button as="link" to="/pillars" variant="outline">
            Explore the Pillars
          </Button>
        </div>
      </div>
    </Section>
  );
}
