import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DataFetch from "./components/DataFetch";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <DataFetch status="loading" ></DataFetch>
    </div>
  );
}

export default App;
