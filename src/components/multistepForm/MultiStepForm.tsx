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
      console.log(formData);
    }

    setErrors({});
    setStep(step + 1);
    console.log(step);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const error = validate(name, value);
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const validate = (name: string, value: string): string | null => {
    switch (name) {
      case "email":
        return validateEmail(value) ? null : "Email is invalid";
      case "password":
        return formData.password.length < 7
          ? "Password must be 8 characters long"
          : value
          ? null
          : "Phone number is required";
      case "confirmPassword":
        return formData.password === value ? null : "Passwords do not match";
      default:
        return null;
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  return (
    <div className="grid h-full place-items-center shadow-lg py-20">
      <div>
        <p className="text-center py-5 text-gray-700 text-sm font-bold">
          MultiStep Form With Validation
        </p>
        {step === 1 && (
          <div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              {errors.firstName && (
                <span className="text-red-600 my-2">{errors.firstName}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
              {errors.lastName && (
                <span className="text-red-600 my-2">{errors.lastName}</span>
              )}
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
                <input
                  type="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              {errors.email && (
                <span className="text-red-600 my-2">{errors.email}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number:
                <input
                  type="number"
                  name="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </label>
              {errors.phoneNumber && (
                <span className="text-red-600 my-2">{errors.phoneNumber}</span>
              )}
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              {errors.password && (
                <span className="text-red-600 my-2">{errors.password}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password:
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
              {errors.confirmPassword && (
                <span className="text-red-600 my-2">{errors.confirmPassword}</span>
              )}
            </div>
          </div>
        )}
        {step === 4 && <div>success</div>}
        <div className="flex gap-5">
          <button
            className={`${
              step === 1 && "hidden"
            } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={handlePrev}
            disabled={step === 1}
          >
            Prev
          </button>
          <button
            className={`${
              step === 4 && "hidden"
            } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={handleNext}
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
