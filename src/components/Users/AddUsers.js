import classes from "./AddUsers.module.css"
import Card from "../UI/Card"

const AddUser = (props) => {
    const submitHandler = (event) => {
        event.preventDefault()
    }
    
    return(
        <Card cardClasses={classes.form}>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">name</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
        </Card>
    )
}

export default AddUser