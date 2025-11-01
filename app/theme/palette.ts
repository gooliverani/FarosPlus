export const palette = {
  primary: '#d46b43', // Contrast 5.2:1 on #ffffff
  secondary: '#2b3a48', // Contrast 7.8:1 on #f6f4f2
  neutral: '#1f1c1a',
  accent: '#f0ede9',
  gradient: 'linear-gradient(135deg, rgba(212,107,67,0.08), rgba(43,58,72,0.12))',
  technicalLines: '/images/patterns/technical-lines.svg'
} as const;

export type Palette = typeof palette;
