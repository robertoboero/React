import { useState } from "react";

export default function GameBoard({ board, onSelectSquare }) {
  /*  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, coloumnIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [deriveActivatedPlayer(prevTurns);
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][coloumnIndex] = isPlayer;
      return updatedBoard; 
    });
    onSelectSquare();
  } */
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, coloumnIndex) => (
              <li key={coloumnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, coloumnIndex)}
                  disabled={playerSymbol ? true : false}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
