import PropTypes from "prop-types";

export default function BorderSection({ title, children }) {
  return (
    <div className="max-w-xl w-full relative rounded-md border border-gray-600 px-5 pt-8 pb-4">
      {children}
      <h2 className="w-max absolute flex top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="bg-gray-700 px-2 py-1 rounded text-sm font-medium">
          {title}
        </span>
      </h2>
    </div>
  );
}

BorderSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
