import React from "react";

export default function Display(props) {
  return (
    <div className="display">
      <h3 className="expression-display">{props.expression}</h3>
      <h3 className="result-display">{props.display}</h3>
    </div>
  );
}
