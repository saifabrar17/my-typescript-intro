import "./App.css";
import useModal from "./components/hooks/useModal";
import LoginForm from "./components/shared/LoginForm";
import Modal from "./components/shared/Modal";

function App() {
  const { isOpen, toggle } = useModal();

  return (
    <div className="py-10 mx-auto container relative">
      {/* <PasswordInput
        label="Password"
        name="password"
        // autoFocus={true}
        // hasError={true}
      ></PasswordInput> */}

      {/* <TextInput label="Email" name="email" type="email" value="ddd" /> */}

      <LoginForm></LoginForm>

      <div>
        <button onClick={toggle}>Open Modal </button>
        <Modal isOpen={isOpen} toggle={toggle}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            deleniti recusandae dicta quam error rem quasi impedit laudantium
            reiciendis aspernatur!
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
