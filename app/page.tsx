import Image from 'next/image';
import Header from './ui/header';
import HeroSection from './ui/hero-section';
import Features from './ui/features';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <header className="max-w-screen-xl w-full">{Header()}</header>
      <section className="w-full">{HeroSection()}</section>
      <section className="w-full bg-yellow-50">{Features()}</section>
      <section></section>
      <section className="flex flex-col min-h-screen min-w-full items-center justify-center bg-[#00001A] bg-gradient">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/solarsoft_logo.svg"
          alt="Solarsoft"
          width={240}
          height={37}
          priority
        />
      </section>
      <section id="kontakt">Kontakt</section>
      <footer>Patička</footer>
    </main>
  );
}
