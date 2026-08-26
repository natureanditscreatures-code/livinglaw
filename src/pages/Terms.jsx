import { LegalPage } from '@/components/LegalPage';

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" intro="The basic terms governing access to The Living Law website.">
      <p><strong>Last updated:</strong> 26 August 2026</p>
      <h2>Educational purpose</h2>
      <p>The website provides general educational information. It does not establish a doctor-patient, therapist-client, or other regulated professional relationship.</p>
      <h2>No individual guarantee</h2>
      <p>Health and lifestyle outcomes vary. No article, consultation description, challenge, product description, or testimonial guarantees a particular result.</p>
      <h2>Responsible use</h2>
      <p>You agree not to misuse the website, interfere with its operation, submit unlawful material, or reproduce protected content without permission.</p>
      <h2>External resources</h2>
      <p>Links to third-party websites are provided for convenience or reference. The Living Law does not control their availability, accuracy, or practices.</p>
      <h2>Changes</h2>
      <p>These terms may be revised as the website and its services develop. Continued use after publication of revised terms constitutes acceptance of those terms.</p>
    </LegalPage>
  );
}
