export default function Contact() {
  return (
    <section id="kontakt" className="w-full bg-white bg-split-background pb-10">
      <div className="relative py-12 px-20 mx-auto max-w-screen-lg text-white bg-primary-800 rounded-lg overflow-hidden z-0">
        <svg className="absolute top-[-15%] left-[-15%] right-[-15%] bottom-[-15%] -z-10" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.4208 12.0092C29.4238 9.72899 28.9944 7.50382 27.5166 5.68823C25.8309 3.61742 23.0983 2.83495 20.6363 3.36984C19.3143 3.65716 18.0703 4.32501 17.1075 5.37646C16.7453 5.77382 16.4228 6.20632 16.1416 6.66327C15.2674 8.08915 14.8395 9.68772 14.3963 11.2817C14.1411 12.2002 13.9455 13.16 13.4778 13.999C13.163 14.5644 12.7213 15.0718 12.1528 15.3805C10.7193 16.1554 9.03362 15.2797 8.5079 13.8232C8.29699 13.2348 8.24809 12.6128 8.23128 11.9908H11.9908V0H0V11.9908H3.74427C3.73816 12.9903 3.80846 14.002 4.04381 14.9419C4.3082 15.9812 4.76668 16.973 5.3948 17.8441C6 18.6862 6.75497 19.3892 7.68416 19.863C9.67855 20.8808 12.2262 21.0092 14.2404 19.9562C16.0866 18.9903 17.3367 17.106 18.0214 15.1864C18.0795 15.0245 18.1345 14.8594 18.1849 14.6943C18.4417 13.8538 18.6648 13.001 18.8956 12.1544C19.1936 11.0815 19.5008 9.91849 20.2603 9.06877C20.8029 8.46205 21.4615 8.16862 22.2348 8.18849C23.1411 8.21294 23.9985 8.757 24.4524 9.5349C24.8849 10.2761 24.9322 11.1595 24.946 12.0092H21.1758V24H33.1666V12.0092"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>

        <div className="z-10">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl tracking-tight font-bold">Chcete se nás na něco zeptat?</h2>
            <p className="sm:text-base font-normal">Potřebujete poradit nebo hledáte konkrétní řešení? Napište nám, rádi na vaše dotazy odpovíme.</p>
          </div>
          <form className="grid gap-4 text-gray-500">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  minLength={3}
                  maxLength={150}
                  required
                  className="p-2 rounded-sm bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
                  autoComplete="off"
                  id="name"
                  placeholder="Jméno a příjmení"
                />
              </div>
              <div className="w-full flex flex-col">
                <input
                  type="email"
                  minLength={5}
                  maxLength={150}
                  required
                  className="p-2 rounded-sm bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
                  autoComplete="off"
                  id="email"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <textarea
                rows={4}
                required
                minLength={10}
                maxLength={500}
                name="message"
                placeholder="Text zprávy"
                className="w-full p-2 rounded-sm bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  name="agreement"
                  className="p-2 rounded-sm mr-3 bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
                />
                <label className="text-sm font-normal text-white" htmlFor="agreement">
                  Souhlasím se zpracováním{' '}
                  <a href="/" className="underline text-primary-200 hover:text-primary-100">
                    osobních údajů a podmínkami užití
                  </a>{' '}
                  <em className="text-secondary-200">*</em>
                </label>
              </div>
              <button
                type="submit"
                className="uppercase w-60 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-center rounded-sm bg-secondary-400 hover:bg-secondary-500 focus:bg-secondary-700 text-white"
              >
                <span>Odeslat</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
