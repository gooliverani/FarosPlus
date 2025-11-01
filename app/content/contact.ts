import type { ContactChannel } from './types';

export const contactChannels: ContactChannel[] = [
  {
    type: 'phone',
    label: 'Call FarosPlus',
    value: '+1-503-555-0173',
    availability: 'Mon-Fri, 7:00-18:00 PT'
  },
  {
    type: 'email',
    label: 'Email project team',
    value: 'projects@farosplus.com',
    availability: 'Replies within 1 business day'
  }
];

export const primaryPhoneNumber = contactChannels.find((channel) => channel.type === 'phone')?.value ?? '';

export const contactForm = {
  endpoint: 'https://formspree.io/f/mzbykzpo',
  redirect: 'https://farosplus.com/#contact-thank-you',
  fallbackMessage: 'Thanks for reaching out to FarosPlus. A project specialist will confirm details within one business day.'
};
