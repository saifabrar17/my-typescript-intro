import React, { useState } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

enum ComponentType {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
}
type FormData = {
  step1Data: {
    name: string;
    email: string;
  };
  step2Data: {
    age: number;
    gender: string;
  };
  step3Data: {
    address: string;
    phone: string;
  };
};
const ComponentSwitcher: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState(
    ComponentType.FirstComponent
  );

  const handleSwitchComponent = (componentType: ComponentType) => {
    setCurrentComponent(componentType);

    console.log(componentType);
  };

  return (
    <div className="shadow-2xl py-10 rounded-md">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4">
          <button
            className={`py-2 px-4  border-b-2
          ${
            currentComponent === ComponentType.FirstComponent
              ? "border-blue-500 text-black"
              : "border-gray-300"
          }`}
            onClick={() => handleSwitchComponent(ComponentType.FirstComponent)}
          >
            Component 1
          </button>
          <button
            className={`py-2 px-4  border-b-2
         ${
           currentComponent === ComponentType.SecondComponent
             ? "border-blue-500 text-black"
             : "border-gray-300"
         }`}
            onClick={() => handleSwitchComponent(ComponentType.SecondComponent)}
          >
            Component 2
          </button>
          <button
            className={`py-2 px-4  border-b-2
          ${
            currentComponent === ComponentType.ThirdComponent
              ? "border-blue-500 text-black"
              : "border-gray-300"
          }`}
            onClick={() => handleSwitchComponent(ComponentType.ThirdComponent)}
          >
            Component 3
          </button>
        </div>
        <div className="mt-4">
          {currentComponent === ComponentType.FirstComponent && (
            <FirstComponent />
          )}
          {currentComponent === ComponentType.SecondComponent && (
            <SecondComponent />
          )}
          {currentComponent === ComponentType.ThirdComponent && (
            <ThirdComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentSwitcher;
