import React, { useState } from "react";
import Lock from "../../assets/svg/Lock";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";

interface FormState {
  email: string;
  password: string;
}

const initialFormState: FormState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [formErrors, setFormErrors] = useState<FormState>(initialFormState);

  const validateField = (fieldName: keyof FormState, value: string) => {
    let error = "";
    if (fieldName === "email") {
      if (!value || !value.includes("@")) {
        error = "Please enter a valid email address";
      }
    } else if (fieldName === "password") {
      if (!value || value.length < 8) {
        error = "Password must be at least 8 characters long";
      }
    }

    return error;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormState
  ) => {
    const { value } = event.target;
    const error = validateField(fieldName, value);
    setFormErrors({ ...formErrors, [fieldName]: error });
    setFormState({ ...formState, [fieldName]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted successfully!");
  };

  const hasErrors = Object.values(formErrors).some((error) => error);

  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  return (
    <div className="grid h-[80vh] place-items-center ">
      <form onSubmit={handleSubmit}>
        <p className="text-2xl uppercase text-gray-700 font-semibold text-center pb-5">Login</p>
        <div>
          <TextInput
            label="Email"
            name="email"
            type="email"
            autoFocus={true}
            inputRef={emailRef}
            // value="disabled@google.com"
            // disabled={true}
            value={formState.email}
            
            onChangeHandler={(event) => handleChange(event, "email")}
            errorMsg={formErrors.email}
          />
        </div>

        <div className="mt-3">
          <PasswordInput
            label="Password"
            name="password"
            // disabled={true}
            value={formState.password}
            inputRef={passwordRef}
            passwordIcon={<Lock width="18" height="18"></Lock>}
            // hasError={!!formErrors.password}
            onChangeHandler={(event) => handleChange(event, "password")}
            errorMsg={formErrors.password}
          />
        </div>

        <button
          type="submit"
          disabled={hasErrors}
          className={`${
            hasErrors
              ? "bg-slate-300 text-white cursor-not-allowed"
              : "bg-green-500 text-white"
          } p-2 rounded-lg mt-`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
