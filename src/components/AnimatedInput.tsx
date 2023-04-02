import React from "react";

const AnimatedInput = () => {
  return (
    <div>
      <div className="flex h-[40vh] items-center justify-center bg-gray-200">
        <label className="relative">
          <input
            required
            type="text"
            className="px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit"
          />

          <span className="absolute left-0 top-2 px-1 text-lg tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">
            Placeholder
          </span>
        </label>
      </div>
    </div>
  );
};

export default AnimatedInput;
