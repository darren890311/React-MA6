import React, { useContext } from "react";
import GridCell from "./GridCell";
import { countContext } from "./CountProvider";

export default function GridContainer() {
  const { onCount } = useContext(countContext);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 100px)",
  };
  return (
    <>
      <h2>Count: {onCount}</h2>
      <div style={containerStyle}>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </div>
    </>
  );
}
