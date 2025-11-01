import './styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FarosPlus Plastering & Soundproofing',
  description: 'Specialists in plastering craftsmanship and acoustic solutions.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
