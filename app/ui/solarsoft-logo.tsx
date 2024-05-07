import Image from 'next/image';

interface Props {
  size: 'default' | 'large';
}

// TODO use SVG
export default function Logo({ size }: Props) {
  const width = size === 'large' ? 200 : 153;
  const height = size === 'large' ? 21 : 16;

  return (
    <a href="/" className="flex items-center h-5">
      <Image className="object-cover" src="/logos-raw/solarsoft_logo_hor-w5000px_blue.png" alt="Solarsoft s.r.o." width={width} height={height} priority />
    </a>
  );
}
