import Player from "./Player";
export default function Players({ currentPlayer }) {
  console.log(currentPlayer);
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName="Player 1"
        symbol="X"
        isActive={currentPlayer == "X" ? true : false}
      ></Player>
      <Player
        name="Player 2"
        symbol="0"
        isActive={currentPlayer == "O" ? true : false}
      ></Player>
    </ol>
  );
}
