import { useState } from "react";
import "./App.css";
import LoginForm from "./components/shared/LoginForm";
import Modal from "./components/shared/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal title="My Modal" onClose={handleCloseModal}>
          <p>This is my modal content!</p>
        </Modal>
        {isModalOpen && <div className="modal-backdrop"></div>}
      </div>
    </div>
  );
}

export default App;
