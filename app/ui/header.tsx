import Logo from './solarsoft-logo';

export default function Header() {
  const links = [
    { name: 'Úvod', href: '/' },
    {
      name: 'Naše řešení',
      href: '/#reseni',
    },
    {
      name: 'Kontakt',
      href: '/#kontakt',
    },
  ];

  return (
    <header className="w-full bg-white shadow-[0px_2.8px_5.6px_rgba(171,190,209,0.2)] sticky top-0 opacity-1 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-2.5 lg:py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {Logo({ size: 'default' })}
          <div className="flex flex-wrap lg:gap-7">
            <div className="flex items-center lg:order-2">
              <a
                href="#kontakt"
                className="uppercase text-white bg-primary-600 hover:bg-primary-700 focus:bg-primary-800 font-semibold rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden sm:block"
              >
                Konzultace zdarma
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Otevřít menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                {links.map((link) => {
                  return (
                    <li key={link.name}>
                      <a
                        key={link.name}
                        href={link.href}
                        className="block py-2 pr-4 pl-3  text-primary-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
