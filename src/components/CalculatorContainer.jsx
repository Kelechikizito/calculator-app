import { useState } from "react";
import Buttons from "./Buttons";
import UserInput from "./UserInput";
import Header from "./Header";

const CalculatorContainer = () => {
  const [currentOperand, setCurrentOperand] = useState(""); // Initialize state for the current operand
  const [previousOperand, setPreviousOperand] = useState(""); // Initialize state for the previous operand
  const [operator, setOperator] = useState(null); // Initialize state for the operator

  const roundToThreeDecimals = (num) => {
    const roundedNum = parseFloat(num.toFixed(3)); // Limit to 3 decimal places
    const [integerPart, decimalPart] = roundedNum.toString().split("."); // Split into integer and decimal parts
    const formattedInteger = parseInt(integerPart).toLocaleString(); // Format integer with commas
  
    // Return formatted number with decimal part (if exists) or just the integer part
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  };
  
  const handleButtonClick = ({ value, type }) => {
    if (value === "RESET") {
      setCurrentOperand("");
      setPreviousOperand("");
      setOperator(null);
    } else if (value === "DEL") {
      setCurrentOperand((prev) => prev.toString().slice(0, -1));
    } else if (type === "operator" || value === "=") {
      if (currentOperand && previousOperand && operator) {
        const prevNum = parseFloat(previousOperand);
        const currentNum = parseFloat(currentOperand);
        if (isNaN(prevNum) || isNaN(currentNum)) return;
  
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
  
        setPreviousOperand(value === "=" ? "" : result + " " + value); // Update previousOperand with formatted result
        setCurrentOperand(value !== "=" ? "" : result); // Reset currentOperand for next input
      } else if (currentOperand) {
        // Move currentOperand to previousOperand if only currentOperand is set
        setPreviousOperand(value === "=" ? "" : currentOperand + " " + value);
        setCurrentOperand(value !== "=" ? "" : currentOperand);
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
