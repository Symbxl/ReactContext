import React from "react";
import themes from "./themes";
import "./styles.css";
import { useNightMode } from "./context/NightModeProvider";

export default function Button() {
  const { nightMode, setNightMode } = useNightMode(false);

  const toggleTheme = () => {
    if (nightMode) setNightMode(false);
    else setNightMode(true);
  };

  return (
    <button
      className="button"
      style={
        nightMode
          ? {
              backgroundColor: themes.dark.buttonBackgroundColor,
              color: themes.dark.buttonTextColor,
            }
          : {
              backgroundColor: themes.light.buttonBackgroundColor,
              color: themes.light.buttonTextColor,
            }
      }
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}
