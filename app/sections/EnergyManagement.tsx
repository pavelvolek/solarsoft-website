import classNames from 'classnames';
import Image from 'next/image';

export default function EnergyManagement() {
  interface Tile {
    heading: string;
    text: string;
    gradient: string;
  }

  const tiles: Tile[] = [
    {
      heading: 'Přístup odkudkoli',
      text: 'Spravujte svou elektrárnu z počítače nebo mobilu, ať jste kdekoli.',
      gradient: 'from-primary-300 to-primary-700',
    },
    {
      heading: 'Maximální bezpečnost',
      text: 'Komunikace s elektrárnou splňuje nejvyšší standardy kyberbezpečnosti.',
      gradient: 'from-rose-300 to-rose-700',
    },
    {
      heading: 'Intuitivní ovládání',
      text: 'Uživatelsky přívětivé rozhraní pro snadné ovládání a přehledy.',
      gradient: 'from-emerald-300 to-emerald-700',
    },
    {
      heading: 'Okamžité upozornění',
      text: 'Dostávejte varování o poruchách a jiných stavech přímo na mobil.',
      gradient: 'from-violet-300 to-violet-700',
    },
  ];

  return (
    <section id="energeticky-management" className="w-full py-16 bg-white">
      <div className="px-4 py-16 mx-auto max-w-screen-xl lg:px-6 lg:grid lg:grid-cols-12 lg:gap-20">
        <div className="col-span-7">
          <p className="text-primary-400 font-medium">Řídící centrum</p>
          <h2 className="mb-4 text-5xl leading-[3.5rem] font-bold text-gray-900">
            Solarsoft Energetický <br />
            Management
          </h2>
          <p className="text-gray-500 text-xl">Optimalizujte řízení vaší fotovoltaické elektrárny s naší pokročilou aplikací pro energetický management.</p>
          <div className="grid grid-cols-2 gap-12 my-12">
            {tiles.map((tile) => {
              return (
                <div key={tile.heading} className="flex justify-center items-start gap-4">
                  <div
                    className={classNames(
                      'grow-0 shrink-0 flex justify-center items-center mt-1 w-6 h-6 rounded-full shadow-md bg-gradient-to-br',
                      tile.gradient,
                    )}
                  >
                    <svg className="fill-current text-white w-3 h-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 text-xl font-bold">{tile.heading}</h3>
                    <p className="text-gray-500 text-base">{tile.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-5">
          <Image className="" src="/images/energeticky-management.png" alt="Energetický management" width={1400} height={1750} priority />
        </div>
      </div>
    </section>
  );
}
