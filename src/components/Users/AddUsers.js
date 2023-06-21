import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
    setName("");
    setAge("");
    setError();
    props.onAddUsers({ name, age });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} messg={error.messg} delError={errorHandler}></ErrorModal> }  {/* when error is not null then only its true and ErrorModal is displayed */}
      <Card cardClass={classes.users_form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">name</label>
          <input onChange={nameHandler} id="name" value={name} type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input onChange={ageHandler} id="age" value={age} type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
