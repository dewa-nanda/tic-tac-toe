import { useState } from "react"
import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./Data/winning-combinations";

const PLAYER = {
  'X' : 'Player 1',
  'O' : 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  let winner = null;
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = PLAYER[firstSquareSymbol];
    }
  };

  const handleSelectedSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = activePlayer;

      const updatedTurns = [
        { square : {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns
      ];

      return updatedTurns;
    });

    
  }

  const handleResetGame = () => {
    setGameTurns([]);
  }

  return (
    <>
      <section className="w-full lg:w-6/12 lg:mx-auto bg-[#F2E8DC] text-[#595248] mt-5 rounded-md">
        <div className="flex flex-col md:flex-row p-3">
          <Player playerName={PLAYER['X']} symbol="X" isActive={activePlayer === 'X'}/>
          <Player playerName={PLAYER['O']} symbol="O" isActive={activePlayer === 'O'}/>
        </div>

        <GameBoard 
          onSelectSquare={handleSelectedSquare} 
          board={gameBoard} 
        />
        {winner && <GameOver winner={winner} onGameReset={handleResetGame} />}
      </section>
      <Log turns={gameTurns} />
    </>
  )
}

export default App
