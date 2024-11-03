import { useState } from "react";
import Buttons from "./Buttons";
import UserInput from "./UserInput";
import Header from "./Header";

const CalculatorContainer = () => {
  const [currentOperand, setCurrentOperand] = useState(""); // Initialize state for the operand
  const [previousOperand, setPreviousOperand] = useState(""); // Initialize state for the operand

  const handleButtonClick = (value) => {
    // Update the current operand based on the clicked button value

    if (value === "RESET") {
      setCurrentOperand("");
      setPreviousOperand("");
    } else if (value === "DEL") {
      setCurrentOperand((prev) => prev.toString().slice(0, -1))
      setPreviousOperand((prev) => prev.toString().slice(0, -1))
    } else {
      setCurrentOperand((prev) => {
        return prev === "0" ? value : prev + value;
      });

      setPreviousOperand((prev) => {
        return prev === "0" ? value : prev + value;
      });
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
