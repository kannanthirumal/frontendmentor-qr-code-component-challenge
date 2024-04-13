import "./TextContainer.css";
import React from "react";
import TextHead from "./TextHead";
import TextBody from "./TextBody";

function TextArea() {
  return (
    <div className="text-container">
      <TextHead />
      <TextBody />
    </div>
  );
}

export default TextArea;
