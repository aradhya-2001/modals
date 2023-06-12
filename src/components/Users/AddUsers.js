const AddUser = (props) => {

    const submitHandler = (event) => {
        event.preventDefault()
    }
    
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="name">name</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser