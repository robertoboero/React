import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onPlayerChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isClick, setIsClick] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  function editHandler() {
    setIsClick((editing) => !editing);
    if (!isClick) {
      setPlayerName(" ");
    }
    if (isClick) {
      onPlayerChange(symbol, playerName);
    }
  }
  function handleChange(e) {
    console.log(initialName + "=" + playerName);
    if (playerName == initialName) {
      console.log("ciao");
    }
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
