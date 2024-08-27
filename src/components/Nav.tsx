import React from 'react';
import Wrapper from './Wrapper';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { SquarePlus } from 'lucide-react';
import Image from 'next/image';

const Nav = () => {
  return (
    <Wrapper className="sticky top-2 flex items-center justify-between h-[4rem] bg-mynavbg mt-2 rounded-t-xl px-4">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="size-10 rounded-lg bg-mybg grid place-content-center">
          <BsFillChatSquareHeartFill size={24} className="text-myaccent " />
        </div>
        <div className="text-xl text-mytext font-bold font-second">
          Spacepark
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search"
          className="text-base text-mytext font-semibold font-first"
        />
        <Button
          variant={'default'}
          size="default"
          className="bg-myaccent hover:bg-myaccent/90 h-10 rounded-xl px-4 flex items-center gap-2 text-sm text-white font-first font-semibold"
        >
          <SquarePlus size={20} />
          <p>Create</p>
        </Button>
        <div className="relative h-10 w-16  rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={'https://ik.imagekit.io/6qizpphtd1/SPACEPARK/9.jpg'}
            alt="profile image"
            fill
            // width={100}
            // height={100}
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Nav;
