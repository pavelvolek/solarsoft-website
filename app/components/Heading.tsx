import { PropsWithChildren } from 'react';

export default function Heading({ children }: PropsWithChildren) {
  return <h2 className="mb-4 text-5xl leading-[3.5rem] font-bold text-gray-900">{children}</h2>;
}
