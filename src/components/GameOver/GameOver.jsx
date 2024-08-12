import './style.css';

// eslint-disable-next-line react/prop-types
const GameOver = ({winner, onGameReset}) => {
   return (
    <div id="game-over">
        <h2 className='mb-2'>Game Over</h2>
        {winner ? <p>{winner} won!</p> : <p>It's Draw!</p>}
        
        <p className='mt-5'>
            <button onClick={onGameReset}>Rematch!</button>
        </p>
    </div>
    ) 
}

export default GameOver;