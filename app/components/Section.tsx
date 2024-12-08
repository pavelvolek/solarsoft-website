import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  id?: string;
  className?: string;
  dark?: boolean;
  fullwidth?: boolean;
}

export default function Section({ children, className, dark, fullwidth, id }: Props) {
  return (
    <section id={id} className={twMerge('w-full', dark ? 'bg-primary-50' : 'bg-white', !fullwidth && 'py-24 px-6 mx-auto max-w-screen-lg', className)}>
      {children}
    </section>
  );
}
