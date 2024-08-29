import Image from 'next/image';
import React from 'react';

interface Props {
  images: string[];
}

const PostImage = ({ images }: Props) => {
  if (images.length !== 0 && images.length === 1) {
    return (
      <div className="h-[300px] min-[450px]:h-[400px] min-h-[300px] rounded-xl relative">
        <Image
          src={images[0]}
          alt="post"
          fill
          placeholder="blur"
          blurDataURL={images[0]}
          className="object-cover rounded-xl"
        />
      </div>
    );
  }

  if (images.length !== 0 && images.length === 2) {
    return (
      <div className="h-[300px] min-[450px]:h-[400px] min-h-[300px] rounded-xl flex justify-between">
        <div className="basis-[48%] relative h-full  rounded-xl">
          <Image
            src={images[0]}
            alt="post"
            fill
            placeholder="blur"
            blurDataURL={images[0]}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="basis-[48%] relative h-full rounded-xl">
          <Image
            src={images[1]}
            alt="post"
            fill
            placeholder="blur"
            blurDataURL={images[1]}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    );
  }

  if (images.length !== 0 && images.length === 3) {
    return (
      <div className="h-[300px] min-[450px]:h-[400px] min-h-h-[300px] rounded-xl flex justify-between">
        <div className="basis-[48%] relative h-full  rounded-xl">
          <Image
            src={images[0]}
            alt="post"
            fill
            placeholder="blur"
            blurDataURL={images[0]}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="basis-[48%] h-full flex flex-col justify-between">
          <div className="basis-[48%] relative h-full  rounded-xl">
            <Image
              src={images[1]}
              alt="post"
              fill
              placeholder="blur"
              blurDataURL={images[1]}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="basis-[48%] relative h-full  rounded-xl">
            <Image
              src={images[2]}
              alt="post"
              fill
              placeholder="blur"
              blurDataURL={images[2]}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PostImage;
