import React from "react";

const style = {
  background: "#0063AF",
  borderRadius: "5px",
  display: "inline-block",
  padding: "3px 1rem",
  color: "white",
  fontSize: "20px"
};

const RectangleButton = ({ message, extraStyle }) => {
  return <div style={{ ...style, ...extraStyle }}>{message}</div>;
};

export default RectangleButton;
