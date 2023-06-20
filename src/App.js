import AddUser from "./components/Users/AddUsers";
import { useState } from "react";
import UsersList from "./components/Users/UsersList"

function App() {

  const [users, setUsers] = useState([])

  const addUsers = (user) => {
    console.log(user)
    setUsers((prevUsers) => {
      return [...prevUsers, {name: user.name, age: user.age, id: Math.random().toString()}]
    })
  }
  console.log(users)
  return (
    <div>
    <AddUser onAddUsers={addUsers} />
    <UsersList items={users} />
    </div>

  );
}

export default App;
