import React from 'react';
import { Skeleton } from './ui/skeleton';

const SkeletonStory = () => {
  return (
    <Skeleton className="w-[19%] h-[150px] min-[450px]:h-[200px] rounded-xl bg-gradient-to-tr from-myaccent/10 to-white" />
  );
};

export default SkeletonStory;
