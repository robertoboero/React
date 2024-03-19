import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
import Player from "./components/Player";

export const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};
const INITIAL_GAME_BOARD = [
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

function deriveWinner(gameBoard, players) {
  let winner;
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
      winner = players[firtSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveHasDrow(gameTurns) {
  let hasDraw;
  if (gameTurns.length >= 9) {
    hasDraw = true;
  }
  return hasDraw;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  //const [isPlayer, setIsPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivatedPlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = deriveHasDrow(gameTurns);

  function resetHandle() {
    setGameTurns([]);
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

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <Players
          currentPlayer={currentPlayer}
          onPlayerChange={handlePlayerNameChange}
        ></Players>
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
