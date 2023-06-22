import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";

const AddUser = (props) => {

  const [error, setError] = useState();

  const nameInputRef = useRef() /* this makes the variable nameInputRef to be used as ref to an html element.  */
  const ageInputRef = useRef()

  
  const submitHandler = (event) => {

    event.preventDefault();

    const name = nameInputRef.current.value
    const age = nameInputRef.current.value
    
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        messg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) { /* js probably would convert string age to number age before comparing to 1 but to be on safe side we have converted explicitly by unary + operator. Can be done by Number() also */
      setError({
        title: "Invalid age",
        messg: "Please enter a valid age (>0).",
      });
      return;
    }
    //console.log(name, age, valid)
    nameInputRef.current.value = ""  /* this resets the value attribute of input element. Thats why we dont need value attr inside element coz its value is directly changed here */
    ageInputRef.current.value = ""
    setError();
    props.onAddUsers({ name, age });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} messg={error.messg} delError={errorHandler}></ErrorModal> }  {/* when error is not null then only its true and ErrorModal is displayed */}
      <Card cardClass={classes.users_form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">name</label>
          <input id="name" type="text" ref={nameInputRef}/> {/* this ref attribute attaches/connects the DOM node of the element to the variable mentioned i.e. nameInputRef */}
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
