'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import SkeletonProfile from './SkeletonProfile';

interface Props {
  url: string;
  name: string;
}

const RequestCard = ({ url, name }: Props) => {
  const [loading, setLoading] = useState(false);
  const urlImage = url;

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-5 bg-white rounded-xl shadow-xl space-y-6">
        <div className="flex items-start gap-x-3">
          <div
            style={{ backgroundImage: `url(${urlImage})` }}
            className="size-12 ring-2 ring-white rounded-xl overflow-clip cursor-pointer
              bg-contain"
          ></div>
          <div className="text-base text-mytext font-second font-semibold w-[70%]">
            {name}{' '}
            <span className="text-sm text-mytext2 font-semibold font-first">
              Wants to add you to friends
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant={'default'}
            size="lg"
            className="bg-myaccent hover:bg-myaccent/90 rounded-lg text-base text-white font-first font-semibold"
          >
            Accept
          </Button>
          <Button
            variant={'outline'}
            size="lg"
            className="hover:bg-transparent rounded-lg text-base text-mytextgray font-first font-semibold"
          >
            Decline
          </Button>
        </div>
      </div>
    );
  }

  return <SkeletonProfile />;
};

export default RequestCard;
