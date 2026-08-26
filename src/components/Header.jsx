import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/config';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all',
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md'
          : 'border-b border-transparent'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--primary)] text-[var(--primary-fg)] font-display text-lg font-800 transition group-hover:scale-105">
            L
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-700 tracking-tight">
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3.5 py-2 text-sm font-500 transition',
                  isActive
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--fg)] hover:text-[var(--primary)]'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            as="link"
            to="/consultations"
            className="hidden md:inline-flex"
          >
            Book Consultation
          </Button>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-3 text-base transition',
                    isActive
                      ? 'bg-[var(--bg-muted)] text-[var(--primary)]'
                      : 'text-[var(--fg)]'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button as="link" to="/consultations" className="mt-3 w-full">
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
