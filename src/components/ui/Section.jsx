import { cn } from '@/lib/cn';

// Consistent vertical-rhythm section wrapper.
// tone: 'default' | 'muted' | 'gradient' | 'dark'
export function Section({
  id,
  className,
  tone = 'default',
  children,
  ...rest
}) {
  const tones = {
    default: 'bg-transparent',
    muted: 'bg-[var(--bg-muted)]/40',
    gradient:
      'bg-gradient-to-b from-[var(--color-forest-50)]/60 to-transparent dark:from-[var(--color-forest-800)]/40',
    dark: 'bg-[var(--color-forest-900)] text-[var(--color-paper-100)]',
  };
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', tones[tone], className)}
      {...rest}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

// Section heading block: eyebrow + title + optional intro.
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : '',
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl leading-tight">{title}</h2>
      {intro && (
        <p className="mt-5 text-lg text-[var(--fg-muted)] leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
