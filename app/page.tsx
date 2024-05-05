import AboutUs from './ui/about-us';
import Contact from './ui/contact';
import EnergyManagement from './ui/energy-management';
import Features from './ui/features';
import Footer from './ui/footer';
import Header from './ui/header';
import HeaderStrip from './ui/header-strip';
import HeroSection from './ui/hero-section';
import Schema from './ui/schema';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      {HeaderStrip()}
      {Header()}
      {HeroSection()}
      <AboutUs />
      {EnergyManagement()}
      <Features />
      <section className="w-full bg-white">{Schema()}</section>
      {Contact()}
      {Footer()}
    </main>
  );
}
