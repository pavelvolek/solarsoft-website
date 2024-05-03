import Logo from './solarsoft-logo';

export default function Footer() {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          {Logo({ size: 'large' })}
          <p className="text-gray-600 mt-6 mb-6">
            Dispečerské řízení pro fotovoltaické elektrárny. <br /> Energetický management.
          </p>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Společnost</h2>
          <ul className="text-gray-600">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                O nás
              </a>
            </li>
            <li>
              <a href="3" className="hover:underline">
                Obchodní podmínky
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Kontakt</h2>
          <ul className="text-gray-600">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                info@solarsoft.cz
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                603 123 456
              </a>
            </li>
            <li className="mb-4">
              <address className="not-italic">
                Náchodská 24, Poříčí
                <br />
                541 03 Trutnov
              </address>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{' '}
          <a href="https://flowbite.com" className="hover:underline">
            Solarsoft s.r.o.
          </a>
          . Společnost je zapsána u Krajského soudu v Hradci Králové. IČ: 21450404
        </span>
      </div>
    </div>
  );
}
