import React from "react";
import themes from "./themes";
import { useNightMode } from "./context/NightModeProvider";
import "./styles.css";

export default function Container({ children }) {
  const { nightMode } = useNightMode();
  return (
    <div
      className="container"
      style={
        nightMode
          ? {
              backgroundColor: themes.dark.containerBackgroundColor,
            }
          : {
              backgroundColor: themes.light.containerBackgroundColor,
            }
      }
    >
      {children}
    </div>
  );
}
