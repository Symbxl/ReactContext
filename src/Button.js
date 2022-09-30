import React from "react";
import themes from "./themes";
import "./styles.css";

export default function Button() {
  return (
    <button
      className="button"
      style={{
        backgroundColor: themes.light.buttonBackgroundColor,
        color: themes.lightbuttonTextColor
      }}
    >
      Toggle Theme
    </button>
  );
}
