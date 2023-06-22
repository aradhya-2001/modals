import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const BackdropPortal = (props) => {
  return ( <div className={classes.backdrop} onClick={props.portalDelError} /> ); /* this div spreads to whole viewport (coz of 100 vw and 100 vh) and will always spread to full viewport inspite of adding users coz of fixed position. This is there to add a background colour of light black to screen.    */
};

const ModalPortal = (props) => {
  return (
    <Card cardClass={classes.modal}>  {/* through this class the card z index is made bigger than upper div so that it appears on top and is positioned to fixed. */}
      <header className={classes.header}>
        <h2>{props.portalTitle}</h2>
      </header>
      <div className={classes.messg}>
        <p>{props.portalMessg}</p>
      </div>
      <footer className={classes.footer}>
        <Button btnClick={props.portalDelError}>Okay</Button>  {/* btnClick is our own attribute (sent via props) which sends delError function pointer to Button.js where button's default onClick attribute calls the function */}
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropPortal portalDelError={props.delError} />,  /* ErrorModal props has title, messg and delError func. Since backdrop only need delError so we are passing delError with attribute name portalDelError to BackdropPortal props. */
        document.getElementById("backdrop-root")
      )}
      
      {ReactDOM.createPortal(
        <ModalPortal
          portalTitle={props.title}
          portalMessg={props.messg}
          portalDelError={props.delError}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
