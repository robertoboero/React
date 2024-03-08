import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/players";

function App() {
  const [isPlayer, setIsPlayer] = useState("X");

  function handleSelectSquare() {
    console.log(isPlayer);
    setIsPlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <Players isPlayer={isPlayer}></Players>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          isPlayer={isPlayer}
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
