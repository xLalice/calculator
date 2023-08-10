import React from 'react';
import "./styles/Calculator.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from './Button';
import Display from './Display';

const Calculator = () => {
    const buttonData = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "C", "0", "=", "/"
      ];

    const [display, setDisplay] = React.useState("0")
    const [expression, setExpression] = React.useState("")
    
    function handleNumClick(btn) {
      let newExpression = expression;
      if (display === "0" || expression.endsWith("=")) {
        newExpression = btn;
        setDisplay(btn); 
      } else {
        newExpression += btn;
        setDisplay(prevDisplay => prevDisplay + btn);
      }
    
      setExpression(newExpression);
    }
    

    function handleOperatorClick(btn) {
      if (expression.endsWith("=")) {
        setExpression(display + btn);
      } else {
        setExpression(prevState => prevState + btn);
      }
      setDisplay(btn);
    }
    
    function evaluateExpression() {
      try {
        const calculatedResult = eval(expression);
        const newExpression = `${expression}=${calculatedResult}`;
        
        setDisplay(calculatedResult);
        setExpression(newExpression);
      } catch (error) {
        setDisplay("Error");
        setExpression("");
      }
    }

    function clear() {
      setDisplay("0");
      setExpression("");
    }

    

    return (
      <div className="calculator">
        <Display expression={expression} display={display} />
        <div className="button-container">
          {buttonData.map((btn, index) => (
            <Button 
              key={index} 
              btn={btn} 
              index={index} 
              handleNumClick={handleNumClick} 
              handleOperatorClick={handleOperatorClick}
              evaluateExpression={evaluateExpression}
              clear={clear}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Calculator;

  
  
  
  
  
  