import Image from 'next/image';
import { Input } from './ui/input';
import React from 'react';
import { Button } from './ui/button';
import { Hash, Share, SquarePlus } from 'lucide-react';

const AddPost = () => {
  return (
    <div className="px-4 py-4 bg-white rounded-xl shadow-xl flex items-center justify-between">
      <div className="flex  gap-x-2">
        <div
          className="size-12 shrink-0 ring-2 ring-white rounded-xl overflow-clip cursor-pointer
           bg-[url('https://ik.imagekit.io/6qizpphtd1/SPACEPARK/9.jpg')] bg-contain"
        ></div>
        <Input
          type="text"
          placeholder="What's new Alexandra"
          className="text-base text-mytext font-semibold font-first bg-transparent "
        />
      </div>

      <Button
        variant={'default'}
        size="default"
        className="bg-myaccent hover:bg-myaccent/90 h-12 rounded-xl px-4 flex items-center gap-2 text-sm text-white font-first font-semibold"
      >
        <Share size={20} />
        <p>Post It</p>
      </Button>
    </div>
  );
};

export default AddPost;
