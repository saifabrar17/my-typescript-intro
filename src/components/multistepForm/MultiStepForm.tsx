import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleNext = () => {
    if (step === 1) {
      const firstNameError = formData.firstName ? "" : "First name is required";
      const lastNameError = formData.lastName ? "" : "Last name is required";

      if (firstNameError || lastNameError) {
        setErrors({ firstName: firstNameError, lastName: lastNameError });
        return;
      }
    } else if (step === 2) {
      const emailError = formData.email ? "" : "Email is required";
      const phoneNumberError = formData.phoneNumber
        ? ""
        : "Phone number is required";

      if (emailError || phoneNumberError) {
        setErrors({ email: emailError, phoneNumber: phoneNumberError });
        return;
      }
    } else if (step === 3) {
      const passwordError = formData.password ? "" : "Password is required";
      const confirmPasswordError = formData.confirmPassword
        ? ""
        : "Confirm password is required";
      const passwordsMatch = formData.password === formData.confirmPassword;

      if (passwordError || confirmPasswordError || !passwordsMatch) {
        setErrors({
          password: passwordError,
          confirmPassword: confirmPasswordError,
          ...(passwordsMatch
            ? {}
            : { confirmPassword: "Passwords do not match" }),
        });
        return;
      }
    }

    setErrors({});
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {step === 1 && (
        <div>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName}</span>
            )}
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName}</span>
            )}
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </label>
            {errors.phoneNumber && (
              <span style={{ color: "red" }}>{errors.phoneNumber}</span>
            )}
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </div>
          <div>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>{errors.confirmPassword}</span>
            )}
          </div>
        </div>
      )}
      <button onClick={handlePrev} disabled={step === 1}>
        Prev
      </button>
      <button onClick={handleNext}>{step === 3 ? "Submit" : "Next"}</button>
    </div>
  );
};

export default MultiStepForm;
