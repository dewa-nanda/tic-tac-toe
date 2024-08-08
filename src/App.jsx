import Player from "./components/Player"

function App() {
  return (
    <section className="w-6/12 mx-auto bg-[#F2E8DC] text-[#595248] mt-5 rounded-md">
      <div className="flex gap-3 p-3">
        <Player playerName="Player 1" symbol="X"/>
        <Player playerName="Player 2" symbol="O"/>
      </div>
    </section>
  )
}

export default App
