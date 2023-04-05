import "./App.css";
import ComponentSwitcher from "./components/componentSwitcher/ComponentSwitcher";
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


      <ComponentSwitcher />

      <LoginForm></LoginForm>

      <div>
        <button className="bg-green-500 rounded-md text-white p-3" onClick={toggle}>Open Modal </button>
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
