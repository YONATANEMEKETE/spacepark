import React from 'react';
import Wrapper from './Wrapper';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';

const Nav = () => {
  return (
    <Wrapper className="flex items-center justify-between h-[4rem] bg-mynavbg mt-2 rounded-t-xl px-4">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-mybg grid place-content-center cursor-pointer">
          <BsFillChatSquareHeartFill size={24} className="text-myaccent " />
        </div>
        <div className="text-xl text-mytext font-extrabold font-first">
          Spacepark
        </div>
      </div>

      <div className="flex items-center gap-3"></div>
    </Wrapper>
  );
};

export default Nav;
