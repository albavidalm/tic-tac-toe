import "../stylesheets/App.css";
import "../stylesheets/App.scss";
import "./Square";
import "./Turn";
import Board from "./Board";
import { useState } from "react";
import Turn from "./Turn";

const App = () => {
  //ESTADOS DE LA APP
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  // FUNCIÓN MANEJADORA DEL CLICK
  const handleClick = (square) => {
    let newSquares = [...squares];
    // IDENTIFICA EL TURNO:
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkWinner(newSquares);
  };

  // FUNCIÓN DETECTAR GANADOR
  const checkWinner = (newSquares) => {
    const winnerPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerPositions.length; i++) {
      const [a, b, c] = winnerPositions[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        // si se cumple es que hay un ganador
        finishGame(newSquares[a], winnerPositions[i]);
        return;
      }
    }
    // Si hay un empate
    if (!newSquares.includes(null)) {
      finishGame(null, Array.from(Array(10).keys()));
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  // FUNCIÓN PARAR EL JUEGO
  const finishGame = (winnerPositions) => {
    setTurn(null);
  };

  // BORRAR JUEGO
  const clearGame = () => (
    <button
      className="button__start"
      onClick={() => {
        setTurn("X");
        setSquares(Array(9).fill(null));
      }}
    >
      Start Game
    </button>
  );

  return (
    <div className="page">
      <h1 className="page__header">Tic tac toe</h1>
      <div className="container">
        <Board turn={turn} squares={squares} onClick={handleClick} />
        <Turn turn={turn} />
        {clearGame()}
      </div>
    </div>
  );
};

export default App;
