import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import UserDemo from "./components/UserDemo";

const users = [
  {
    id: 1,
    name: "Anisul",
    email: "something@g.com",
    age: 12,
  },
  {
    id: 2,
    name: "Anisul",
    email: "something@g.com",
    age: 12,
  },
];

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <UserDemo users={users}></UserDemo>
    </div>
  );
}

export default App;
