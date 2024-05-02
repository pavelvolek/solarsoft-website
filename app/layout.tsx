import './ui/globals.css';
import type { Metadata } from "next";
import { figtree } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Solarsoft - Dispečerské řízení pro fotovoltaické elektrárny",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${figtree.className} antialiased`}>{children}</body>
    </html>
  );
}
