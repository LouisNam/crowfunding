import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import classNames from "utils/classNames";

const CampCategory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <Link
      to={"/"}
      className={classNames(
        "flex items-center mb-4 font-medium gap-x-3 text-text3",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

CampCategory.propTypes = {
  text: PropsTypes.string,
  className: PropsTypes.string,
};

export default CampCategory;
