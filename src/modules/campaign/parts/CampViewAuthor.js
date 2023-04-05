import { IconStar } from "components/icons";
import { defaultImage } from "constants/global";
import React from "react";

const CampViewAuthor = () => {
  return (
    <div className="flex items-cent gap-x-5 mb-9">
      <img
        src={defaultImage}
        alt="unsplash"
        className="w-[60px] h-[60px] rounded-full object-cover"
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium">Saiful Islam</h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <IconStar key={index} className="text-yellow-500"></IconStar>
              ))}
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-3 text-text3">
          <strong className="text-primary">02 Campaign</strong>
          <span className="block rounded-full bg-text3 w-[6px] h-[6px]"></span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampViewAuthor;
