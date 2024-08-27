import React from 'react';
import Stories from './Stories';
import AddPost from './AddPost';
import Posts from './Posts';

const Feed = () => {
  return (
    <div className="basis-[48%] h-full space-y-6">
      <Stories />
      <AddPost />
      <Posts />
    </div>
  );
};

export default Feed;
