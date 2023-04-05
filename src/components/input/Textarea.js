import React from "react";
import PropsTypes from "prop-types";
import { useController } from "react-hook-form";

const Textarea = ({ control, name, placeholder = "", ...rest }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none"
      {...field}
      placeholder={placeholder}
      {...rest}
    ></textarea>
  );
};
Textarea.propTypes = {
  control: PropsTypes.any.isRequired,
  name: PropsTypes.string.isRequired,
  placeholder: PropsTypes.string,
};

export default Textarea;
