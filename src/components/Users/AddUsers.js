import classes from "./AddUsers.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"

const AddUser = (props) => {
    
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [valid, setValid] = useState(true)
    
    const nameHandler = (event) =>{    
        setName(event.target.value)
       
    }
    
    const ageHandler = (event) =>{    
        setAge(event.target.value)
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(name.trim().length === 0 || age.trim().length === 0 || +age < 1){    /* js probably would convert string age to number age before comparing to 1 but to be on safe side we have converted explicitly by unary + operator */
            console.log("entered")
            setValid(false)
            return
        }
        //console.log(name, age, valid)
        setName("")
        setAge("")
        setValid(true)
        props.onAddUsers({name, age})
        
    }
    
    return(
        <Card cardClasses={classes.users_form}>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">name</label>
            <input onChange={nameHandler} id="name" value={name} type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input onChange={ageHandler} id="age" value={age} type="number"/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser