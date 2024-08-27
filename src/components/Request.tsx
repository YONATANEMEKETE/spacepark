import React from 'react';
import RequestCard from './RequestCard';
import { Button } from './ui/button';

const Request = () => {
  return (
    <div className="space-y-3">
      <div className="px-4 flex items-center justify-between">
        <p className="text-base text-mytextgray font-first font-semibold">
          Requests
        </p>
        <div
          className={`size-5 rounded-full bg-myaccent grid place-content-center text-sm text-white font-first`}
        >
          2
        </div>
      </div>

      <div className="space-y-3">
        <RequestCard
          url="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Req3.jpg"
          name="Tyler Barrows"
        />
        <RequestCard
          name="Selena Gomez"
          url="https://ik.imagekit.io/6qizpphtd1/SPACEPARK/Req2.jpg"
        />
      </div>
    </div>
  );
};

export default Request;
