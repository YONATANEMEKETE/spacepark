import React from 'react';
import SideLink from './SideLink';
import {
  HomeIcon,
  Image,
  Newspaper,
  Settings,
  SquareUser,
  User,
} from 'lucide-react';

const Sidenav = () => {
  return (
    <div className="py-4 bg-white rounded-xl shadow-xl">
      <SideLink text="Home" Icon={HomeIcon} />
      <SideLink text="People" Icon={SquareUser} number={8} />
      <SideLink text="Photos" Icon={Image} />
      <SideLink text="News Feed" Icon={Newspaper} active={true} />
      <SideLink text="Profile" Icon={User} />
      <SideLink text="Settings" Icon={Settings} number={1} grey={true} />
    </div>
  );
};

export default Sidenav;
