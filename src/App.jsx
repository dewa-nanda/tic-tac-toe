import { useState } from "react"
import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Player"

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerActive, setPlayerActive] = useState('X');

  const handleSelectedSquare = (rowIndex, colIndex) => {
    setPlayerActive((currentPlayerActive) => currentPlayerActive === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square : {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <section className="w-full lg:w-6/12 lg:mx-auto bg-[#F2E8DC] text-[#595248] mt-5 rounded-md">
      <div className="flex flex-col md:flex-row p-3">
        <Player playerName="Player 1" symbol="X" isActive={playerActive === 'X'}/>
        <Player playerName="Player 2" symbol="O" isActive={playerActive === 'O'}/>
      </div>

      <GameBoard 
        onSelectSquare={handleSelectedSquare} 
        turns={gameTurns} 
      />
    </section>
  )
}

export default App
