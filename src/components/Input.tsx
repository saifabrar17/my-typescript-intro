import React from "react";

type inputProps = {

    id: string;
    type: string;
    placeholder: string;
    value: string,
    children?: React.ReactNode;

};

const Input = ({id, type, placeholder, value} : inputProps) => {
  return (
    <input
            className="shadow   border rounded w-full py-2 px-3 text-gray-700"
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
           
          />
    
  );
};

export default Input;
