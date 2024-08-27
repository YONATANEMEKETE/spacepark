import React from 'react';
import PostCard from './PostCard';
import { posts } from '@/Data/data';

const Posts = () => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.name} post={post} />
      ))}
    </div>
  );
};

export default Posts;
