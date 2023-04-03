import React from "react";

type LockIconProps = {
  width: string;
  height: string;
};

const LockIcon: React.FC<LockIconProps> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16">
      <path d="M2 7V5a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1zm5-3a3 3 0 0 0-3 3v2h6V7a3 3 0 0 0-3-3z"></path>
    </svg>
  );
};

export default LockIcon;
