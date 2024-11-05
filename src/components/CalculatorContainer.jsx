import { useState } from "react";
import Buttons from "./Buttons";
import UserInput from "./UserInput";
import Header from "./Header";

const CalculatorContainer = () => {
  const [currentOperand, setCurrentOperand] = useState(""); // Initialize state for the current operand
  const [previousOperand, setPreviousOperand] = useState(""); // Initialize state for the previous operand
  const [operator, setOperator] = useState(null); // Initialize state for the operator

  const roundToThreeDecimals = (num) => {
    const numString = num.toString();
    if (numString.includes(".") && numString.split(".")[1].length > 3) {
      return parseFloat(num.toFixed(3));
    } 
    // Return the number as-is if it already has 3 or fewer decimal places
    return num;
  }

  const handleButtonClick = ({ value, type }) => {
    if (value === "RESET") {
      setCurrentOperand("");
      setPreviousOperand("");
      setOperator(null);
    } else if (value === "DEL") {
      setCurrentOperand((prev) => prev.toString().slice(0, -1));
    } else if (type === 'operator' || value === '=') {
      if (currentOperand && previousOperand && operator) {
        const prevNum = parseFloat(previousOperand);
        const currentNum = parseFloat(currentOperand);
        if(isNaN(prevNum) || isNaN(currentNum)) return;
        
        let result;
        switch (operator) {
          case "+":
            result = prevNum + currentNum;
            break;
          case "-":
            result = prevNum - currentNum;
            break;
          case "/":
            result = prevNum / currentNum;
            break;
          case "x":
            result = prevNum * currentNum;
            break;
          default:
            result = currentNum;
        }

        result = roundToThreeDecimals(result);
        
        setPreviousOperand(value === '=' ? "" :result.toString() + " " + value); // Update previousOperand with the result
        setCurrentOperand(value !== '=' ? "" :result.toString()); // Reset currentOperand for next input
      } else if (currentOperand) {
        // Move currentOperand to previousOperand if only currentOperand is set
        setPreviousOperand(value === '=' ? "" :currentOperand + " " + value);
        setCurrentOperand(value !== '=' ? "" :currentOperand);
      }
      setOperator(value); // Set the new operator
    } else {
      // Concatenate digit input to currentOperand
      setCurrentOperand((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Header />
      <UserInput
        currentOperand={currentOperand}
        previousOperand={previousOperand}
      />
      <Buttons handleClick={handleButtonClick} />
    </div>
  );
};

export default CalculatorContainer;
