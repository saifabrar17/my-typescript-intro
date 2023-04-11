import React from "react";
import TextInput from "../shared/TextInput";

const SecondComponent = () => {
  return (
    <div>
      <TextInput label="Address" name="address" type="text"></TextInput>
      <TextInput label="District" name="district" type="text"></TextInput>
    </div>
  );
};

export default SecondComponent;
