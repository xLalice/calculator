import React from "react";

export default function Button(props) {
  const isEqualOperator = props.btn === "=";
  const isClear = props.btn === "C";

  const className = `button ${isNaN(props.btn) && props.btn !== "." ? "operator" : ""} ${isEqualOperator ? "equal" : ""}`;

  const handleClick = () => {
    if (isEqualOperator) {
      props.evaluateExpression();
    } else if (isClear){
        props.clear()
    } else if (!isNaN(props.btn)) {
      props.handleNumClick(props.btn);
    } else {
      props.handleOperatorClick(props.btn);
    }
  };

  return (
    <button
      key={props.index}
      id={isEqualOperator ? "equal" : ""}
      className={className}
      onClick={handleClick}
    >
      {props.btn}
    </button>
  );
}
