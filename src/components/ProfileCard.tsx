'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import SkeletonProfile from './SkeletonProfile';

const ProfileCard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-white px-6 py-6 flex items-center gap-2 rounded-xl ">
        <div className="relative size-12 rounded-xl overflow-clip cursor-pointer">
          <Image
            src={'https://ik.imagekit.io/6qizpphtd1/SPACEPARK/9.jpg'}
            alt="profile image"
            fill
            // width={100}
            // height={100}
            className="object-contain rounded-xl"
          />
        </div>
        <div className="">
          <div className="text-base text-mytext font-second font-bold">
            Alexandra Borke
          </div>
          <p className="text-sm text-mytextgray font-first font-medium">
            @alexsunshine
          </p>
        </div>
      </div>
    );
  }

  return <SkeletonProfile />;
};

export default ProfileCard;
