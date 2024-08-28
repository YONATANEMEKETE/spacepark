import React from 'react';
import Wrapper from './Wrapper';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import Invitation from './Invitation';

const Main = () => {
  return (
    <Wrapper className="bg-mybg min-h-[90vh] h-max pt-4  pb-20  flex items-start gap-x-6 mx-1 min-[450px]:mx-4 min-[1200px]:mx-auto ">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </Wrapper>
  );
};

export default Main;
