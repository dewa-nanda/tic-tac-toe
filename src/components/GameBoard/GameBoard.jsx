const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = () => {
    return (
        <div className="flex flex-col gap-1 p-3 h-72">
            {initialGameBoard.map((row, rowIndex) => (
                <div className="grid grid-cols-3 gap-1 h-3/6" key={rowIndex}>
                    {row.map((playerSymbol, colIndex) => (
                        <button className="border-2 border-amber-950 rounded-lg text-7xl salsa-regular" key={colIndex}>X</button>        
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GameBoard;