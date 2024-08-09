import { useState } from "react"
import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Player"

function App() {
  const [playerActive, setPlayerActive] = useState('X');

  const handleSelectedSquare = () => {
    setPlayerActive((currentPlayerActive) => currentPlayerActive === 'X' ? 'O' : 'X');
  }

  return (
    <section className="w-6/12 mx-auto bg-[#F2E8DC] text-[#595248] mt-5 rounded-md">
      <div className="flex gap-3 p-3">
        <Player playerName="Player 1" symbol="X" isActive={playerActive === 'X'}/>
        <Player playerName="Player 2" symbol="O" isActive={playerActive === 'O'}/>
      </div>

      <GameBoard onClickGameBoard={handleSelectedSquare} symbolActive={playerActive} />
    </section>
  )
}

export default App
