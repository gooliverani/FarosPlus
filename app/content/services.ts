import type { ServiceOffering } from './types';

export const serviceOfferings: ServiceOffering[] = [
  {
    id: 'acoustic_plaster',
    name: 'Acoustic Plaster Systems',
    description: 'Seamless finishes that absorb echo while respecting heritage surfaces and modern design intent.',
    benefits: [
      'Custom blended aggregates for target NRC values',
      'Continuous surfaces without visible seams or tiles',
      'Fire-rated and vapor-permeable options for sensitive spaces'
    ]
  },
  {
    id: 'sound_isolation',
    name: 'Sound Isolation Enclosures',
    description: 'Room-in-room assemblies and decoupled ceiling systems engineered to block structure-borne noise.',
    benefits: [
      'Resilient channel layouts tuned to your partition heights',
      'Door and glazing packages matched to required STC goals',
      'Commissioning support with post-install acoustic testing'
    ]
  },
  {
    id: 'decorative_plaster',
    name: 'Decorative Plaster Restoration',
    description: 'Hand-finished profiles, domes, and coffers recreated with modern durability for heritage properties.',
    benefits: [
      'Site-safe scanning and mould replication for damaged details',
      'Lime and gypsum options matched to existing substrates',
      'On-site artisans trained in conservation-safe methods'
    ]
  },
  {
    id: 'project_delivery',
    name: 'Construction Partner Delivery',
    description: 'Integrated scheduling, pull-planning, and cleanroom-grade dust control to protect live environments.',
    benefits: [
      'Dedicated superintendent for occupied site coordination',
      'Daily QC reporting with photo and acoustic readings',
      'Rapid-response punch support after turnover'
    ]
  }
];
