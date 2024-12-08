import Image from 'next/image';
import Heading from '../components/Heading';
import Section from '../components/Section';

export default function Scheme() {
  return (
    <Section id="schema" dark fullwidth>
      <div className="flex flex-col items-center py-24 px-6 mx-auto max-w-screen-lg">
        <Heading>Schéma elektrárny s RTU</Heading>
        <Image src="/images/schema_zapojeni.jpg" alt="Solarsoft" width={1799} height={958} priority />
      </div>
    </Section>
  );
}
