import React from 'react';
import ProfileCard from './ProfileCard';
import Sidenav from './Sidenav';

const LeftSidebar = () => {
  return (
    <div className="basis-[24%] h-full  space-y-4">
      <ProfileCard />
      <Sidenav />
    </div>
  );
};

export default LeftSidebar;
