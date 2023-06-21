import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card cardClass={classes.users_list}>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
