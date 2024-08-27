import React from 'react';
import Stories from './Stories';
import AddPost from './AddPost';

const Feed = () => {
  return (
    <div className="basis-[48%] h-full space-y-6">
      <Stories />
      <AddPost />
    </div>
  );
};

export default Feed;
