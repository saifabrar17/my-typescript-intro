import React, { useState } from "react";
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={formState.email}
          hasError={!!formErrors.email}
          onChangeHandler={(event) => handleChange(event, "email")}
          errorMsg={formErrors.email}
        />
      </div>

      <div className="mt-3">
        <PasswordInput
          label="Password"
          name="password"
          value={formState.password}
          hasError={!!formErrors.password}
          onChangeHandler={(event) => handleChange(event, "password")}
          errorMsg={formErrors.password}
        />
      </div>

      <button type="submit" className="bg-green-500 p-2 rounded-lg mt-3 text-white">Submit</button>

    </form>
  );
};

export default LoginForm;
