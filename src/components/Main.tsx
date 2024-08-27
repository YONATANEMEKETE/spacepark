import React from 'react';
import Wrapper from './Wrapper';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';

const Main = () => {
  return (
    <Wrapper className="bg-mybg min-h-[90vh] h-max pt-4   pb-20  flex items-start gap-x-6">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </Wrapper>
  );
};

export default Main;
