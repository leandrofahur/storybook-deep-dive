import PropTypes from "prop-types";
import "./buttonCounter.css";

export function ButtonCounter(props) {
  const { label, size, backgroundColor, onClick } = props;

  return (
    <div>
      <button
        className={`counter-button--${size}`}
        style={backgroundColor && { backgroundColor }}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

ButtonCounter.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonCounter.defaultProps = {
  size: "large",
  label: "Button",
  backgroundColor: "#EFEFEF",
  onClick: () => {},
};

export default ButtonCounter;
