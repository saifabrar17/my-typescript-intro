import React from "react";

type LockTestProps = {
  width: string;
  height: string;
};

const LockTest: React.FC<LockTestProps> = ({ width, height }) => {
  return (
    <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.3712 9.03977C11.3712 10.3493 10.3092 11.4105 8.99966 11.4105C7.69016 11.4105 6.62891 10.3493 6.62891 9.03977C6.62891 7.72952 7.69016 6.66827 8.99966 6.66827C10.3092 6.66827 11.3712 7.72952 11.3712 9.03977Z"
      stroke="#23262F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.9985 14.5162C11.8545 14.5162 14.4668 12.4627 15.9375 9.03967C14.4668 5.61667 11.8545 3.56317 8.9985 3.56317H9.0015C6.1455 3.56317 3.53325 5.61667 2.0625 9.03967C3.53325 12.4627 6.1455 14.5162 9.0015 14.5162H8.9985Z"
      stroke="#23262F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  );
};

export default LockTest;


