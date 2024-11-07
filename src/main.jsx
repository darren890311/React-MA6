import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GridContainer from "./components/GridContainer";
import { CountProvider } from "./components/CountProvider";

createRoot(document.getElementById("root")).render(
  <CountProvider>
    <GridContainer />
  </CountProvider>
);
