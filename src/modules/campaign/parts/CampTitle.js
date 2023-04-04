import React from "react";
import PropsTypes from "prop-types";
import classNames from "utils/classNames";

const CampTitle = ({ children, className = "mb-1 font-semibold" }) => {
  return <h3 className={classNames("text-text1", className)}>{children}</h3>;
};

CampTitle.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default CampTitle;
