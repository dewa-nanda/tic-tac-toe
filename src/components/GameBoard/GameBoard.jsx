const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// eslint-disable-next-line react/prop-types
const GameBoard = ({onSelectSquare, turns}) => {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return (
        <div className="flex flex-col gap-1 p-3 h-72">
            {gameBoard.map((row, rowIndex) => (
                <div className="grid grid-cols-3 gap-1 h-3/6" key={rowIndex}>
                    {row.map((playerSymbol, colIndex) => (
                        <button className="border-2 border-amber-950 rounded-lg text-7xl salsa-regular" key={colIndex} onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GameBoard;