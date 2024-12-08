import React from 'react';
import Logo from '../components/Logo';

const PrivacyPolicy = () => {
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
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4 text-primary-900">Zásady ochrany osobních údajů</h1>
          <p className="text-gray-500 text-base mb-2">
            podle čl. 12 Nařízení Evropského parlamentu a Rady (EU) č. 2016/679 ze dne 27. dubna 2016, obecného nařízení o ochraně osobních údajů (dále jen
            „Nařízení“)
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Informace pro osoby, které poskytly souhlas a pro obchodní partnery:</h2>
          <p className="text-gray-500 text-base mb-2">V souladu s čl. 12 GDPR Vás tímto informujeme o zpracování Vašich osobních údajů a o Vašich právech:</p>

          <h3 className="text-lg font-semibold mt-6">Informace o správci osobních údajů</h3>
          <p className="text-gray-500 text-base mb-2">
            Firma: <strong>Solarsoft s.r.o.</strong>, sídlo: Náchodská 24, Poříčí 541 03 Trutnov, IČO: 21450404. Bližší informace o ochraně osobních údajů lze
            získat na telefonním čísle +420 603 123 456 nebo e-mailu info@solarsoft.cz.
          </p>
          <p className="text-gray-500 text-base mb-2">(dále jen „Správce”)</p>

          <h3 className="text-lg font-semibold mt-6">Kontaktní údaje pověřence pro ochranu osobních údajů</h3>
          <p className="text-gray-500 text-base mb-2">Pověřenec pro ochranu osobních údajů nebyl u naší společnosti jmenován.</p>

          <h3 className="text-lg font-semibold mt-6">Kategorie osobních údajů, účel jejich zpracování a právní základ zpracování</h3>
          <p className="text-gray-500 text-base mb-2">
            Zpracováváme Vaše osobní údaje, k jejichž zpracování jste nám udělili souhlas, a to za účelem uvedeným v souhlasu. Právním základem zpracování je
            udělený souhlas.
          </p>

          <h3 className="text-lg font-semibold mt-6">Popis kategorií příjemců</h3>
          <p className="text-gray-500 text-base mb-2">
            Osobní údaje osob a informace mohou být poskytnuty orgánům veřejné správy a dalším subjektům v souvislosti s plněním zákonem stanovených práv a
            povinností Správce, poskytovatelům údržby informačního systému správce, jakož i soukromoprávním subjektům podle pokynů a potřeb subjektu údajů.
          </p>
          <p className="text-gray-500 text-base mb-2">
            Zpracování osobních údajů provádí Správce. Zpracování osobních údajů však mou pro Správce provádět i dále uvedení zpracovatelé, s nimiž má správce
            uzavřenu smlouvu o zpracování osobních údajů podle čl. 28 Nařízení a kteří poskytují dostatečné a věrohodné záruky o technickém a organizačním
            zabezpečení osobních údajů. Seznam zpracovatelů je k dispozici z důvodu ochrany obchodního tajemství jen po uplatnění práva na přístup k informacím.
            Osobní údaje nebudou poskytovány příjemcům ze třetích zemí nebo mezinárodním organizacím.
          </p>

          <h3 className="text-lg font-semibold mt-6">Informace o plánovaných lhůtách pro výmaz jednotlivých kategorií osobních údajů</h3>
          <p className="text-gray-500 text-base mb-2">
            Osobní údaje budou vymazány bez zbytečného odkladu po naplnění účelu, pro který byly tyto údaje zpracovány, nebo bez zbytečného odkladu po odvolání
            souhlasu subjektem údajů.
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo na přístup k osobním údajům</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má právo získat od firmy potvrzení, zda osobní údaje, které se jí týkají, jsou či nejsou zpracovávány, a pokud je tomu tak, má právo získat
            přístup k těmto osobním údajům a k informacím dle čl. 15.
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo na opravu</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má právo dle čl. 16 na to, aby firma bez zbytečného odkladu opravila nepřesné osobní údaje, které se jí týkají. S přihlédnutím k účelům
            zpracování má osoba právo na doplnění neúplných osobních údajů, a to i poskytnutím dodatečného prohlášení.
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo na výmaz („právo být zapomenut“)</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má za podmínek uvedených v čl. 17 právo na to, aby firma bez zbytečného odkladu vymazala osobní údaje, které se dané osoby týkají, a firma má
            za určitých podmínek povinnost osobní údaje bez zbytečného odkladu vymazat.
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo na omezení zpracování</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má právo na to, aby firma v případech uvedených v čl. 18 omezila zpracování jejích osobních údajů.
          </p>

          <h3 className="text-lg font-semibold mt-6">Oznamovací povinnost ohledně opravy nebo výmazu osobních údajů nebo omezení zpracování</h3>
          <p className="text-gray-500 text-base mb-2">
            Firma informuje osobu, pokud o to požádá, že příjemci osobních údajů byli informováni o veškerých opravách nebo výmazech osobních údajů nebo o
            omezení zpracování osobních údajů (čl. 19).
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo na přenositelnost údajů</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má právo za určených podmínek získat své osobní údaje, jež poskytla firmě, daném formátu, a právo předat tyto údaje jinému správci osobních
            údajů (více čl. 20).
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo vznést námitku</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má dle čl. 21 z důvodů týkajících se její konkrétní situace právo kdykoli vznést námitku proti zpracování svých osobních údajů na základě čl.
            6 odst. 1 písm. e) nebo f) včetně profilování (automatizované zpracování) založeného na těchto ustanoveních. Firma osobní údaje dále nezpracovává,
            pokud neprokáže závažné oprávněné důvody pro zpracování, které převažují nad zájmy nebo právy a svobodami osoby, nebo pro určení, výkon nebo
            obhajobu právních nároků. Pokud se osobní údaje zpracovávají pro účely přímého marketingu, má osoba právo vznést kdykoli námitku proti zpracování
            svých osobních údajů (včetně profilování) pro tento marketing. Pokud osoba vznese námitku proti zpracování pro účely přímého marketingu, nebudou již
            osobní údaje pro tyto účely zpracovávány.
          </p>

          <h3 className="text-lg font-semibold mt-6">Automatizované individuální rozhodování včetně profilování</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba má právo nebýt předmětem žádného rozhodnutí založeného výhradně na automatizovaném zpracování, včetně profilování, které má pro ni právní
            účinky nebo se jí obdobným způsobem významně dotýká, dle podmínek čl. 22.
          </p>

          <h3 className="text-lg font-semibold mt-6">Právo podat si stížnost dozorovému úřadu</h3>
          <p className="text-gray-500 text-base mb-2">
            Osoba může podat stížnost u Úřadu pro ochranu osobních údajů. Více informací o právech klienta je k dispozici na internetových stránkách Úřadu pro
            ochranu osobních údajů: https://www.uoou.cz/6-prava-subjektu-udaj/d-27276
          </p>

          <h3 className="text-lg font-semibold mt-6">INFORMACE O ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</h3>
          <p className="text-gray-500 text-base mb-2">
            podle čl. 12 Nařízení Evropského parlamentu a Rady (EU) č. 2016/679 ze dne 27. dubna 2016, obecného nařízení o ochraně osobních údajů (dále jen
            „Nařízení“):
          </p>
          <p className="text-gray-500 text-base mb-2">Další informace pro obchodní partnery:</p>
          <p className="text-gray-500 text-base mb-2">
            Kategorie osobních údajů, účel jejich zpracování a právní základ zpracování Zpracováváme Vaše identifikační a kontaktní údaje sloužící k Vaší
            jednoznačné a nezaměnitelné identifikaci (titul, jméno, příjmení, rodné číslo, datum narození, adresu trvalého pobytu, případně kontaktní adresu), a
            dále údaje umožňující kontakt s Vámi (telefonní číslo, adresa datové schránky, e-mailová adresa). V případě, že naším obchodním partnerem je
            právnická osoba, zpracováváme tyto osobní údaje ve vztahu k osobám, s nimiž komunikujeme jako s kontaktními osobami našeho obchodního partnera.
          </p>
          <p className="text-gray-500 text-base mb-2">
            Zpracováváme dále údaje o Vašem bankovním spojení. Pokud nám v průběhu trvání naší spolupráce poskytnete další údaje potřebné k plnění smlouvy,
            které budou mít charakter osobních údajů ve smyslu Nařízení, vztahuje se na ně tato informace také.
          </p>
          <p className="text-gray-500 text-base mb-2">
            Účelem zpracování osobních údajů je plnění povinností Správce vyplývajících z právního vztahu se subjektem údajů a obecně závazných právních
            předpisů.
          </p>
          <p className="text-gray-500 text-base mb-2">
            Právním základem zpracování osobních údajů je plnění smlouvy a zákonem stanovené povinnosti, např. registrační a oznamovací povinnosti vůči
            příslušným úřadům.
          </p>
          <p className="text-gray-500 text-base mb-2">
            Dochází-li ke zveřejnění fotografií, videozáznamů a projevů osobní povahy na webových stránkách a sociálních sítích Správce, právním základem
            zpracování těchto osobních údajů je souhlas subjektu údajů.
          </p>
          <p className="text-gray-500 text-base mb-2">
            Informace o plánovaných lhůtách pro výmaz jednotlivých kategorií osobních údajů Osobní údaje budou zpracovávány po dobu platnosti právního vztahu
            Správce a subjektu údajů a po jeho skončení s nimi bude naloženo dle platné právní úpravy, zejm. zákona
          </p>
          <p className="text-gray-500 text-base mb-2">
            499/2004 Sb. (zákon o archivnictví a spisové službě a o změně některých zákonů) a Nařízení. Je-li právním základem zpracování osobních údajů souhlas
            subjektu údajů, osobní údaje budou vymazány bez zbytečného odkladu po naplnění účelu, pro který byly tyto údaje zpracovány, nebo bez zbytečného
            odkladu po odvolání souhlasu subjektem údajů. Údaje na kamerovém záznamu se automaticky promazávají vždy po 14 dnech.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
