import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-red-300">{children}</div>;
};

export default Card;
