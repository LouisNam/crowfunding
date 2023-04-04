import React from "react";
import PropsTypes from "prop-types";
import { defaultImage } from "constants/global";

const CampAuthor = ({ image = defaultImage, author = "" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        alt="author"
        srcSet={image}
        className="object-cover w-8 h-8 rounded-full"
      />
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

CampAuthor.propTypes = {
  image: PropsTypes.string,
  author: PropsTypes.string,
};

export default CampAuthor;
