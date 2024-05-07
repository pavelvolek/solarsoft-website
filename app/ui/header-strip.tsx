export default function HeaderStrip() {
  return (
    <section className="w-full bg-primary-800">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-2">
        <div className="flex justify-end gap-6 items-center mx-auto max-w-screen-xl">
          <a href="tel:+420603123456" className="flex space-x-2 items-center text-sm text-primary-50 hover:text-primary-100">
            <svg className="fill-current w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.082 11.0827C21.8385 11.0827 21.605 10.9862 21.4329 10.8143C21.2607 10.6425 21.164 10.4093 21.164 10.1663C21.1621 8.22238 20.3877 6.35865 19.0108 4.98411C17.634 3.60956 15.7672 2.83649 13.82 2.83455C13.5765 2.83455 13.343 2.73799 13.1709 2.56612C12.9987 2.39425 12.902 2.16114 12.902 1.91808C12.902 1.67502 12.9987 1.44191 13.1709 1.27004C13.343 1.09817 13.5765 1.00161 13.82 1.00161C16.2539 1.00428 18.5873 1.9707 20.3083 3.68883C22.0293 5.40696 22.9973 7.73648 23 10.1663C23 10.4093 22.9033 10.6425 22.7311 10.8143C22.559 10.9862 22.3255 11.0827 22.082 11.0827ZM19.328 10.1663C19.328 8.70791 18.7477 7.30927 17.7147 6.27804C16.6818 5.24682 15.2808 4.66748 13.82 4.66748C13.5765 4.66748 13.343 4.76404 13.1709 4.93591C12.9987 5.10778 12.902 5.34088 12.902 5.58395C12.902 5.82701 12.9987 6.06012 13.1709 6.23199C13.343 6.40386 13.5765 6.50041 13.82 6.50041C14.7939 6.50041 15.7279 6.88664 16.4165 7.57412C17.1051 8.2616 17.492 9.19403 17.492 10.1663C17.492 10.4093 17.5887 10.6425 17.7609 10.8143C17.933 10.9862 18.1665 11.0827 18.41 11.0827C18.6535 11.0827 18.887 10.9862 19.0591 10.8143C19.2313 10.6425 19.328 10.4093 19.328 10.1663ZM21.332 21.3142L22.1674 20.3528C22.6991 19.8203 22.9977 19.099 22.9977 18.3471C22.9977 17.5952 22.6991 16.874 22.1674 16.3414C22.1389 16.313 19.9302 14.6166 19.9302 14.6166C19.4001 14.1129 18.696 13.8324 17.9641 13.8334C17.2323 13.8344 16.5289 14.1169 16.0002 14.6221L14.2505 16.094C12.8223 15.5039 11.5249 14.6379 10.4328 13.5458C9.34079 12.4537 8.4756 11.1569 7.88696 9.73004L9.35576 7.98876C9.86224 7.46103 10.1455 6.75874 10.1467 6.02789C10.1479 5.29703 9.86693 4.59382 9.36219 4.06445C9.36219 4.06445 7.66114 1.86218 7.63268 1.83376C7.10892 1.30748 6.39878 1.00805 5.6557 1.00016C4.91262 0.992272 4.19626 1.27656 3.66141 1.79161L2.60571 2.70807C-3.63118 9.93167 9.79916 23.236 17.2735 22.9968C18.0283 23.0012 18.7763 22.8545 19.4733 22.5655C20.1704 22.2765 20.8024 21.8511 21.332 21.3142Z" />
            </svg>
            <span>603 123 456</span>
          </a>
          <a href="mailto:info@solarsoft.cz" className="flex space-x-2 items-center text-sm text-primary-50 hover:text-primary-100">
            <svg className="fill-current w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.954 5.54199L15.536 13.96C14.5974 14.8962 13.3257 15.422 12 15.422C10.6743 15.422 9.40263 14.8962 8.464 13.96L0.046 5.54199C0.032 5.69999 0 5.84299 0 5.99999V18C0.00158786 19.3256 0.528882 20.5964 1.46622 21.5338C2.40356 22.4711 3.6744 22.9984 5 23H19C20.3256 22.9984 21.5964 22.4711 22.5338 21.5338C23.4711 20.5964 23.9984 19.3256 24 18V5.99999C24 5.84299 23.968 5.69999 23.954 5.54199Z" />
              <path d="M14.122 12.546L23.256 3.411C22.8135 2.67732 22.1895 2.07004 21.444 1.64773C20.6985 1.22542 19.8568 1.00234 19 1H5.00002C4.14324 1.00234 3.30152 1.22542 2.55605 1.64773C1.81057 2.07004 1.1865 2.67732 0.744019 3.411L9.87802 12.546C10.4416 13.1073 11.2046 13.4225 12 13.4225C12.7954 13.4225 13.5584 13.1073 14.122 12.546Z" />
            </svg>
            <span>info@solarsoft.cz</span>
          </a>
        </div>
      </nav>
    </section>
  );
}