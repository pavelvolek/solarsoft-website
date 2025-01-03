// import NaseReseni from './ui/nase-reseni';
// import Contact from './ui/contact-v2';
// import EnergyManagement from './ui/energy-management';
// import Footer from './ui/footer';
// import Header from './ui/header';
// import HeaderStrip from './ui/header-strip';
// import HeroSection from './ui/hero-section';
// import DispecerskeRizeni from './ui/dispecerske-rizeni';
// import SectionRTU from './ui/section-rtu';
import Logo from './ui/solarsoft-logo';

export default function Home() {
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-center bg-[#f3f3f5]">
  //     {HeaderStrip()}
  //     {Header()}
  //     {HeroSection()}
  //     <NaseReseni />
  //     <DispecerskeRizeni />
  //     <SectionRTU />
  //     {EnergyManagement()}
  //     {Contact()}
  //     {Footer()}
  //   </main>
  // );

  // temp intro
  return (
    <main className="flex min-h-screen flex-col items-center justify-stretch bg-[#f3f3f5]">
      <nav className="w-full mx-auto px-4 lg:px-6 py-2 lg:py-6 flex items-start justify-between">
        {Logo({ size: 'default' })}
        <div className="flex justify-end gap-6 items-center">
          <a href="tel:+420603123456" className="flex space-x-2 items-center text-sm text-gray-500 hover:text-primary-900">
            <svg className="fill-current text-secondary-500 w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.17 1.82L21.12 0.910003C19.91 -0.299998 17.95 -0.299998 16.74 0.910003C16.71 0.940003 14.86 3.35 14.86 3.35C13.72 4.55 13.72 6.44 14.86 7.63L16.02 9.09C14.56 12.4 12.29 14.68 9.09001 16.04L7.63 14.87C6.44 13.72 4.54 13.72 3.35 14.87C3.35 14.87 0.940004 16.72 0.910004 16.75C-0.299996 17.96 -0.299996 19.92 0.860004 21.08L1.86 22.23C3.01 23.38 4.56 24.01 6.24 24.01C13.88 24.01 24 13.88 24 6.25C24 4.58 23.37 3.02 22.17 1.83V1.82ZM6.24 22C5.1 22 4.05 21.58 3.33 20.85L2.33 19.7C1.92 19.29 1.9 18.62 2.29 18.19C2.29 18.19 4.68 16.35 4.71 16.32C5.12 15.91 5.84 15.91 6.26 16.32C6.29 16.35 8.3 17.96 8.3 17.96C8.58001 18.18 8.95 18.24 9.28 18.11C13.42 16.53 16.39 13.57 18.1 9.3C18.23 8.97 18.18 8.59 17.95 8.3C17.95 8.3 16.34 6.28 16.32 6.26C15.89 5.83 15.89 5.14 16.32 4.71C16.35 4.68 18.19 2.29 18.19 2.29C18.62 1.9 19.29 1.91 19.75 2.37L20.8 3.28C21.57 4.05 22 5.1 22 6.24C22 13.2 12.23 22 6.24 22Z" />
            </svg>
            <span>+420 603 123 456</span>
          </a>
          <a href="mailto:info@solarsoft.cz" className="flex space-x-2 items-center text-sm text-gray-500 hover:text-primary-900">
            <svg className="fill-current text-secondary-500 w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.958 24.008L11.2609 23.4105C10.2999 22.6058 1.909 15.3591 1.909 10.0583C1.909 4.50839 6.40811 0.00927734 11.958 0.00927734C17.5079 0.00927734 22.007 4.50839 22.007 10.0583C22.007 15.3592 13.6161 22.6059 12.6591 23.4145L11.958 24.008ZM11.958 2.18217C7.61021 2.18709 4.08686 5.71045 4.08193 10.0582C4.08193 13.3883 9.24437 18.7081 11.958 21.1429C14.6717 18.7071 19.8341 13.3843 19.8341 10.0582C19.8292 5.71045 16.3059 2.18714 11.958 2.18217Z" />
              <path d="M11.958 14.0416C9.75808 14.0416 7.97467 12.2582 7.97467 10.0583C7.97467 7.85836 9.75808 6.07495 11.958 6.07495C14.158 6.07495 15.9414 7.85836 15.9414 10.0583C15.9414 12.2582 14.158 14.0416 11.958 14.0416ZM11.958 8.06658C10.858 8.06658 9.96634 8.95828 9.96634 10.0582C9.96634 11.1582 10.858 12.0499 11.958 12.0499C13.058 12.0499 13.9497 11.1582 13.9497 10.0582C13.9497 8.95828 13.058 8.06658 11.958 8.06658Z" />
            </svg>
            <span>info@solarsoft.cz</span>
          </a>
        </div>
      </nav>
      <section className="flex-1 flex flex-col items-center justify-center">
        <div className="mx-auto place-self-center lg:col-span-8">
          <h1 className="max-w-2xl mb-2 text-2xl font-bold text-primary-900 lg:text-4xl lg:mb-4">
            Dispečerské řízení
            <br /> pro fotovoltaické elektrárny
          </h1>
          <h2 className="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-10 lg:text-lg  lg:leading-[2rem]">
            Poskytujeme kompletní řešení dispečerského řízení na klíč, včetne dodávky řídících jednotek Solarsoft RTU, splňujících požadavky distributorů na
            dispečerské řízení dle platných legislativ a vysokých nároků na kyberbezpečnost.
          </h2>
          <p className="font-normal text-gray-500 lg:text-lg  lg:leading-[2rem]">
            Chete se dozvědět více?{' '}
            <a href="mailto:info@solarsoft.cz" className="text-secondary-500 hover:text-secondary-800">
              Napište nám
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
