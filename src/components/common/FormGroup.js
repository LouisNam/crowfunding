import React from "react";
import PropsTypes from "prop-types";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col items-start mb-4 lg:mb-5 gap-y-2 lg:gap-y-3">
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default FormGroup;
