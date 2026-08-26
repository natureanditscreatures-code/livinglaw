// ===========================================================================
// THE LIVING LAW — Central site configuration
// ---------------------------------------------------------------------------
// Form keys & inboxes live here (sourced from Vite env vars in .env).
// Swap the REPLACE_ME_* values in .env with real Web3Forms access keys before
// launch. See .env.example for the inbox each form posts to.
// ===========================================================================

export const site = {
  name: 'The Living Law',
  url: 'https://livinglaw.in',
  tagline: 'The Hidden Science of Human Health',
  description:
    'The Living Law reveals the hidden science of human health and the blueprint to reclaim it — research, protocols, and the natural principles that built human health.',
  // Author / practitioner
  author: {
    name: 'Ajit',
    role: 'Health Researcher & Guide',
  },
  // Featured book (chapter/page filled in once the manuscript returns)
  book: {
    title: 'The Living Law',
    subtitle: 'Revealing the Blueprint of Human Health',
    status: 'Coming Soon',
  },
};

// Web3Forms access keys (one per inbox)
export const forms = {
  appointments: {
    // consultations / bookings -> appointments@thelivinglaw.in
    accessKey: import.meta.env.VITE_W3F_KEY_APPOINTMENTS || '',
    email: import.meta.env.VITE_EMAIL_APPOINTMENTS || 'appointments@thelivinglaw.in',
  },
  products: {
    // product / kit enquiries -> enquiry@thelivinglaw.in
    accessKey: import.meta.env.VITE_W3F_KEY_PRODUCTS || '',
    email: import.meta.env.VITE_EMAIL_PRODUCTS || 'enquiry@thelivinglaw.in',
  },
  newsletter: {
    // Join the Movement -> joinus@thelivinglaw.in
    accessKey: import.meta.env.VITE_W3F_KEY_NEWSLETTER || '',
    email: import.meta.env.VITE_EMAIL_NEWSLETTER || 'joinus@thelivinglaw.in',
  },
  challenge: {
    // 30-day challenge -> healthyrhythm@thelivinglaw.in
    accessKey: import.meta.env.VITE_W3F_KEY_CHALLENGE || '',
    email: import.meta.env.VITE_EMAIL_CHALLENGE || 'healthyrhythm@thelivinglaw.in',
  },
};

// Returns true if a form is wired with a real (non-placeholder) key.
export const isFormLive = (form) =>
  Boolean(form.accessKey && !form.accessKey.startsWith('REPLACE_ME'));

// Navigation
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'The Six Pillars', to: '/pillars' },
  { label: 'Research', to: '/articles' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Products', to: '/products' },
  { label: 'Challenge', to: '/challenge' },
  { label: 'About', to: '/about' },
];

export const legalNav = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Medical Disclaimer', to: '/medical-disclaimer' },
];
