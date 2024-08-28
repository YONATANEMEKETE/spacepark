import React from 'react';
import ProfileCard from './ProfileCard';
import Sidenav from './Sidenav';
import Invitation from './Invitation';

const LeftSidebar = () => {
  return (
    <div className="space-y-4 basis-[24%] h-[500vh]">
      <ProfileCard />
      <Sidenav />
      <Invitation />
    </div>
  );
};

export default LeftSidebar;
