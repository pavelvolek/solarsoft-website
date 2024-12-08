import { PropsWithChildren } from 'react';

export default function Subheading({ children }: PropsWithChildren) {
  return <h3 className="text-primary-400 font-medium">{children}</h3>;
}
