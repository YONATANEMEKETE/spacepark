import React from 'react';
import { Button } from './ui/button';
import {
  Bookmark,
  EllipsisVertical,
  Heart,
  Image,
  MessageSquare,
  Paperclip,
  Share2,
  Smile,
} from 'lucide-react';
import PostImage from './PostImage';
import { Input } from './ui/input';

interface Props {
  post: any;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="bg-white py-6 px-4 rounded-xl shadow-xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div
            style={{
              backgroundImage: `url(${post.profile})`,
            }}
            className="size-12 shrink-0 rounded-xl overflow-clip cursor-pointer bg-contain"
          ></div>
          <div className="">
            <p className="text-base text-mytext font-second font-bold">
              {post.name}
            </p>
            <p className="text-sm text-mytextgray font-first font-semibold">
              {post.time}
            </p>
          </div>
        </div>

        <Button
          variant={'outline'}
          size={'icon'}
          className="hover:bg-transparent py-1"
        >
          <EllipsisVertical size={20} className="text-mytextgray" />
        </Button>
      </div>

      <div className="text-sm text-mytext2 font-first font-bold">
        {post.caption}
      </div>

      <PostImage images={post.images} />

      <div className="h-[1px] bg-mytextgray/30"></div>

      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-x-2 cursor-pointer">
          <MessageSquare className="text-mytextgray" />
          <p className="text-sm text-mytextgray font-first font-semibold">
            {`${post.stats.comment} Comments`}
          </p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Heart className="text-mytextgray" />
          <p className="text-sm text-mytextgray font-first font-semibold">
            {`${post.stats.like} Likes`}
          </p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Share2 className="text-mytextgray" />
          <p className="text-sm text-mytextgray font-first font-semibold">
            {`${post.stats.share} Shares`}
          </p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Bookmark className="text-mytextgray" />
          <p className="text-sm text-mytextgray font-first font-semibold">
            {`${post.stats.save} Saved`}
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-mytextgray/30"></div>

      <div className="flex items-center gap-2">
        <div
          style={{
            backgroundImage: `url('https://ik.imagekit.io/6qizpphtd1/SPACEPARK/9.jpg')`,
          }}
          className="size-12 shrink-0 rounded-lg overflow-clip cursor-pointer bg-contain"
        ></div>
        <div className="bg-mybg rounded-xl p-1 flex flex-1 items-center justify-between pr-4">
          <Input
            type="text"
            placeholder="Write your comment"
            className="text-base text-mytext font-semibold font-first bg-transparent "
          />
          <div className="flex items-center gap-2">
            <Paperclip className="text-mytextgray cursor-pointer" />
            <Smile className="text-mytextgray cursor-pointer" />
            <Image className="text-mytextgray cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
