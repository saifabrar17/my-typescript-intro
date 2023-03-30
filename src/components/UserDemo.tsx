import React from "react";

type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: UserDemoProps) => {
  console.log(users);
  return (
    <div>
      <p>User Demo</p>
      {users.map((user) => {
        const {id, name, email, age} = user
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
