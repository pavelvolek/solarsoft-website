import { twMerge } from 'tailwind-merge';

export interface ListItem {
  heading: string;
  text: string;
}

interface Props {
  items: ListItem[];
  className?: string;
}

export default function List({ items, className }: Props) {
  return (
    <div className={twMerge('flex flex-col justify-center items-start gap-4 my-6', className)}>
      {items.map(({ heading, text }) => {
        return (
          <div key={heading} className="flex justify-center items-start gap-3">
            <div className="grow-0 shrink-0 flex justify-center items-center my-0.5 w-5 h-5 rounded-full shadow-md bg-primary-400">
              <svg className="fill-current text-white w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.414,10.586,13.121,6.293,11.707,7.707,15,11H5v2H15l-3.293,3.293,1.414,1.414,4.293-4.293A2,2,0,0,0,17.414,10.586Z" />
              </svg>
            </div>
            <h3 className="text-gray-900 text-base">
              <b>{heading}:</b> {text}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
