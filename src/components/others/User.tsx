import React from "react";

type UserProps = {
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
    language: string[];
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>{user.age}</h4>
      {user.isRegistered ? <p>Registered</p> : <p>Not Registered</p>}
      {user.isRegistered ? <p>Registered</p> : <p>Not Registered</p>}
      <p>
        Speaks:{" "}
        {user.language.map((lang, index) => {
          return <span key={index}>{lang}</span>;
        })}
      </p>
    </div>
  );
};

export default User;
