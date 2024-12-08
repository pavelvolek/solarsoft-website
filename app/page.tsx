import CompanyIntro from './sections/CompanyIntro';
import Contact from './sections/Contact';
import EnergyManagement from './sections/EnergyManagement';
import Footer from './sections/Footer';
import Header from './sections/Header';
import HeaderStrip from './sections/HeaderStrip';
import Intro from './sections/Intro';
import DispatchingControl from './sections/DispatchingControl';
import RtuDetails from './sections/RtuDetails';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <HeaderStrip />
      <Header />

      <Intro />
      <CompanyIntro />
      <DispatchingControl />
      <RtuDetails />
      <EnergyManagement />

      <Contact refId="solarsoft_web-homepage" />
      <Footer />
    </main>
  );
}
