import React from 'react';
import SkeletonProfile from './SkeletonProfile';
import { Skeleton } from './ui/skeleton';

const SkeletonPost = () => {
  return (
    <div className="bg-white py-6 px-4 rounded-xl shadow-xl  space-y-3">
      <SkeletonProfile />
      <div className="space-y-2">
        <Skeleton className="w-full h-4 rounded-full" />
        <Skeleton className="w-full h-4 rounded-full" />
      </div>
      <Skeleton className="h-[300px] min-[450px]:h-[400px] min-h-[300px] rounded-xl" />
      <Skeleton className="w-full h-12 rounded-xl" />
    </div>
  );
};

export default SkeletonPost;
