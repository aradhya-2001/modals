import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"} /* if props.type has not passed then type will be button */
      onClick={props.btnClick} /* this is used by ErrorModal only not by AddUsers */
    >
      {props.children}
    </button>
  );
};

export default Button;
