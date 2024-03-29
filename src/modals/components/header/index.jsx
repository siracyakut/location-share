import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ModalHeader({ title, close }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-xl font-medium">{title}</p>
      <div
        onClick={close}
        className="cursor-pointer flex items-center justify-center w-8 h-8 hover:bg-zinc-400/20 transition-all rounded"
      >
        <FaTimes className="select-none" size={20} />
      </div>
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
