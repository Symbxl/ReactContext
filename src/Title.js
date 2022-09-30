import React from "react";
import themes from "./themes";
import "./styles.css";
import { useNightMode } from "./context/NightModeProvider";

export default function Title() {
  const { nightMode } = useNightMode();

  return (
    <h1
      className="title"
      style={
        nightMode
          ? { color: themes.dark.titleTextColor }
          : { color: themes.light.titleTextColor }
      }
    >
      OfferUp Test
    </h1>
  );
}
