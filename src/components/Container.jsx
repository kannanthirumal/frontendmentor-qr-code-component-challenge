import "./Container.css";
import React from "react";

import Oval from "./Square";
import TextContainer from "./TextContainer";

function Container() {
  return (
    <div className="container">
      <Oval />
      <TextContainer />
    </div>
  );
}

export default Container;
