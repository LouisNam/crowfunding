import React from "react";
import PropsTypes from "prop-types";
import classNames from "utils/classNames";

const CampDesc = ({ children, className = "mb-4 text-xs" }) => {
  return (
    <p className={classNames(" text-text3 font-normal", className)}>
      {children}
    </p>
  );
};

CampDesc.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default CampDesc;
