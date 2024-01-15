import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import classNames from "classnames";

export default function Input({ label, name, ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block w-full">
      <div className="text-sm mb-2 text-zinc-400">{label}</div>
      <div className="relative flex h-10 items-center border rounded w-full border-zinc-700 focus-within:border-zinc-600">
        <Field
          name={name}
          className={classNames(
            "h-full px-3 bg-transparent w-full rounded outline-none text-[15px] text-white",
            {
              "pr-8": props?.type === "password",
            },
          )}
          {...props}
          type={
            props?.type === "password"
              ? visible
                ? "text"
                : "password"
              : "text"
          }
        />
        {props?.type === "password" && (
          <button
            tabIndex={-1}
            type="button"
            onClick={() => setVisible((prev) => !prev)}
          >
            {!visible ? (
              <FaEye className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2" />
            ) : (
              <FaEyeSlash className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2" />
            )}
          </button>
        )}
      </div>
      <ErrorMessage
        name={name}
        component="small"
        className="text-xs mt-1.5 text-red-500"
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.object,
};
