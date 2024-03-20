import Input from "./Input";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input />
        <Input />
      </div>
      <div className="input-group">
        <Input />
        <Input />
      </div>
    </div>
  );
}
