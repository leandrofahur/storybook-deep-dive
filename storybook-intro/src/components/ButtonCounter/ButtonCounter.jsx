import PropTypes from "prop-types";
import "./buttonCounter.css";

export function ButtonCounter(props) {
  const { label, size, backgroundColor, type, onClick } = props;

  return (
    <div>
      <button
        className={[type, `counter-button--${size}`].join(" ")}
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
  type: PropTypes.oneOf(["counter-button1", "counter-button2"]),
  backgroundColor: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonCounter.defaultProps = {
  size: "large",
  type: "counter-button1",
  label: "Button",
  backgroundColor: "#EFEFEF",
  onClick: () => {},
};

export default ButtonCounter;
