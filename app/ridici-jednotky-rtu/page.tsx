import Image from 'next/image';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Text from '../components/Text';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Tiles from '../components/Tiles';
import List, { ListItem } from '../components/List';
import HeaderStrip from '../sections/HeaderStrip';
import Link from '../components/Link';

export default function RTU() {
  const tiles = [
    {
      heading: 'Plnění standardů',
      text: 'Naše RTU plní požadavky ČEZ.',
      iconPath: (
        <g>
          <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
          <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
          <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
        </g>
      ),
    },
    {
      heading: 'Flexibilní zapojení',
      text: 'Solarsoft RTU umožňuje zapojení v režimu master/slev, který umožňuje propojení více jednotek.',
      iconPath: (
        <g>
          <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
          <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
          <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
        </g>
      ),
    },
    {
      heading: 'Přímý monitoring',
      text: 'Displej RTU je možné připojit pro přímý monitoring stavu elektrárny.',
      iconPath: (
        <g>
          <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
          <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
          <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
        </g>
      ),
    },
    {
      heading: 'Kompatibilita',
      text: 'Solarsoft RTU je kompatibilní se všemi hlavními značkami střídačů (Huaweii, Solax, Growatt).',
      iconPath: (
        <g>
          <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
          <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
          <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
        </g>
      ),
    },
    {
      heading: 'Rozsáhlé rozhraní',
      text: 'Komunikační rozhraní RTU disponuje 16 digitálními vstupy a výstupy.',
      iconPath: (
        <g>
          <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
          <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
          <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
        </g>
      ),
    },
  ];

  const items: ListItem[] = [
    {
      heading: 'Splnění standardů',
      text: 'Splňuje požadavky distributorů.',
    },
    {
      heading: 'Flexibilní zapojení',
      text: 'Možnost režimu master/slave pro zapojení více jednotek.',
    },
    {
      heading: 'Přímý monitoring',
      text: 'Možnost připojení displeje pro přímý monitoring stavu elektrárny.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <HeaderStrip />
      <Header />

      <Section className="bg-primary-50 py-24" fullwidth>
        <div className="px-6 mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 flex flex-col items-start lg:order-2">
            <Subheading>Řídící jednotka</Subheading>
            <Heading>RTU Solarsoft</Heading>
            <Text>
              Vzdálená terminálová řídící jednotka neboli remote terminal unit slouží jako nedílná součást dispečerského řízení ke vzdálenému monitorování a
              ovládání výkonu fotovoltaické elektrárny distributorem
            </Text>
            <List items={items} />
            <div className="flex items-center gap-4">
              <Link href="#kontakt" className="w-48">
                Mám zájem
              </Link>
              <Link href="#produktove-informace" className="w-48 text-primary-400 bg-primary-100 hover:bg-primary-200 focus:bg-primary-300">
                Více informací
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1 flex items-center justify-center p-6">
            <Image src="/images/solarsoft_rtu_perspective_base.png" alt="Solarsoft" width={2560} height={1707} priority />
          </div>
        </div>
      </Section>

      <Section id="produktove-informace">
        <div className="flex flex-col items-start">
          <Subheading>Solarsoft RTU</Subheading>
          <Heading>Produktové informace</Heading>
          <Text>
            Solarsoft RTU je hardwarová řídící jednotka poskytující distribučním společnostem základní informace o provozu elektrárny. Distributor má díky
            řídící jednotce <strong className="text-primary-400 font-medium">informace a kontrolu nad provozem elektrárny</strong>. Komunikace mezi řídící
            jednotkou a distributurem se odehrává pomocí GSM sítě. RTU dokáže na jedné straně{' '}
            <strong className="text-primary-400 font-medium">sbírat a měřit výkonová data</strong> elektrárny a na druhé straně přijímat a{' '}
            <strong className="text-primary-400 font-medium">vykonávat pokyny z dispečinku provozovatele sítě</strong>.
          </Text>
        </div>
        <Tiles tiles={tiles} className="mt-12 lg:grid-cols-3" dark />
      </Section>

      <Section id="schema" dark fullwidth>
        <div className="flex flex-col items-center py-24 px-6 mx-auto max-w-screen-lg">
          <Heading>Schéma elektrárny s RTU</Heading>
          <Image src="/images/schema_zapojeni.jpg" alt="Solarsoft" width={1799} height={958} priority />
        </div>
      </Section>

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

      <Contact />
      <Footer />
    </main>
  );
}
