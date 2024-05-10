import Image from 'next/image';

export default function SectionRTU() {
  interface Tile {
    title: string;
    description: string;
    gradient: string;
  }

  const tiles: Tile[] = [
    {
      title: 'Splnění standardů',
      description: 'Splňuje požadavky distributorů ČEZ, EG.D a PRE.',
      gradient: 'from-primary-300 to-primary-700',
    },
    {
      title: 'Flexibilní zapojení',
      description: 'Možnost režimu master/slave pro zapojení více jednotek.',
      gradient: 'from-emerald-300 to-emerald-700',
    },
    {
      title: 'Univerzální kompatibilita',
      description: 'Podpora populárních střídačů jako Solax, Growatt, Huawei.',
      gradient: 'from-emerald-300 to-emerald-700',
    },
    {
      title: 'Přímý monitoring',
      description: 'Možnost připojení displeje pro přímý monitoring stavu elektrárny.',
      gradient: 'from-rose-300 to-rose-700',
    },
    {
      title: 'Rozsáhlé rozhraní',
      description: 'Obsahuje 16 digitálních vstupů a 16 digitálních výstupů.',
      gradient: 'from-rose-300 to-rose-700',
    },
    {
      title: 'Certifikovaná bezpečnost',
      description: 'Splňuje striktní normy pro kybernetickou ochranu.',
      gradient: 'from-violet-300 to-violet-700',
    },
  ];

  return (
    <section id="energeticky-management" className="w-full py-0 bg-white">
      <div className="px-4 py-16 mx-auto max-w-screen-xl lg:px-6 lg:grid lg:grid-cols-12 lg:gap-20">
        <div className="col-span-5">
          <Image src="/images/loxone_audioserver.png" alt="Solarsoft RTU" width={648} height={648} priority />
        </div>
        <div className="col-span-7">
          <p className="text-primary-400 font-medium">Solarsoft RTU</p>
          <h2 className="mb-4 text-5xl leading-[3.5rem] font-bold text-gray-900">Řídící jednotka Solarsoft</h2>
          <p className="text-gray-500 text-xl">
            Naše jednotka Solarsoft RTU je navržena tak, aby splňovala požadavky distributorů na dispečerské řízení a umožnila nezbytná měření o provozu
            elektrárny.
          </p>
          <div className="flex flex-col justify-center items-start gap-4 my-10">
            {tiles.map((tile) => {
              return (
                <div key={tile.title} className="flex justify-center items-center gap-3">
                  <div className="grow-0 shrink-0 flex justify-center items-center w-5 h-5 rounded-full shadow-md bg-primary-600">
                    <svg className="fill-current text-white w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.414,10.586,13.121,6.293,11.707,7.707,15,11H5v2H15l-3.293,3.293,1.414,1.414,4.293-4.293A2,2,0,0,0,17.414,10.586Z" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 text-base">
                    <b>{tile.title}:</b> {tile.description}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
