import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivatedPlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

let winner;
let hasDraw;

function App() {
  //const [isPlayer, setIsPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let currentPlayer = deriveActivatedPlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const winningCombination of WINNING_COMBINATIONS) {
    const firtSquareSymbol =
      gameBoard[winningCombination[0].row][winningCombination[0].column];
    const secondSquareSymbol =
      gameBoard[winningCombination[1].row][winningCombination[1].column];
    const thirdSquareSymbol =
      gameBoard[winningCombination[2].row][winningCombination[2].column];

    if (
      firtSquareSymbol &&
      firtSquareSymbol == secondSquareSymbol &&
      firtSquareSymbol == thirdSquareSymbol
    ) {
      winner = firtSquareSymbol;
    }
  }

  if (gameTurns.length >= 9) {
    hasDraw = true;
  }
  function resetHandle() {
    setGameTurns([]);
    winner = false;
    hasDraw = false;
  }
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
          board={gameBoard}
        ></GameBoard>
      </div>
      <Log turns={gameTurns} />
      {winner || hasDraw ? (
        <GameOver winner={winner} resetHandle={resetHandle} />
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
