import { LegalPage } from '@/components/LegalPage';

export default function MedicalDisclaimer() {
  return (
    <LegalPage title="Medical Disclaimer" intro="Please read this before relying on health-related material from The Living Law.">
      <h2>Not medical advice</h2>
      <p>All content is provided for general education and information. It is not medical advice, diagnosis, treatment, or a substitute for care from a qualified healthcare professional.</p>
      <h2>Do not delay care</h2>
      <p>Do not ignore professional advice, stop prescribed treatment, or delay seeking care because of something you read here. Seek urgent medical assistance for an emergency.</p>
      <h2>Individual circumstances differ</h2>
      <p>Health needs vary with age, medical history, medication, pregnancy, disability, and other factors. Discuss material changes to diet, movement, sleep, supplementation, or treatment with an appropriately qualified professional.</p>
      <h2>Research evolves</h2>
      <p>Scientific understanding changes over time. We aim to communicate evidence responsibly, but completeness and continued accuracy cannot be guaranteed.</p>
      <h2>Products and consultations</h2>
      <p>Any products, programmes, or lifestyle consultations described on this website are not presented as cures and do not replace licensed medical care.</p>
    </LegalPage>
  );
}
