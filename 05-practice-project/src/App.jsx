import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

export const DEFEAULT_VALUES = {
  initialInvestment: 10000, // Corretto da "initialInvestiment" a "initialInvestment"
  annualInvestment: 20000,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputValue, setInputValue] = useState(DEFEAULT_VALUES);
  const isInputValid = inputValue.duration >= 1;

  function handleOnChange(inputIdentifier, newValue) {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [inputIdentifier]: parseFloat(newValue), // Conversione in numero
    }));
  }

  return (
    <>
      <Header />
      <UserInput handleOnChange={handleOnChange} inputValue={inputValue} />

      {!isInputValid && <p className="center">Use positive duration</p>}
      {isInputValid && <Results values={inputValue}></Results>}
    </>
  );
}

export default App;
