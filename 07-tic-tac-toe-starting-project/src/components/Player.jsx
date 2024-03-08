import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isClick, setIsClick] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  function editHandler() {
    setIsClick((editing) => !editing);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  if (isClick) {
    editablePlayerName = (
      <input
        type="text"
        className=""
        defaultValue={initialName}
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{btnCaption}</button>
    </li>
  );
}
