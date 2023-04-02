import React, { useState } from "react";
import HidePass from "../assets/svg/HidePass";
import ShowPass from "../assets/svg/ShowPass";

interface Props {
  label: string;
  name: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

const PasswordInput: React.FC<Props> = ({ label, name, disabled = false , autoFocus = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : "password";

  return (
    <div className="flex w-full">
      <label className="relative">
        <input
          required
          disabled={disabled}
          autoFocus={autoFocus}
          type={inputType}
          name={name}
          className="px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit"
        />

        <span className="absolute left-0 top-2 px-1 text-lg tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white ml-2 peer-valid:text-sm peer-valid:-translate-y-5">
          {label}
        </span>
        <button
          type="button"
          className="absolute right-2 top-3 px-2"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <HidePass /> : <ShowPass />}
        </button>
      </label>
    </div>
  );
};

export default PasswordInput;
