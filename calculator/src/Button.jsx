import React from "react";

const Button = React.memo(function Button({
  btn,
  evaluateExpression,
  clear,
  handleNumClick,
  handleOperatorClick
}) {
  const isEqualOperator = btn === "=";
  const isClear = btn === "C";

  const className = `button ${
    isNaN(btn) && btn !== "." ? "operator" : ""
  } ${isEqualOperator ? "equal" : ""}`;

  const handleClick = () => {
    if (isEqualOperator) {
      evaluateExpression();
    } else if (isClear) {
      clear();
    } else if (!isNaN(btn)) {
      handleNumClick(btn);
    } else {
      handleOperatorClick(btn);
    }
  };

  return (
    <button
      key={btn}
      id={isEqualOperator ? "equal" : ""}
      className={className}
      onClick={handleClick}
    >
      {btn}
    </button>
  );
});

export default Button;
