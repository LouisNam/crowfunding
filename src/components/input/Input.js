import React from "react";
import PropsTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({
  control,
  name,
  type = "text",
  placeholder = "",
  error = "",
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-xl border  rounded-xl text-text1 placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-stroke"
        }`}
        placeholder={error.length > 0 ? null : placeholder}
        {...field}
        {...rest}
      />

      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: PropsTypes.any.isRequired,
  name: PropsTypes.string.isRequired,
  type: PropsTypes.string,
  error: PropsTypes.string,
};

export default Input;
