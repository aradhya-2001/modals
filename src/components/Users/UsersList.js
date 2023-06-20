import classes from "./UsersList.module.css"

const UsersList = (props) => {
  return (
    <ul>
      {props.items.map((user) => (
        <li className={classes.li} key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
