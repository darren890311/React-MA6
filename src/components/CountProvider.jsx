import React, { createContext, useState } from "react";

export const countContext = createContext();

export const CountProvider = ({ children }) => {
  const [onCount, setOnCount] = useState(0);

  const handleToggle = (isOn) => {
    setOnCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <countContext.Provider value={{ onCount, handleToggle }}>
      {children}
    </countContext.Provider>
  );
};
