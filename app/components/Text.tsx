import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className?: string;
}

export default function Text({ children, className }: Props) {
  return <p className={twMerge('text-gray-500 text-xl', className)}>{children}</p>;
}
