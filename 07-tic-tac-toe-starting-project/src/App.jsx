import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/players";
import Log from "./components/Log";

function deriveActivatedPlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  //const [isPlayer, setIsPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  let currentPlayer = deriveActivatedPlayer(gameTurns);

  function handleSelectSquare(rowIndex, coloumnIndex) {
    //setIsPlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivatedPlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: coloumnIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <Players currentPlayer={currentPlayer}></Players>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        ></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
