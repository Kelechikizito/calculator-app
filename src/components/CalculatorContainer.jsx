import Buttons from "./Buttons";
import UserInput from "./UserInput";
import Header from "./Header";

const CalculatorContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <UserInput />
      <Buttons />
    </div>
  );
};

export default CalculatorContainer;
