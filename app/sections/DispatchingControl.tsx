'use client';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

export default function DispatchingControl() {
  const [activeTileId, setActiveTileId] = useState<number>(0);

  interface Tile {
    title: string;
    description: string;
    gradient: string;
    iconPath: JSX.Element;
  }

  const tiles: Tile[] = [
    {
      title: 'Řídící centrum',
      description: 'Aktuální informace o výkonnosti, chování a bezpečnosti sledovaných jednotek.',
      gradient: 'from-primary-300 to-primary-700',
      iconPath: (
        <path d="m24 19v-15a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v15h11v2h-5v2h12v-2h-5v-2zm-22-15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13h-20zm12.965 5h5.035v2h-3.965l-2.659 3.988-3-6-1.341 2.012h-5.035v-2h3.965l2.659-3.988 3 6z" />
      ),
    },
    {
      title: 'Certifikace od distributorů',
      description: 'Všechny komponenty prošly certifikací, garantující spolehlivost a kvalitu našeho řešení.',
      gradient: 'from-rose-300 to-rose-700',
      iconPath: (
        <path d="m11 12a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm6-3a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm-9-3h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1 -1.231.51l-.769-.768-.769.768a.721.721 0 0 1 -1.231-.51v-3.833a3.987 3.987 0 0 1 2-7.444 3.939 3.939 0 0 1 1 .142v-7.142a3 3 0 0 0 -3-3h-8a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2h-5a5.006 5.006 0 0 1 -5-5v-12a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1 -1 6.062zm0-3.444a2 2 0 1 0 -2 2 2 2 0 0 0 2-2z" />
      ),
    },
    {
      title: 'Zabezpečení',
      description: 'Data jsou zabezpečena koncovým šifrováním, splnňujícím nejvyšší nároky na kyberbezpečnost.',
      gradient: 'from-emerald-300 to-emerald-700',
      iconPath: (
        <g>
          <path d="M11.948,24.009l-.354-.157C11.2,23.679,2,19.524,2,12V5.476A2.983,2.983,0,0,1,4.051,2.644L12,.009l7.949,2.635A2.983,2.983,0,0,1,22,5.476V12c0,8.577-9.288,11.755-9.684,11.887ZM12,2.106,4.684,4.532A.992.992,0,0,0,4,5.476V12c0,5.494,6.44,9.058,8.047,9.861C13.651,21.216,20,18.263,20,12V5.476a.992.992,0,0,0-.684-.944Z" />
          <path d="M11.111,14.542h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4L8.868,10.16,11.112,12.5l5.181-5.181,1.414,1.414-5.261,5.261A1.873,1.873,0,0,1,11.111,14.542Z" />
        </g>
      ),
    },
    {
      title: 'Řešení master / slave',
      description: 'Flexibilní připojení díky režimu master-slave umožňuje snadnou integraci pro všechny typy elektráren.',
      gradient: 'from-violet-300 to-violet-700',
      iconPath: (
        <path d="m17.163,13c.434,1.441,1.757,2.5,3.337,2.5,1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-1.58,0-2.903,1.059-3.337,2.5h-1.163v-5c0-.715.504-1.313,1.175-1.462.445,1.421,1.759,2.462,3.325,2.462,1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-1.593,0-2.926,1.076-3.348,2.535-1.765.178-3.152,1.654-3.152,3.465v5h-1c-.553,0-1,.447-1,1s.447,1,1,1h1v5c0,1.811,1.388,3.287,3.152,3.465.422,1.459,1.755,2.535,3.348,2.535,1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-1.566,0-2.88,1.041-3.325,2.462-.671-.149-1.175-.747-1.175-1.462v-5h1.163Zm3.337-2.5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm0-8.5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm0,17c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm-8.868-10.244c-.274-.479-.887-.644-1.365-.367l-.977.563c-.605-.652-1.393-1.126-2.289-1.331v-1.121c0-.553-.447-1-1-1s-1,.447-1,1v1.121c-.896.205-1.685.678-2.289,1.331l-.977-.563c-.479-.276-1.09-.111-1.365.367-.276.479-.111,1.09.367,1.365l.983.566c-.129.418-.218.853-.218,1.313s.089.895.218,1.313l-.983.566c-.479.275-.644.887-.367,1.365.185.321.521.501.867.501.169,0,.341-.043.498-.134l.977-.563c.605.652,1.393,1.126,2.289,1.331v1.121c0,.553.447,1,1,1s1-.447,1-1v-1.121c.896-.205,1.685-.678,2.289-1.331l.977.563c.157.091.329.134.498.134.346,0,.683-.18.867-.501.276-.479.111-1.09-.367-1.365l-.983-.566c.129-.418.218-.853.218-1.313s-.089-.895-.218-1.313l.983-.566c.479-.275.644-.887.367-1.365Zm-5.632,5.744c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Z" />
      ),
    },
  ];

  return (
    <section id="dispecerske-rizeni" className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto sm:py-16 px-4 lg:px-6">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-7">
            <h2 className="mb-4 text-5xl leading-[3.5rem] font-bold text-gray-900">
              Klíčové parametry
              <br />
              našeho dispečerského řízení
            </h2>
            <p className="text-gray-500 text-xl">
              Naše technologie řízení splňuje nejvyšší standardy pro fotovoltaické elektrárny, zajišťuje maximální efektivitu a stabilitu provozu.
            </p>
            <div className="max-w-[500px] my-16">
              {tiles.map((tile, index) => {
                return (
                  <div
                    key={tile.title}
                    onClick={() => setActiveTileId(index)}
                    className={classNames('flex justify-start items-start gap-4 border-r-4 border-gray-200 transition ease-in pb-4', {
                      'border-primary-400': activeTileId === index,
                    })}
                  >
                    <div
                      className={classNames(
                        'grow-0 shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 cursor-pointer transition ease-in',
                        {
                          'bg-primary-400': activeTileId === index,
                        },
                      )}
                    >
                      <svg
                        className={classNames('fill-current w-4 h-4 transition ease-in', {
                          'text-white': activeTileId === index,
                          'text-gray-700': activeTileId !== index,
                        })}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {tile.iconPath}
                      </svg>
                    </div>
                    <div className="max-w-96">
                      <h3 className="mt-[6px] text-gray-900 text-lg font-semibold">{tile.title}</h3>
                      <p
                        className={classNames('text-gray-500 mt-2 text-base origin-top transition-all ease-in', {
                          'scale-y-100 h-auto': activeTileId === index,
                          'scale-y-0 h-0': activeTileId !== index,
                        })}
                      >
                        {tile.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-5">
            <Image className="w-auto h-[600px]" src="/schema.png" alt="Schéma zapojení" width={1400} height={1750} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
