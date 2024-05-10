/* eslint-disable @next/next/no-sync-scripts */
/* needed only because of flowbite dropdown menu */

import './ui/globals.css';
import type { Metadata } from 'next';
import { figtree } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Solarsoft - Dispečerské řízení pro fotovoltaické elektrárny',
  description: 'TODO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${figtree.className} antialiased`}>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
