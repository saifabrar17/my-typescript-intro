import React from "react";
import TextInput from "../shared/TextInput";

const ThirdComponent = () => {
  return (
    <div>
      <TextInput label="Phone" name="phone" type="number"></TextInput>
      <TextInput label="Email" name="email" type="email"></TextInput>
    </div>
  );
};

export default ThirdComponent;
