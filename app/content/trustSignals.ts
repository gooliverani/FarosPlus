import type { TrustSignal } from './types';

export const trustSignals: TrustSignal[] = [
  {
    id: 'certified-installers',
    title: 'Certified Acoustic Installers',
    description: 'Team holds BASWA Phon and Pyrok applicator credentials for consistent acoustic performance.',
    proof: 'Credentials verified annually with manufacturer audits.'
  },
  {
    id: 'healthcare-compliance',
    title: 'Healthcare Site Compliance',
    description: 'Negative-air containment and infection control plans signed off by hospital safety officers.',
    proof: 'AAAHC and ASHE compliant work plans on file.'
  },
  {
    id: 'post-project-support',
    title: 'Post-Project Acoustic Verification',
    description: 'Provide handheld acoustic testing with commissioning reports after every install.',
    proof: 'Average 35 dB reduction validated across 18 projects in 2024.'
  }
];
