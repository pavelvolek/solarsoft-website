import Image from "next/image";
import NavLinks from "./ui/nav-links";
import HeroSection from "./ui/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <header className="flex items-center justify-center w-full max-w-screen-xl bg-red-400">
        {NavLinks()}
      </header>
      <section className="bg-yellow-100 w-full">
        {HeroSection()}
      </section>
      <section>Management</section>
      <section>Contact</section>

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
