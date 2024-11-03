import { useState } from "react";
import Buttons from "./Buttons";
import UserInput from "./UserInput";
import Header from "./Header";

const CalculatorContainer = () => {
  const [currentOperand, setCurrentOperand] = useState(""); // Initialize state for the operand
  const [previousOperand, setPreviousOperand] = useState(""); // Initialize state for the operand

  const handleButtonClick = (value) => {
    setCurrentOperand((prev) => prev + value);
  
    // Check if the value is an operator (e.g., "+", "-", "/", "*")
    if (value === " + " || value === " - " || value === " / " || value === " * ") {
      setPreviousOperand((prev) => Number(prev) + Number(currentOperand));
      setCurrentOperand(""); // Reset current operand after operator is used
    } else {
      // Otherwise, concatenate the value to the current operand as it's likely a number or decimal
      setPreviousOperand((prev) => prev + value);
    }
  };
  

  return (
    <div className="flex flex-col gap-4">
      <Header />
      <UserInput
        currentOperand={currentOperand}
        previousOperand={previousOperand}
      />{" "}
      {/* Pass the state value to UserInput */}
      <Buttons handleClick={handleButtonClick} />{" "}
      {/* Pass the handleButtonClick function to Buttons */}
    </div>
  );
};

export default CalculatorContainer;
