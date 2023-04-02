interface Props {
  label: string;
  name: string;
  type: string;
  value: string;
  disabled?: boolean;
  autoFocus?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  label,
  name,
  type,
  value,
  disabled = false,
  autoFocus = false,
  hasError = false,
  errorMsg,
  onChangeHandler,
}) => {
  return (
    <div>
      <div className="flex w-full">
        <label className="relative">
          <input
            required
            disabled={disabled}
            autoFocus={autoFocus}
            type={type}
            name={name}
            value={value}
            onChange={onChangeHandler}
            className={`px-4 py-2 text-lg outline-none border-2 rounded duration-200 peer  bg-inherit ${
              hasError
                ? "border-red-500 focus:border-red-500"
                : "border-gray-400 hover:border-gray-600"
            }`}
          />

          <span
            className={`absolute left-0 top-2 px-1 text-lg tracking-wide  pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white ml-2 peer-valid:text-sm peer-valid:-translate-y-5 ${
              hasError
                ? "peer-focus:text-red-500"
                : "peer-focus:text-indigo-600"
            } `}
          >
            {label}
          </span>
        </label>
      </div>
        <p className="text-red-500 pt-2">{errorMsg}</p>
    </div>
  );
};

export default TextInput;
