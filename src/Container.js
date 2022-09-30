import React from "react";
import themes from "./themes";
import "./styles.css";

export default function Container({ children }) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: themes.light.containerBackgroundColor
      }}
    >
      {children}
    </div>
  );
}
