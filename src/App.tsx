import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

const user1 = {
  name: "user name",
  age: 2,
  isRegistered: true,
  language: ["Bangla", "English"],
};

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User user={user1} ></User>
    </div>
  );
}

export default App;
