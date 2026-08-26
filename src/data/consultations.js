// ===========================================================================
// THE LIVING LAW — Personal Health Consultations
// Personalized guidance with Ajit, based on the principles of natural
// biological alignment described in "The Will to Know."
// ===========================================================================

export const consultations = [
  {
    slug: 'metabolic-health-reset',
    title: 'Metabolic Health Reset',
    tagline: 'Support for diabetes, obesity, and inflammation.',
    icon: 'Activity',
    duration: '60 min',
    summary:
      'Type 2 diabetes is not a deficiency of insulin but a resistance to it—and that resistance is driven by burden the body can be helped to release. This consultation focuses on the chemical pillar: information as medicine.',
    outcomes: [
      'Understand the root of insulin resistance, not just the numbers',
      'A nutrition strategy built on the DIP Diet principles',
      'A circadian and movement plan to restore metabolic rhythm',
      'A clear direction of travel—not a lifetime of management',
    ],
    description:
      'Modern medicine calls stable blood sugar "managing well." But you can have perfect numbers on a lab report while feeling utterly lifeless inside. The Metabolic Health Reset is about more than control—it is about changing the direction of health itself. Together we map the signals your body is receiving, identify the mismatch, and rebuild the conditions under which the body remembers how to balance itself.',
    pillar: 'cellular-repair',
  },
  {
    slug: 'gut-health-restoration',
    title: 'Gut Health Restoration',
    tagline: 'Focus on microbiome balance, digestion, and immune health.',
    icon: 'Brain',
    duration: '60 min',
    summary:
      'The gut is the second brain, producing most of your serotonin and housing the microbial symphony that governs immunity and mood. This consultation focuses on reforesting the inner landscape.',
    outcomes: [
      'Assess the state of your microbiome and gut lining',
      'Identify the inputs creating static rather than signal',
      'A reforestation plan: fiber, fermentation, and rhythm',
      'Vagus nerve and nervous-system regulation practices',
    ],
    description:
      'When the inner forest is stripped—by processed food, antibiotics, stress, and disconnection—the body loses coherence. Fog, anxiety, fatigue, and inflammation follow. The Gut Health Restoration consultation is a guided return: we audit the inner landscape, remove what harms it, and rebuild the conditions in which a diverse, resilient microbiome can flourish again.',
    pillar: 'gut-brain-axis',
  },
  {
    slug: 'lifestyle-recalibration',
    title: 'Lifestyle Recalibration',
    tagline: 'Circadian reset, nutrition strategy, and metabolic repair.',
    icon: 'Sun',
    duration: '90 min',
    summary:
      'The deepest package: a full alignment of light, food, movement, and rest. The Reversal Moment is not a single decision but a new direction, set day by day by consistent signals.',
    outcomes: [
      'A complete circadian reset (light, sleep, the Sunset Rule)',
      'A personalized DIP Diet and nutrition framework',
      'Zero Volt grounding and GRAD movement integration',
      'A 30-day blueprint to convert intent into biological change',
    ],
    description:
      'Health is not the destination—it is the foundation. The Lifestyle Recalibration is for those ready to change direction comprehensively. We align the four pillars of the body\u2019s intelligence—chemical, physical, electrical, and rhythmic—into one coherent daily rhythm. The goal is not perfection but consistency: the consistent signals that produce consistent results.',
    pillar: 'circadian-rhythm',
  },
];

export const getConsultation = (slug) =>
  consultations.find((c) => c.slug === slug);
