import { LucideProps } from 'lucide-react';
import React from 'react';

interface Props {
  text: string;
  number?: number;
  grey?: boolean;
  active?: boolean;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

const SideLink = ({ text, number, grey, active, Icon }: Props) => {
  return (
    <div
      className={`${
        active && 'bg-mybg border-l-2 border-myaccent'
      } -full mx-auto pt-4  cursor-pointer space-y-4 hover:bg-mybg/60`}
    >
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon
            size={28}
            className={`${active ? 'text-myaccent' : 'text-mytextgray'}`}
          />
          <p
            className={`text-base ${
              active ? 'text-myaccent' : 'text-mytext2'
            }  font-first font-bold`}
          >
            {text}
          </p>
        </div>

        {number && (
          <div
            className={`size-5 rounded-full ${
              grey ? 'bg-mytextgray/50' : 'bg-myaccent'
            }  grid place-content-center text-sm text-white font-first`}
          >
            {number}
          </div>
        )}
      </div>
      <div
        className={`${
          active ? 'w-full' : 'w-[80%]'
        } mx-auto h-[1px] bg-mytextgray/20`}
      ></div>
    </div>
  );
};

export default SideLink;
