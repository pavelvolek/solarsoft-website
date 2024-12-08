import { twMerge } from 'tailwind-merge';

export interface Tile {
  heading: string;
  text: string;
  color?: string;
  iconPath: JSX.Element;
}

interface Props {
  tiles: Tile[];
  className?: string;
  dark?: boolean;
}

export default function Tiles({ tiles, className, dark }: Props) {
  return (
    <div className={twMerge('pt-8 grid gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-4', className)}>
      {tiles.map((tile, index) => {
        return (
          <div
            key={tile.heading}
            className={twMerge(
              'relative flex flex-col justify-center items-center gap-6 text-center pt-10 pb-12 px-10 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all',
              dark ? 'bg-primary-50' : 'bg-white',
            )}
          >
            <div
              className={twMerge(
                `absolute -top-8 grow-0 shrink-0 flex justify-center items-center w-14 h-14 rounded-xl shadow-md bg-gradient-to-br`,
                tile.color ? tile.color : 'bg-primary-400',
              )}
            >
              <div
                className={twMerge(
                  `absolute -top-2 -right-2 rounded-full w-7 h-7 text-base text-white font-semibold text-center border-2 border-white`,
                  tile.color ? tile.color : 'bg-primary-400',
                )}
              >
                {index + 1}
              </div>
              <svg className="fill-current text-white w-6 h-6 shadow-lg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {tile.iconPath}
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-gray-900 text-xl font-bold">{tile.heading}</h3>
              <p className="text-gray-600 text-base">{tile.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
