import { useState } from "react";
import Buttons from "./Buttons";
import UserInput from "./UserInput";
import Header from "./Header";

const CalculatorContainer = () => {
  const [currentOperand, setCurrentOperand] = useState(""); // Initialize state for the current operand
  const [previousOperand, setPreviousOperand] = useState(""); // Initialize state for the previous operand
  const [operator, setOperator] = useState(null); // Initialize state for the operator

  const handleButtonClick = ({ value, type }) => {
    if (value === "RESET") {
      setCurrentOperand("");
      setPreviousOperand("");
      setOperator(null);
    } else if (value === "DEL") {
      setCurrentOperand((prev) => prev.toString().slice(0, -1));
    } else if (type === 'operator') {
      if (currentOperand && previousOperand && operator) {
        const prevNum = parseFloat(previousOperand);
        const currentNum = parseFloat(currentOperand);
        
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
        
        setPreviousOperand(result.toString() + " " + operator); // Update previousOperand with the result
        setCurrentOperand(""); // Reset currentOperand for next input
      } else if (currentOperand) {
        // Move currentOperand to previousOperand if only currentOperand is set
        setPreviousOperand(currentOperand + " " + operator);
        setCurrentOperand("");
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
