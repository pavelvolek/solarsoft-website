import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
  iconPath?: React.ReactNode;
}

export default function Link({ children, className, href, iconPath }: Props) {
  return (
    <a
      href={href}
      className={twMerge(
        'inline-flex items-center justify-center gap-3 uppercase px-5 py-3 text-sm font-semibold text-center text-white rounded-sm bg-primary-400 hover:bg-primary-500 focus:bg-primary-600',
        className,
      )}
    >
      {children}
      {iconPath && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          {iconPath}
        </svg>
      )}
    </a>
  );
}
