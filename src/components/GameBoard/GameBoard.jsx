import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({onClickGameBoard, symbolActive}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard(prevGameBoard => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = symbolActive;
            return updatedBoard;
        });

        console.log(gameBoard);
        onClickGameBoard();
    }

    return (
        <div className="flex flex-col gap-1 p-3 h-72">
            {gameBoard.map((row, rowIndex) => (
                <div className="grid grid-cols-3 gap-1 h-3/6" key={rowIndex}>
                    {row.map((playerSymbol, colIndex) => (
                        <button className="border-2 border-amber-950 rounded-lg text-7xl salsa-regular" key={colIndex} onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GameBoard;