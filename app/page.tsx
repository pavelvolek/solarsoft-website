import NaseReseni from './ui/nase-reseni';
import Contact from './ui/contact-v2';
import EnergyManagement from './ui/energy-management';
import Footer from './ui/footer';
import Header from './ui/header';
import HeaderStrip from './ui/header-strip';
import HeroSection from './ui/hero-section';
import DispecerskeRizeni from './ui/dispecerske-rizeni';
import SectionRTU from './ui/section-rtu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      {HeaderStrip()}
      {Header()}
      {HeroSection()}
      <NaseReseni />
      <DispecerskeRizeni />
      <SectionRTU />
      {EnergyManagement()}
      {Contact()}
      {Footer()}
    </main>
  );
}
