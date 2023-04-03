import React from "react";
import PropsTypes from "prop-types";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = ({
  control,
  name,
  type = "text",
  placeholder = "",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-xl border  rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent ${
          error.length > 0
            ? "border-error"
            : "border-stroke dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length > 0 ? null : placeholder}
        {...field}
        {...rest}
      />

      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
        {children}
      </span>
    </div>
  );
};

Input.propTypes = {
  control: PropsTypes.any.isRequired,
  name: PropsTypes.string.isRequired,
  type: PropsTypes.string,
  error: PropsTypes.string,
  children: PropsTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
