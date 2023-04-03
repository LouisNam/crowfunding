import React from "react";
import PropsTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-stroke rounded-xl text-text2 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img alt="google" srcSet="icon-google.png 2x" />
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropsTypes.string,
  onClick: PropsTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
