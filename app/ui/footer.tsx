import Logo from './solarsoft-logo';

export default function Footer() {
  return (
    <footer className="w-full pb-8 pt-8 bg-primary-50 ">
      <div className="px-4 mx-auto max-w-screen-xl">
        <hr className="my-6 border-primary-100 sm:mx-auto lg:my-8" />
        <div className="pt-10 flex justify-between">
          <div className="flex flex-col justify-between ">
            <div>
              {Logo({ size: 'large' })}

              <ul className="text-gray-600 mt-6">
                <li className="my-1">
                  <a href="#dispecerske-rizeni" className="hover:underline hover:text-primary-900">
                    Dispečerské řízení pro fotovoltaické elektrárny.
                  </a>
                </li>
                <li className="my-1">
                  <a href="#energeticky-management" className="hover:underline hover:text-primary-900">
                    Energetický management.
                  </a>
                </li>
                <li className="my-1">
                  <a href="#ridici-jednotka" className="hover:underline hover:text-primary-900">
                    Řídící jednotky RTU.
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 lg:mt-10">
              © 2024{' '}
              <a href="https://solarsoft.cz" className="hover:underline">
                Solarsoft s.r.o.
              </a>
            </p>
          </div>
          <div className="flex gap-20">
            <div>
              <h2 className="mb-6 text-sm font-extrabold text-primary-800 uppercase">Společnost</h2>
              <ul className="text-gray-600">
                <li className="my-2">Solarsoft s.r.o.</li>
                <li className="my-2">Ičo: 21450404</li>
                <li className="my-2">Dič: CZ21450404</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-extrabold text-primary-800 uppercase">Kontakt</h2>
              <ul className="text-gray-600">
                <li className="my-2">
                  <a href="mailto:info@solarsoft.cz" className="flex space-x-3 items-start hover:underline hover:text-primary-900">
                    <svg className="fill-secondary-400 w-[18px] h-[18px] mt-[3px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 1H5C3.6744 1.00159 2.40356 1.52888 1.46622 2.46622C0.528882 3.40356 0.00158786 4.6744 0 6L0 18C0.00158786 19.3256 0.528882 20.5964 1.46622 21.5338C2.40356 22.4711 3.6744 22.9984 5 23H19C20.3256 22.9984 21.5964 22.4711 22.5338 21.5338C23.4711 20.5964 23.9984 19.3256 24 18V6C23.9984 4.6744 23.4711 3.40356 22.5338 2.46622C21.5964 1.52888 20.3256 1.00159 19 1ZM5 3H19C19.5988 3.00118 20.1835 3.18151 20.679 3.5178C21.1744 3.85409 21.5579 4.33095 21.78 4.887L14.122 12.546C13.5584 13.1073 12.7954 13.4225 12 13.4225C11.2046 13.4225 10.4416 13.1073 9.878 12.546L2.22 4.887C2.44215 4.33095 2.82561 3.85409 3.32105 3.5178C3.81648 3.18151 4.40121 3.00118 5 3ZM19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V7.5L8.464 13.96C9.40263 14.8963 10.6743 15.422 12 15.422C13.3257 15.422 14.5974 14.8963 15.536 13.96L22 7.5V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21Z" />
                    </svg>
                    <span>info@solarsoft.cz</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="tel:+420603123456" className="flex space-x-3 items-start hover:underline hover:text-primary-900">
                    <svg className="fill-secondary-400  w-[18px] h-[18px] mt-[3px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.17 1.82L21.12 0.910003C19.91 -0.299998 17.95 -0.299998 16.74 0.910003C16.71 0.940003 14.86 3.35 14.86 3.35C13.72 4.55 13.72 6.44 14.86 7.63L16.02 9.09C14.56 12.4 12.29 14.68 9.09001 16.04L7.63 14.87C6.44 13.72 4.54 13.72 3.35 14.87C3.35 14.87 0.940004 16.72 0.910004 16.75C-0.299996 17.96 -0.299996 19.92 0.860004 21.08L1.86 22.23C3.01 23.38 4.56 24.01 6.24 24.01C13.88 24.01 24 13.88 24 6.25C24 4.58 23.37 3.02 22.17 1.83V1.82ZM6.24 22C5.1 22 4.05 21.58 3.33 20.85L2.33 19.7C1.92 19.29 1.9 18.62 2.29 18.19C2.29 18.19 4.68 16.35 4.71 16.32C5.12 15.91 5.84 15.91 6.26 16.32C6.29 16.35 8.3 17.96 8.3 17.96C8.58001 18.18 8.95 18.24 9.28 18.11C13.42 16.53 16.39 13.57 18.1 9.3C18.23 8.97 18.18 8.59 17.95 8.3C17.95 8.3 16.34 6.28 16.32 6.26C15.89 5.83 15.89 5.14 16.32 4.71C16.35 4.68 18.19 2.29 18.19 2.29C18.62 1.9 19.29 1.91 19.75 2.37L20.8 3.28C21.57 4.05 22 5.1 22 6.24C22 13.2 12.23 22 6.24 22Z" />
                    </svg>
                    <span>+420 603 123 456</span>
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://maps.app.goo.gl/jeyTvwZWQwtjbfrE8"
                    target="_blank"
                    className="flex space-x-3 items-start hover:underline hover:text-primary-900"
                  >
                    <svg className="fill-secondary-400  w-[18px] h-[18px] mt-[3px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.958 24.008L11.2609 23.4105C10.2999 22.6058 1.909 15.3591 1.909 10.0583C1.909 4.50839 6.40811 0.00927734 11.958 0.00927734C17.5079 0.00927734 22.007 4.50839 22.007 10.0583C22.007 15.3592 13.6161 22.6059 12.6591 23.4145L11.958 24.008ZM11.958 2.18217C7.61021 2.18709 4.08686 5.71045 4.08193 10.0582C4.08193 13.3883 9.24437 18.7081 11.958 21.1429C14.6717 18.7071 19.8341 13.3843 19.8341 10.0582C19.8292 5.71045 16.3059 2.18714 11.958 2.18217Z" />
                      <path d="M11.958 14.0416C9.75808 14.0416 7.97467 12.2582 7.97467 10.0583C7.97467 7.85836 9.75808 6.07495 11.958 6.07495C14.158 6.07495 15.9414 7.85836 15.9414 10.0583C15.9414 12.2582 14.158 14.0416 11.958 14.0416ZM11.958 8.06658C10.858 8.06658 9.96634 8.95828 9.96634 10.0582C9.96634 11.1582 10.858 12.0499 11.958 12.0499C13.058 12.0499 13.9497 11.1582 13.9497 10.0582C13.9497 8.95828 13.058 8.06658 11.958 8.06658Z" />
                    </svg>
                    <address className="not-italic">
                      Náchodská 24, Poříčí
                      <br />
                      541 03 Trutnov
                    </address>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-primary-100 sm:mx-auto lg:my-8" /> */}
        {/* <div className="sm:text-left">
          <span className="text-sm text-gray-500">
            © 2024{' '}
            <a href="https://solarsoft.cz" className="hover:underline">
              Solarsoft s.r.o.
            </a>
          </span>
        </div> */}
      </div>
    </footer>
  );
}
