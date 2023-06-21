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
    {users.length && <UsersList items={users} />}  {/* when users array is empty then UserList is not diaplayed. Otherwise an empty card is displayed when no users is added */}
    </div>

  );
}

export default App;
