import React from 'react';
import { Skeleton } from './ui/skeleton';

const SkeletonProfile = () => {
  return (
    <div className="w-full bg-white px-6 py-6 flex items-center gap-2 rounded-xl ">
      <Skeleton className="size-12 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="w-44 h-4 rounded-full" />
        <Skeleton className="w-32 h-4 rounded-full" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
