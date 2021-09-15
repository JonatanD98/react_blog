import classes from "./Button.module.css";

//UI component for universal button styles
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
