import { defaultImage } from "constants/global";
import React from "react";
import PropsTypes from "prop-types";
import classNames from "utils/classNames";

const CampImage = ({ image = defaultImage, className = "h-[156px" }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="unsplash"
        className={classNames("object-cover w-full h-full rounded-2xl")}
      />
    </div>
  );
};

CampImage.propTypes = {
  image: PropsTypes.string,
  className: PropsTypes.string,
};

export default CampImage;
