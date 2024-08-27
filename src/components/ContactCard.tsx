import React from 'react';
import { Button } from './ui/button';
import { Ellipsis, EllipsisVertical } from 'lucide-react';

interface Props {
  name: string;
  image: string;
  number?: number;
}

const ContactCard = ({ name, image, number }: Props) => {
  return (
    <div className="px-2 py-2 flex items-center justify-between hover:bg-mybg rounded-xl cursor-pointer">
      <div className="flex items-center gap-x-3">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="size-12 ring-2 ring-white rounded-xl overflow-clip cursor-pointer
            bg-contain"
        ></div>
        <div className="text-sm text-mytext font-first font-extrabold">
          {name}
        </div>
      </div>

      {number ? (
        <div
          className={`size-5 rounded-full bg-myaccent grid place-content-center text-sm text-white font-first`}
        >
          {number}
        </div>
      ) : (
        <Button
          variant={'outline'}
          size={'icon'}
          className="hover:bg-transparent py-1"
        >
          <EllipsisVertical size={20} className="text-mytextgray" />
        </Button>
      )}
    </div>
  );
};

export default ContactCard;
