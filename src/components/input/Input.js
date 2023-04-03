import React from "react";
import PropsTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({ control, name, type = "text" }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        type={type}
        className="w-full px-6 py-4 text-xl border border-stroke rounded-xl text-text1 placeholder:text-text4"
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  control: PropsTypes.any.isRequired,
  name: PropsTypes.string.isRequired,
  type: PropsTypes.string,
};

export default Input;
