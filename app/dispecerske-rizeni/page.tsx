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
import Scheme from '../sections/Scheme';
import Partners from '../sections/Partners';

export default function RTU() {
  const tiles = [
    {
      heading: 'Napojení do distribuční sítě',
      text: 'Plníme požadavky ČEZ pro napojení disperského řízení.',
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
      heading: 'Komunikace',
      text: 'Standardní komunikace přes protokoly IEC 60870-5-101 nebo IEC 60870-5-104.',
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
      text: 'Dispečerské řízení je kompatibilní se všemi hlavními značkami střídačů (Huaweii, Solax, Growatt).',
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
      text: 'Možnost on-line monitoringu FVE elektrárny přes mobilní i webovou aplikaci',
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
      heading: 'Dodávka na klíč',
      text: 'Zajistíme, projekt i implementaci.',
    },
    {
      heading: 'Vlastní RTU',
      text: 'Disponujeme vlastním HW i SW pro dispečerské řízení.',
    },
    {
      heading: 'Monitoring',
      text: 'Zajistíme přímý monitoring stavu elektrárny.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <HeaderStrip />
      <Header />

      <Section className="bg-primary-50 py-24" fullwidth>
        <div className="px-6 mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 flex flex-col items-start lg:order-2">
            <Heading>Dispečerské řízení</Heading>
            <Text>
              Fotovoltaické elektrárny s instalovaným výkonem nad 100 kWp musí umožňovat dispečerské řízení pro případ nutnost vzdálené regulace výkonu ze
              strany distributora. Jsme specialisté na komplexní dodávky systémů dispečerského řízení od návrhu přes realizaci až po následný servis. Využíváme
              vlastního řídících jednotek splňujících požadavky distributorů.
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
          <Heading>Specifikace</Heading>
          <Subheading>dispečerského řízení Solarsoft</Subheading>
          <Text>
            Solarsoft RTU je hardwarová řídící jednotka poskytující distribučním společnostem základní informace o provozu elektrárny. Distributor má díky
            řídící jednotce informace a kontrolu nad provozem elektrárny. Komunikace mezi řídící jednotkou a distributurem se odehrává pomocí GSM sítě. RTU
            dokáže na jedné straně sbírat a měřit výkonová data elektrárny a na druhé straně přijímat a vykonávat pokyny z dispečinku provozovatele sítě.
          </Text>
        </div>
        <Tiles tiles={tiles} className="mt-12 lg:grid-cols-2" dark />
      </Section>

      <Scheme />
      <Partners />
      <Contact refId="solarsoft_web-rtu" />
      <Footer />
    </main>
  );
}
