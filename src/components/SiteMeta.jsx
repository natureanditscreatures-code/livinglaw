import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '@/config';

const metadata = {
  '/': ['The Living Law | Evidence-Informed Human Health', 'Evidence-informed health education, biological rhythms, and practical lifestyle guidance.'],
  '/pillars': ['The Six Pillars | The Living Law', 'Explore six foundations of biological rhythm and practical human health.'],
  '/articles': ['Research & Articles | The Living Law', 'Read evidence-informed articles about human biology, health, and daily living.'],
  '/consultations': ['Lifestyle Consultations | The Living Law', 'Learn about educational lifestyle consultations from The Living Law.'],
  '/products': ['Products & Resources | The Living Law', 'Explore educational resources and carefully selected health-supporting products.'],
  '/challenge': ['30-Day Healthy Rhythm Challenge | The Living Law', 'Build practical daily rhythms through a guided 30-day educational challenge.'],
  '/about': ['About The Living Law', 'Learn about The Living Law, its mission, and the work of Ajit.'],
  '/privacy': ['Privacy Policy | The Living Law', 'How The Living Law handles website and enquiry information.'],
  '/terms': ['Terms of Use | The Living Law', 'Terms governing use of the Living Law website and educational content.'],
  '/medical-disclaimer': ['Medical Disclaimer | The Living Law', 'Important limitations of The Living Law educational health content.'],
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export function SiteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const basePath = pathname.startsWith('/pillars/')
      ? '/pillars'
      : pathname.startsWith('/articles/')
        ? '/articles'
        : pathname;
    const [title, description] = metadata[basePath] || ['Page Not Found | The Living Law', 'The requested page could not be found.'];
    const canonicalUrl = `${site.url}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
