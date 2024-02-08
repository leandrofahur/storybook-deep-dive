import PropTypes from "prop-types";
import "./buttonCounter.css";

export function ButtonCounter(props) {
  const { label, size, onClick } = props;

  return (
    <div>
      <button className={`counter-button-${size}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

ButtonCounter.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonCounter.defaultProps = {
  size: "large",
  label: "",
  onClick: () => {},
};

export default ButtonCounter;
