import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button(props) {
  const { label, variant, size } = props;

  return (
    <button
      type="button"
      className={[styles[`button--${variant}`], styles[size]].join(" ")}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "rounded"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  label: "Button",
  variant: "contained",
  size: "medium",
};
