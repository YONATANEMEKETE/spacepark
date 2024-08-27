import React from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';

const Invitation = () => {
  return (
    <div className="space-y-3 pt-4">
      <div className="flex items-center justify-between px-4">
        <p className="text-base text-mytextgray font-first font-semibold">
          INVITATION
        </p>
        <div
          className={`size-5 rounded-full bg-red-600 grid place-content-center text-sm text-white font-first`}
        >
          4
        </div>
      </div>

      <div className="py-3 px-4 bg-white rounded-xl h-[400px] shadow-xl space-y-4">
        <div
          className="h-[75%] bg-mybg rounded-xl relative flex flex-col items-start justify-between p-6
        bg-[url('https://ik.imagekit.io/6qizpphtd1/SPACEPARK/983503_OH1BMQ0%20(1).jpg')] bg-contain"
        >
          <div
            className="size-12 ring-2 ring-white rounded-xl overflow-clip cursor-pointer
           bg-[url('https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Contacts/8.jpg')] bg-contain"
          ></div>
          <div className="text-base rounded-lg bg-gradient-to-r from-transparent via-myaccent/60 to-myaccent text-white font-first font-bold max-w-[70%]">
            How to build a Strong Company
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant={'default'}
            size={'lg'}
            className="bg-myaccent hover:bg-myaccent/90 rounded-lg text-base text-white font-first font-semibold"
          >
            Accept Invitation
          </Button>
          <Button
            variant={'outline'}
            size={'icon'}
            className="rounded-lg text-mytext hover:bg-transparent h-11 px-3"
          >
            <X size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
