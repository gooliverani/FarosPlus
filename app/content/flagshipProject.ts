import type { FlagshipProject } from './types';
import { primaryPhoneNumber } from './contact';

export const flagshipProject: FlagshipProject = {
  id: 'flagship',
  title: 'Grand Scala Acoustic Retrofit',
  location: 'Portland, OR',
  services: ['Acoustic plaster resurfacing', 'Floating ceiling isolation'],
  summary:
    "FarosPlus resurfaced the historic auditorium with breathable acoustic plaster and isolated the mezzanine ceiling, restoring concert-level clarity without compromising the venue's Art Deco details.",
  heroImage: {
    src: '/images/flagship/grand-scala.jpg',
    alt: 'Acoustic plaster team smoothing the curved proscenium walls inside the Grand Scala auditorium.',
    width: 1920,
    height: 1280
  },
  resultMetric: 'Noise transfer reduced by 45 dB',
  testimonial: {
    quote: "They preserved every historic curve while making the hall sound like a brand-new performance space.",
    author: 'Laura Medina, Facilities Director'
  },
  primaryCta: {
    type: 'phone',
    label: 'Call FarosPlus',
    value: primaryPhoneNumber
  }
};
