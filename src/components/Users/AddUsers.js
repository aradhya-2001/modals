import classes from "./AddUsers.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"

const AddUser = (props) => {
    const submitHandler = (event) => {
        event.preventDefault()
    }
    
    return(
        <Card cardClasses={classes.users_form}>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">name</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"/>
            <Button type="button">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser