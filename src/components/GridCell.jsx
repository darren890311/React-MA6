import React, { useState, useContext } from "react";
import { countContext } from "./CountProvider";

export default function GridCell() {
  const [isOn, setIsOn] = useState(false);
  const { handleToggle } = useContext(countContext);

  const toggleCell = () => {
    setIsOn((preIsOn) => {
      const newIsOn = !preIsOn;
      handleToggle(newIsOn);
      return newIsOn;
    });
  };
  const cellStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid gray",
    backgroundColor: isOn ? "black" : "white",
  };
  return <div style={cellStyle} onClick={toggleCell}></div>;
}
