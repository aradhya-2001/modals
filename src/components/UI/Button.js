import classes from "./Button.module.css";

const Button = (props) => {
  console.log(props.onClick)
  return (
    <button
      className={classes.button}
      type={props.type || "button"} /* if props.type has not passed then type will be button */
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
