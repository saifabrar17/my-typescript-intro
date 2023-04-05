import React, { useState } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

enum ComponentType {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
}

const ComponentSwitcher: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState(
    ComponentType.FirstComponent
  );

  const handleSwitchComponent = (componentType: ComponentType) => {
    setCurrentComponent(componentType);

    console.log(componentType);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        <button
          className={`py-2 px-4 rounded-md
          ${
            currentComponent === ComponentType.SecondComponent
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleSwitchComponent(ComponentType.FirstComponent)}
        >
          Component 1
        </button>
        <button
          className={`py-2 px-4 rounded-md
          ${
            currentComponent === ComponentType.SecondComponent
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleSwitchComponent(ComponentType.SecondComponent)}
        >
          Component 2
        </button>
        <button
          className={`py-2 px-4 rounded-md
          ${
            currentComponent === ComponentType.SecondComponent
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
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
  );
};

export default ComponentSwitcher;
