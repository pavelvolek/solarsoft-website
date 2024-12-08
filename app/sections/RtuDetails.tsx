import Image from 'next/image';
import List, { ListItem } from '../components/List';

export default function RtuDetails() {
  const items: ListItem[] = [
    {
      heading: 'Splnění standardů',
      text: 'Splňuje požadavky distributorů ČEZ, EG.D a PRE.',
    },
    {
      heading: 'Flexibilní zapojení',
      text: 'Možnost režimu master/slave pro zapojení více jednotek.',
    },
    {
      heading: 'Univerzální kompatibilita',
      text: 'Podpora populárních střídačů jako Solax, Growatt, Huawei.',
    },
    {
      heading: 'Přímý monitoring',
      text: 'Možnost připojení displeje pro přímý monitoring stavu elektrárny.',
    },
    {
      heading: 'Rozsáhlé rozhraní',
      text: 'Obsahuje 16 digitálních vstupů a 16 digitálních výstupů.',
    },
    {
      heading: 'Certifikovaná bezpečnost',
      text: 'Splňuje striktní normy pro kybernetickou ochranu.',
    },
  ];

  return (
    <section id="ridici-jednotka" className="w-full py-0 bg-white">
      <div className="px-4 mx-auto max-w-screen-lg lg:px-6 flex flex-col items-center">
        <p className="text-primary-400 font-medium">Solarsoft RTU</p>
        <h2 className="mb-4 text-5xl leading-[3.5rem] font-bold text-gray-900">Řídící jednotka Solarsoft</h2>
        <p className="text-gray-500 text-xl text-center">
          Naše jednotka Solarsoft RTU je navržena tak, aby splňovala požadavky distributorů <br /> na dispečerské řízení a umožnila nezbytná měření o provozu
          elektrárny.
        </p>
      </div>
      <div className="px-4 mt-6 mx-auto max-w-screen-xl lg:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:content-center">
        <div className="col-span-5 flex items-center">
          <Image src="/images/solarsoft_rtu_top_extension.png" alt="Solarsoft" width={1000} height={800} priority />
        </div>
        <div className="place-self-center col-span-7">
          <List items={items} />
        </div>
      </div>
    </section>
  );
}
