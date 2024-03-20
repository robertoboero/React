import { useState } from "react";
export default function Input() {
  const [inputValue, setInputValue] = useState();

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <label>Initial Investiment</label>
      <input type="number" onChange={handleOnChange} value={inputValue} />
    </div>
  );
}
