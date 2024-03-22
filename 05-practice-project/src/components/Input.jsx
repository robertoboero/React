export default function Input({ value, label, handleOnChange }) {
  return (
    <p>
      <label>{label}</label>
      <input type="number" onChange={handleOnChange} value={value} />
    </p>
  );
}
