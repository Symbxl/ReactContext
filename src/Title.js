import React from "react";
import themes from "./themes";
import "./styles.css";

export default function Title() {
  return (
    <h1 className="title" style={{ color: themes.light.titleTextColor }}>
      OfferUp Test
    </h1>
  );
}
