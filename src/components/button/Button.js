import React from "react";
import PropsTypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={classNames(
        "flex justify-center p-4 text-base font-semibold rounded-xl text-white min-h-[56px]",
        isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropsTypes.string,
  children: PropsTypes.node,
  className: PropsTypes.string,
  isLoading: PropsTypes.bool,
};

export default Button;
