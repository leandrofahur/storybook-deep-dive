import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button(props) {
  const { variant, size, onClick, children } = props;

  return (
    <button
      type="button"
      className={[
        styles["button"],
        styles[`button--${variant}`],
        styles[size],
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "contained",
  size: "small",
  onClick: () => {},
  children: null,
};
