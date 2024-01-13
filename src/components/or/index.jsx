import PropTypes from "prop-types";

export default function Or({ label }) {
  return (
    <div className="flex items-center justify-center gap-x-2.5">
      <div className="flex-1 h-0.5 bg-zinc-600" />
      <p className="text-zinc-300 font-medium">{label}</p>
      <div className="flex-1 h-0.5 bg-zinc-600" />
    </div>
  );
}

Or.propTypes = {
  label: PropTypes.string.isRequired,
};
