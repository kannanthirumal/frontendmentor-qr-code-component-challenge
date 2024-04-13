import "./Square.css";
import React from "react";

import barCode from "../images/image-qr-code.png";

function Square() {
  return (
    <div className="square">
      <img src={barCode} alt="barcode" />
    </div>
  );
}

export default Square;
