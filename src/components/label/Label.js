import React from "react";
import PropsTypes from "prop-types";

const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text3 ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropsTypes.node,
  htmlFor: PropsTypes.string,
  className: PropsTypes.string,
};

export default Label;
