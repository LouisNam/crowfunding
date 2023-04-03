import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const AuthenticationLayout = ({ children, heading }) => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkBg isolate">
      <img
        alt="background"
        srcSet="/ellipse.png"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1] w-full"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img alt="crowdfunding-logo" srcSet="/logo.png 2x" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-lg px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

AuthenticationLayout.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(AuthenticationLayout, {
  FallbackComponent: ErrorComponent,
});
