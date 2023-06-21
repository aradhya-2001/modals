import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.delError} />  {/* this div spreads to whole viewport (coz of 100 vw and 100 vh) and will always spread to full viewport inspite of adding users coz of fixed position. This is there to add a background colour of light black to screen.    */}
      <Card cardClass={classes.modal}>  {/* through this class the card z index is made bigger than upper div so that it appears on top and is positioned to fixed. */} 
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.messg}>
          <p>{props.messg}</p>
        </div>
        <footer className={classes.footer}>
          <Button btnClick={props.delError}>Okay</Button> {/* btnClick is our own attribute (sent via props) which sends delError function pointer to Button.js where button's default onClick attribute calls the function */}
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
