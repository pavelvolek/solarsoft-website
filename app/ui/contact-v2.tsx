export default function Contact() {
  return (
    <section id="kontakt" className="w-full bg-white bg-bg">
      <div className="py-16 px-16 mx-auto max-w-screen-lg text-white bg-primary-800 bg-gradient rounded-lg">
        <div className="max-w-screen-md mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Chcete se nás na něco zeptat?</h2>
          <p className="sm:text-lg font-medium">Potřebujete poradit nebo hledáte konkrétní řešení? Napište nám, rádi na všechny vaše dotazy odpovíme.</p>
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
                className="p-2 rounded-sm mr-4 bg-primary-50 border border-primary-100 focus:border-primary-300 focus:ring-0 focus:outline-none"
              />
              <label className="font-medium text-white" htmlFor="agreement">
                Souhlasím se zpracováním{' '}
                <a href="/" className="font-semibold underline text-primary-200 hover:text-primary-100">
                  osobních údajů a podmínkami užití
                </a>{' '}
                <em className="text-secondary-200">*</em>
              </label>
            </div>
            <button
              type="submit"
              className="uppercase w-60 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-center rounded-sm bg-secondary-400 hover:bg-secondary-500 focus:bg-secondary-700"
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
