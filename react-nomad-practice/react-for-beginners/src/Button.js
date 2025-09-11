import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>; //class해당 css 스타일링을 사용
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
