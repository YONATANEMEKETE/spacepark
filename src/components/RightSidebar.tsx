import React from 'react';
import Request from './Request';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className="basis-[24%] h-full space-y-5">
      <Request />
      <Contacts />
    </div>
  );
};

export default RightSidebar;
