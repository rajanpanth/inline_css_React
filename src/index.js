import React from "react";
import ReactDOM from "react-dom";
const customStyles = {
  color: "red",
  fontSize: "20px",
  border: "2px solid black",
};

customStyles.color = "blue";
ReactDOM.render(
  <h1 style={customStyles}>Hello World!</h1>,
  document.getElementById("root")
);
