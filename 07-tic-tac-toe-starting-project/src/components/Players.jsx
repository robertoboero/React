import Player from "./Player";
export default function Players({ isPlayer }) {
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName="Player 1"
        symbol="X"
        isActive={isPlayer == "X" ? true : false}
      ></Player>
      <Player
        name="Player 2"
        symbol="0"
        isActive={isPlayer == "O" ? true : false}
      ></Player>
    </ol>
  );
}
