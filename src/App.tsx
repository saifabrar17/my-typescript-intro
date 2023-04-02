import { useState } from "react";
import "./App.css";
import AnimatedInput from "./components/AnimatedInput";
import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  // setCount(12)
  return (
    <div className="">
      <h1>Count : {count}</h1>

      <button className="border-2 p-2 bg-yellow-200" onClick={handleIncrement}>
        Increment
      </button>
      <LoginForm></LoginForm>

      <AnimatedInput></AnimatedInput>

      <hr />

      <div className="">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Input"
            className="h-10 px-6 text-2xl text-white bg-slate-300 border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-slate-800 placeholder-opacity-0 transition duration-200"
          />
          <span className="text-base mx-5 text-black text-opacity-80 bg-slate-300 absolute left-0 top-0 px-1 transition duration-200 input-text">
            Input
          </span>
        </label>
      </div>
    </div>
  );
}

export default App;
