import { Plus } from 'lucide-react';
import React from 'react';

interface Props {
  name?: string;
  image?: string;
  story: string;
  variant?: 'add' | 'default';
}

const StoryCard = ({ name, image, story, variant }: Props) => {
  if (variant === 'add') {
    return (
      <div
        style={{
          backgroundImage: `url('${story}')`,
        }}
        className="w-[19%] h-[200px]  rounded-xl bg-cover px-2 py-4 cursor-pointer flex flex-col gap-3 justify-end items-center shadow-2xl"
      >
        <div className="size-8 rounded-md bg-white grid place-content-center ring-2 ring-white ring-offset-2 ring-offset-black">
          <Plus className="text-myaccent" />
        </div>

        <div className="text-sm text-white font-first font-bold">Add Story</div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url('${story}')`,
      }}
      className="w-[19%] h-[200px]  rounded-xl bg-cover px-2 py-4 cursor-pointer flex flex-col justify-between items-center shadow-2xl"
    >
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="size-8 ring-2 ring-white ring-offset-2 ring-offset-black rounded-md overflow-clip cursor-pointer
            bg-contain self-start ml-4"
      ></div>

      <div className="text-sm text-white font-first font-bold">{name}</div>
    </div>
  );
};

export default StoryCard;
