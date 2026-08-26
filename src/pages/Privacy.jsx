import { LegalPage } from '@/components/LegalPage';

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" intro="A plain-language overview of information handled through this website.">
      <p><strong>Last updated:</strong> 26 August 2026</p>
      <h2>Information we receive</h2>
      <p>We may receive information you voluntarily provide through enquiry, consultation, newsletter, or challenge forms, including your name, contact details, and the contents of your message.</p>
      <h2>How information is used</h2>
      <p>Information is used to respond to requests, deliver requested communications, operate the website, prevent misuse, and meet applicable legal obligations. We do not sell personal information.</p>
      <h2>Service providers</h2>
      <p>Form delivery, hosting, analytics, and security providers may process limited information on our behalf. Their own terms and privacy practices may apply.</p>
      <h2>Your choices</h2>
      <p>You may request access, correction, or deletion of information you submitted, subject to legal and operational requirements.</p>
      <h2>Contact</h2>
      <p>Privacy questions may be sent to <a href="mailto:privacy@livinglaw.in">privacy@livinglaw.in</a>.</p>
    </LegalPage>
  );
}
