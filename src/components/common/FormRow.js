import React from "react";
import PropsTypes from "prop-types";

const FormRow = ({ children }) => {
  return <div className="grid grid-cols-2 gap-x-[45px]">{children}</div>;
};

FormRow.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default FormRow;
