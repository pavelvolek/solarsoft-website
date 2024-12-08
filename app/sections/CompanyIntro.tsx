import Heading from '../components/Heading';
import Section from '../components/Section';
import Text from '../components/Text';
import Tiles, { Tile } from '../components/Tiles';

export default function CompanyIntro() {
  const tiles: Tile[] = [
    {
      heading: 'Kompletní řešení',
      text: 'Dodáme dispečerské řízení na klíč, od návrhu až po implementaci a oživení vaší elektrárny.',
      color: 'bg-primary-600',
      iconPath: (
        <g>
          <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
          <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
          <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
        </g>
      ),
    },
    {
      heading: 'Návrh na míru',
      text: 'Vytvoříme návrh a projektovou dokumentaci přímo na míru vaší konkrétní aplikace.',
      color: 'bg-emerald-600',
      iconPath: (
        <path d="m4 6a2.982 2.982 0 0 1 -2.122-.879l-1.544-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.604-3.431a1 1 0 0 1 1.378 1.448l-3.589 3.414a2.964 2.964 0 0 1 -2.1.862zm20-2a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.589-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1.023 1.023 0 0 1 -1.414 0l-1.59-1.585a1 1 0 0 0 -1.414 1.414l1.585 1.585a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.585-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1 1 0 0 1 -1.456-.04l-1.585-1.414a1 1 0 0 0 -1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1z" />
      ),
    },
    {
      heading: 'Rychlá realizace',
      text: 'Nainstalujeme rozvaděče, včetně nastavení komunikace se střídači a distributory.',
      color: 'bg-rose-600',
      iconPath: (
        <path d="m16.932,21.886c.201.515-.053,1.095-.568,1.296-1.39.543-2.858.818-4.364.818C5.383,24,0,18.617,0,12S5.383,0,12,0c4.531,0,8.627,2.508,10.691,6.545.251.491.056,1.094-.436,1.346-.492.25-1.094.056-1.346-.436-1.72-3.365-5.134-5.455-8.91-5.455C6.486,2,2,6.486,2,12s4.486,10,10,10c1.255,0,2.479-.229,3.636-.682.515-.201,1.095.054,1.295.567ZM5,8v2c0,.553.448,1,1,1s1-.447,1-1v-2c0-.553-.448-1-1-1s-1,.447-1,1Zm4,0v2c0,.553.448,1,1,1s1-.447,1-1v-2c0-.553-.448-1-1-1s-1,.447-1,1Zm4,0v2c0,.553.448,1,1,1s1-.447,1-1v-2c0-.553-.448-1-1-1s-1,.447-1,1Zm10.768,8.684c-.273-.43-.74-.686-1.249-.686h-4.154l2.51-4.512c.269-.483.095-1.092-.388-1.36-.481-.269-1.091-.094-1.36.388l-2.97,5.342c-.23.463-.206,1.002.066,1.441.272.438.743.701,1.259.701h4.153l-2.509,4.517c-.269.482-.094,1.091.388,1.359.154.086.321.126.485.126.352,0,.692-.186.875-.515l2.987-5.381c.215-.461.18-.992-.093-1.421Z" />
      ),
    },
    {
      heading: 'Monitoring',
      text: 'Naše aplikace umožňuje efektivní správu a automatická upozornění přímo na mobil.',
      color: 'bg-violet-600',
      iconPath: (
        <path d="m24 19v-15a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v15h11v2h-5v2h12v-2h-5v-2zm-22-15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13h-20zm12.965 5h5.035v2h-3.965l-2.659 3.988-3-6-1.341 2.012h-5.035v-2h3.965l2.659-3.988 3 6z" />
      ),
    },
  ];

  return (
    <Section id="nase-reseni" fullwidth className="py-24 bg-primary-50 shadow-inner">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="max-w-screen-lg mx-auto mb-8 lg:mb-16">
          <Heading>Dispečerské řízení od Solarsoftu</Heading>
          <Text>
            Všechny elektrárny s instalovaným výkonem přesahujícím 100 kWp musí být dle legislativy vybaveny řídící jednotkou pro dispečerské řízení, která{' '}
            <strong className="text-primary-400 font-medium">umožňuje vzdálenou regulaci a zajišťuje stabilitu distribuční soustavy</strong>. Poskytujeme{' '}
            <strong className="text-primary-400 font-medium">kompletní řešení dispečerského řízení</strong>, přizpůsobené vašim specifickým požadavkům.
          </Text>
        </div>
        <Tiles tiles={tiles} />
      </div>
    </Section>
  );
}
