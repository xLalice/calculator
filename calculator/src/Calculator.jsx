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
    const [isResultDisplayed, setIsResultDisplayed] = React.useState(false)
    
    function handleNumClick(btn) {
      let newExpression = expression;
      if (display === "0" || isResultDisplayed) {
        newExpression = btn;
        setDisplay(btn); 
        setIsResultDisplayed(false)
      } else {
        newExpression += btn;
        setDisplay(prevDisplay => prevDisplay + btn);
      }
    
      setExpression(newExpression);
    }
    

    function handleOperatorClick(btn) {
      const lastCharacter = expression.slice(-1);
      if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/") {
        return; 
      }
  
      if (expression.endsWith("=")) {
        setExpression(display + btn);
      } else {
        setExpression(prevState => prevState + btn);
      }
      setDisplay(btn);
    }
    
    function evaluateExpression() {
      if (!expression.endsWith("=") && !isNaN(expression.slice(-1))) {
        try {
          const calculatedResult = eval(expression);
          const newExpression = `${expression}=${calculatedResult}`;
          
          setDisplay(calculatedResult.toString());
          setExpression(newExpression);
          setIsResultDisplayed(true)
        } catch (error) {
          setDisplay("Error");
          setExpression("");
        }
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

  
  
  
  
  
  