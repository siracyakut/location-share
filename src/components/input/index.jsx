import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";

export default function Input({ label, name, ...props }) {
  return (
    <label className="block w-full">
      <div className="text-sm mb-2 text-zinc-400">{label}</div>
      <div className="flex h-10 items-center border rounded w-full border-zinc-700 focus-within:border-zinc-600">
        <Field
          name={name}
          className="h-full px-3 bg-transparent w-full rounded outline-none text-[15px] text-white"
          {...props}
        />
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
