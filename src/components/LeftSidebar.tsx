import React from 'react';
import ProfileCard from './ProfileCard';
import Sidenav from './Sidenav';
import Invitation from './Invitation';

const LeftSidebar = () => {
  return (
    <div className="space-y-4 basis-[30%] min-[1100px]:basis-[24%] h-[500vh] hidden min-[850px]:block">
      <ProfileCard />
      <Sidenav />
      <Invitation />
    </div>
  );
};

export default LeftSidebar;
