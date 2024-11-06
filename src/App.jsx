import CalculatorContainer from "./components/CalculatorContainer";

function App() {
  return (
    <div
      className="h-screen bg-[#3c4654] 
      theme1:bg-theme1-mainBackground
      theme2:bg-theme2-mainBackground
      theme3:bg-theme3-mainBackground 
      flex justify-center items-center"
    >
      <CalculatorContainer />
    </div>
  );
}

export default App;
