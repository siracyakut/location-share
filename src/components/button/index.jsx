import { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button({
  component,
  children,
  variant,
  size,
  ...props
}) {
  return createElement(
    component,
    {
      className: classNames(
        "text-white h-10 px-4 flex items-center justify-center gap-x-2.5 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-zinc-700 hover:bg-zinc-600": variant === "primary",
          "bg-blue-500 hover:bg-blue-400": variant === "secondary",
          "w-full": size === "full",
        },
      ),
      ...props,
    },
    children,
  );
}

Button.propTypes = {
  component: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.oneOf(["full", "normal"]).isRequired,
  props: PropTypes.object,
};
