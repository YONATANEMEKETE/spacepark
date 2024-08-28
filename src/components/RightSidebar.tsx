import React from 'react';
import Request from './Request';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className="basis-[24%]  space-y-5 h-[500vh] hidden min-[1100px]:block">
      <Request />
      <Contacts />
    </div>
  );
};

export default RightSidebar;
