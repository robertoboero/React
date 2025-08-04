import Player from "./Player";
import { PLAYERS } from "../App.jsx";
export default function Players({ currentPlayer, onPlayerChange }) {
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName={PLAYERS.X}
        symbol="X"
        isActive={currentPlayer == "X" ? true : false}
        onPlayerChange={onPlayerChange}
      ></Player>
      <Player
        initialName={PLAYERS.X}
        symbol="0"
        isActive={currentPlayer == "O" ? true : false}
        onPlayerChange={onPlayerChange}
      ></Player>
    </ol>
  );
}
