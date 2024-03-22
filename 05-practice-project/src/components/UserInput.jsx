import Input from "./Input";
import { useState } from "react";

export default function UserInput() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000, // Corretto da "initialInvestiment" a "initialInvestment"
    annualInvestment: 20000,
    expectReturn: 6,
    duration: 10,
  });

  function handleOnChange(inputIdentifier, newValue) {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [inputIdentifier]: parseFloat(newValue), // Conversione in numero
    }));
    console.log(inputValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          value={inputValue.initialInvestment}
          handleOnChange={
            (event) => handleOnChange("initialInvestment", event.target.value) // Corretto l'identificatore
          }
        />
        <Input
          label="Annual Investment"
          value={inputValue.annualInvestment}
          handleOnChange={
            (event) => handleOnChange("annualInvestment", event.target.value) // Corretto l'identificatore
          }
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          value={inputValue.expectReturn}
          handleOnChange={
            (event) => handleOnChange("expectReturn", event.target.value) // Corretto l'identificatore
          }
        />
        <Input
          label="Duration"
          value={inputValue.duration}
          handleOnChange={
            (event) => handleOnChange("duration", event.target.value) // Corretto l'identificatore
          }
        />
      </div>
    </section>
  );
}
