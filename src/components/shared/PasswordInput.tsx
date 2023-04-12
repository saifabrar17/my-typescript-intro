import React, { useState } from "react";
import HidePass from "../../assets/svg/HidePass";
import ShowPass from "../../assets/svg/ShowPass";

interface Props {
  label: string;
  name: string;
  value: string;
  errorMsg: string;
  disabled?: boolean;
  autoFocus?: boolean;
  passwordIcon?: React.ReactNode;
  hasError?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const PasswordInput: React.FC<Props> = ({
  label,
  name,
  value,
  inputRef,
  errorMsg,
  passwordIcon = false,
  autoFocus = false,
  disabled = false,
  
  hasError = false,
  onChangeHandler,
}) => {
  const [showPassword, setShowPassword] = useState(false);
 
  const inputType = showPassword ? "text" : "password";

  return (
    <div>
      <div className="flex w-full">
        <label className="relative">
          <input
            required
            disabled={disabled}
            autoFocus={autoFocus}
            type={inputType}
            ref={inputRef}
            value={value}
            name={name}
            onChange={onChangeHandler}
            className={`px-4 pl-4 py-2 text-lg outline-none border-2 rounded duration-200 peer  bg-inherit ${
              errorMsg
                ? "border-red-500 focus:border-red-500"
                : "border-gray-400 hover:border-gray-600"
            } ${
              disabled &&
              "bg-white rounded focus:outline-none disabled:opacity-25"
            } ${passwordIcon && "pl-8"}`}
          />

          <span
            className={`absolute ${
              passwordIcon
                ? "left-4 peer-valid:-translate-x-4 peer-focus:-translate-x-4"
                : "left-0"
            } top-2 px-1 text-lg tracking-wide  pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white ml-2 peer-valid:text-sm peer-valid:-translate-y-5  ${
              errorMsg
                ? "peer-focus:text-red-500"
                : "peer-focus:text-indigo-600"
            } ${disabled && " -translate-y-5 -translate-x-4"}`}
          >
            {label}
          </span>
          <button
            type="button"
            className="absolute right-2 top-4 px-2"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <HidePass /> : <ShowPass />}
          </button>
          {passwordIcon && <div className="absolute left-2 top-3">{passwordIcon}</div>}
          {/* {lockIcon && <Lock className="absolute left-2 top-3" />} */}
        </label>
      </div>
      <p className="text-red-500 pt-2">{errorMsg}</p>
    </div>
  );
};

export default PasswordInput;
