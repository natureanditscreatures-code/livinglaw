import { Link } from 'react-router-dom';
import { Sprout, Mail } from 'lucide-react';
import { legalNav, nav, site } from '@/config';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-muted)]/40">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        {/* Brand + newsletter */}
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--primary)] font-display text-lg font-800 text-[var(--primary-fg)]">
              L
            </span>
            <span className="font-display text-xl font-700">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--fg-muted)]">
            {site.description}
          </p>
          <div className="mt-6">
            <p className="eyebrow mb-3">Reclaim Your Health</p>
            <NewsletterForm compact />
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <p className="mb-4 font-display text-sm font-700 uppercase tracking-widest">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[var(--fg-muted)] transition hover:text-[var(--primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="mb-4 font-display text-sm font-700 uppercase tracking-widest">
            Connect
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-[var(--fg-muted)]">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>
                Appointments:{' '}
                <a
                  className="hover:text-[var(--primary)]"
                  href="mailto:appointments@thelivinglaw.in"
                >
                  appointments@thelivinglaw.in
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[var(--fg-muted)]">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>
                Products:{' '}
                <a
                  className="hover:text-[var(--primary)]"
                  href="mailto:enquiry@thelivinglaw.in"
                >
                  enquiry@thelivinglaw.in
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[var(--fg-muted)]">
              <Sprout size={16} className="mt-0.5 shrink-0" />
              <span>
                Movement:{' '}
                <a
                  className="hover:text-[var(--primary)]"
                  href="mailto:joinus@thelivinglaw.in"
                >
                  joinus@thelivinglaw.in
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--fg-muted)] md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start">
            <p>© {year} {site.name}. Based on the work of {site.author.name}.</p>
            {legalNav.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-[var(--primary)]">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="italic">
            Educational content. Not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
