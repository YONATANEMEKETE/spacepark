import React from 'react';
import StoryCard from './StoryCard';

const Stories = () => {
  return (
    <div className="flex justify-between">
      <StoryCard
        story="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pexels-anna-ilina-72935385-12099895.jpg"
        variant="add"
      />
      <StoryCard
        image="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pro15.jpg"
        name="Diana Vooss"
        story="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pexels-rpnickson-2631613.jpg"
      />
      <StoryCard
        image="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pro12.jpg"
        name="Laura Fisher"
        story="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pexels-vlad-2223124-3894868.jpg"
      />
      <StoryCard
        image="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/2148932869.jpg"
        name="Sam Brown"
        story="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pexels-mck-242487578-12316002.jpg"
      />
      <StoryCard
        image="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pro11.jpg"
        name="Roger Miller"
        story="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Stories/pexels-anna-ilina-72935385-12099895.jpg"
      />
    </div>
  );
};

export default Stories;
