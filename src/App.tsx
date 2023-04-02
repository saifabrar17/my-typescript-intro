import "./App.css";
import LoginForm from "./components/shared/LoginForm";

function App() {
  return (
    <div className="py-10 mx-auto container">
      {/* <PasswordInput
        label="Password"
        name="password"
        // autoFocus={true}
        // hasError={true}
      ></PasswordInput> */}

      {/* <TextInput label="Email" name="email" type="email" value="ddd" /> */}

      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
