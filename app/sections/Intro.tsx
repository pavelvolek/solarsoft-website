import Image from 'next/image';
import Link from '../components/Link';

export default function Intro() {
  return (
    <section className="w-full bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:pt-48 lg:pb-36 lg:grid-cols-12 overflow-hidden">
        <div className="mr-auto place-self-center lg:col-span-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold text-primary-900 lg:text-6xl lg:leading-[4rem] lg:mb-6">
            <em className="not-italic text-primary-700">Dispečerské řízení</em> pro fotovoltaické elektrárny
          </h1>
          <h2 className="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-10 lg:text-lg  lg:leading-[2rem]">
            Poskytujeme kompletní řešení dispečerského řízení na klíč, včetne dodávky řídících jednotek Solarsoft RTU, splňujících požadavky distributorů na
            dispečerské řízení dle platných legislativ a vysokých nároků na kyberbezpečnost.
          </h2>
          <Link
            href="#nase-reseni"
            iconPath={
              <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm1.414,13.414L18.126,10.7,16.712,9.289,12,14,7.327,9.327,5.913,10.741l4.673,4.673a2,2,0,0,0,2.828,0Z" />
            }
          >
            Dozvěďet se více
          </Link>
        </div>
        <div className="relative lg:mt-0 lg:col-span-4 flex items-center">
          <div className="absolute lg:w-[150%] lg:h-[150%] lg:top-[-25%] lg:left-[-25%]">
            <Image src="/logos-raw/icon-background-image.svg" alt="Solarsoft" width={3100} height={2300} priority />
          </div>
          <Image src="/images/solarsoft_rtu_top_base.png" alt="Solarsoft" width={2560} height={1707} priority />
        </div>
      </div>
    </section>
  );
}
