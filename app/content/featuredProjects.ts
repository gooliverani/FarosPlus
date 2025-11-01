import type { FeaturedProject } from './types';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'atrium-sound-shield',
    title: 'City Atrium Sound Shield',
    location: 'Seattle, WA',
    serviceCategory: 'soundproofing',
    description:
      'Wrapped a glass atrium in micro-perforated acoustic plaster and installed soffit isolation to quiet downtown foot traffic for a luxury condo lobby.',
    highlight: 'Reverberation time trimmed to 0.8s',
    testimonial: {
      quote: 'The lobby finally matches the premium experience we sell on every tour.',
      author: 'Derrick Huang, Property Manager'
    },
    image: {
      src: '/images/featured/atrium-sound-shield.jpg',
      alt: 'Atrium lobby with curved plaster panels diffusing sunlight and dampening noise.',
      width: 1280,
      height: 960
    }
  },
  {
    id: 'broadcast-studio-shell',
    title: 'Broadcast Studio Isolation Shell',
    location: 'Boise, ID',
    serviceCategory: 'hybrid',
    description:
      'Delivered a double-layer plaster isolation shell with resilient channels, eliminating HVAC rumble captured on live broadcasts.',
    highlight: 'Noise floor dropped by 32 dB',
    image: {
      src: '/images/featured/broadcast-studio-shell.jpg',
      alt: 'Control room wall finished in flush acoustic plaster behind studio equipment.',
      width: 1280,
      height: 853
    }
  },
  {
    id: 'heritage-museum-refresh',
    title: 'Heritage Museum Gallery Refresh',
    location: 'Salem, OR',
    serviceCategory: 'plastering',
    description:
      'Restored ornamental plaster ceilings with vapor-permeable acoustic layers so docents can speak without amplification in rotating exhibits.',
    testimonial: {
      quote: 'Their team preserved our artifacts while working in a live gallery schedule.',
      author: 'Marilyn Ortiz, Museum Director'
    },
    image: {
      src: '/images/featured/heritage-museum-refresh.jpg',
      alt: 'Museum gallery ceiling with restored plaster coffers and discreet acoustic vents.',
      width: 1280,
      height: 960
    }
  },
  {
    id: 'hospital-quiet-suite',
    title: 'Hospital Quiet Recovery Suites',
    location: 'Spokane, WA',
    serviceCategory: 'soundproofing',
    description:
      'Installed antimicrobial acoustic plaster and sealed chase penetrations, giving post-op patients a calming, quieter recovery wing.',
    highlight: 'Patient sleep quality scores up 38%',
    image: {
      src: '/images/featured/hospital-quiet-suite.jpg',
      alt: 'Healthcare recovery suite with smooth acoustic plaster ceiling and warm lighting.',
      width: 1280,
      height: 853
    }
  }
];
