import React from "react";
import PropsTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

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
  let defaultClass =
    "flex justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";

  switch (rest.kind) {
    case "primary":
      defaultClass = defaultClass + " bg-primary text-white";
      break;
    case "secondary":
      defaultClass = defaultClass + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClass =
        defaultClass + " bg-secondary text-secondary bg-opacity-10";
      break;
    default:
      break;
  }

  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClass, className)}>
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={classNames(
        defaultClass,
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
  href: PropsTypes.string,
  kind: PropsTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
