export default function Contact() {
  return (
    <section id="kontakt" className="w-full py-16 bg-white">
      <div className="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl leading-[3.5rem] font-bold text-gray-900">Chcete se nás na něco zeptat?</h2>
          <p className="text-gray-500 text-xl">Potřebujete poradit nebo hledáte konkrétní řešení? Napište nám, rádi na všechny vaše dotazy odpovíme.</p>
        </div>
        <form className="grid gap-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full flex flex-col">
              <label className="text-primary-800 mb-2" htmlFor="name">
                Jméno a příjmení <em className="text-secondary-400 font-extrabold not-italic">*</em>
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className=" p-4 bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
                autoComplete="off"
                id="name"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="text-primary-800 mb-2" htmlFor="email">
                E-mail <em className="text-secondary-400 font-extrabold not-italic">*</em>
              </label>
              <input
                type="email"
                minLength={5}
                maxLength={150}
                required
                className=" p-4 bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
                autoComplete="off"
                id="email"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-primary-800 mb-2" htmlFor="message">
              Text zprávy <em className="text-secondary-400 font-extrabold not-italic">*</em>
            </label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name="message"
              className="w-full p-4 bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full flex items-center">
              <input
                type="checkbox"
                name="agreement"
                className="p-4 mr-4 bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
              />
              <label className="font-normal text-primary-800" htmlFor="agreement">
                Souhlasím s{' '}
                <a href="/" className="underline hover:text-primary-600">
                  podmínkami užití a zpracováním osobních údajů
                </a>
                . <em className="text-secondary-400 font-extrabold not-italic">*</em>
              </label>
            </div>
            <button
              type="submit"
              className="uppercase w-40 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-center text-white rounded-sm bg-primary-600 hover:bg-primary-700 focus:bg-primary-800"
            >
              <span>Odeslat</span>
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
