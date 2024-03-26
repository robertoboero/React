import Input from "./Input";
import { useState } from "react";

export default function UserInput({ handleOnChange, inputValue }) {
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
          value={inputValue.expectedReturn}
          handleOnChange={
            (event) => handleOnChange("expectedReturn", event.target.value) // Corretto l'identificatore
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
