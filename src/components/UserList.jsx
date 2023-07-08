import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <>
      {users.length == 0 && (
        <div>
          <h2>Users not found!</h2>
        </div>
      )}
      {users.length > 0 &&
        users &&
        users.map((user) => (
          <div>
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              places={user.places}
            />
          </div>
        ))}
    </>
  );
};

export default UserList;
