import Image from 'next/image';
import Heading from '../components/Heading';
import Section from '../components/Section';

export default function Partners() {
  return (
    <Section id="partners" fullwidth className="py-24">
      <div className="mb-6 px-6 mx-auto max-w-screen-lg flex flex-col items-start">
        <Heading>Hlavní montážní parter</Heading>
      </div>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-primary-100 lg:w-1/2 rounded-r-lg"></div>
        <div className="relative mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 flex items-center gap-6">
            <a href="https://acetex.cz/" target="_blank">
              <Image className="object-cover" src="/images/acetex_logo.png" alt="Acetex" width={400} height={100} priority />
            </a>
            <a href="https://acetex.cz/" target="_blank">
              <Image className="object-cover" src="/images/acetex_installation.jpg" alt="Acetex" width={485} height={442} priority />
            </a>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold">Certifikováno distributory</h1>
            <Image className="object-cover" src="/images/logo_cez-distribuce.png" alt="Acetex" width={280} height={186} priority />
          </div>
        </div>
      </div>
    </Section>
  );
}
