
import { useState } from 'react';
function Square({value,onSquareClick}) {
   return <button className="square" onClick={onSquareClick}>
      {value}
    </button>


}
function Reset({onResetClick}) {
  return <button className="reset" onClick={onResetClick}>
     Reset the game 
   </button>


}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext , setXisNext] = useState(true);
  let status = null ;
  function check_draw(squares){
    for (let i =0 ; i < squares.length ; i++){
      if ( squares[i] === null) {
        return false ;
      }
    }
    return true;
  }
  function handleClick(i) {
    const squares_copy = squares.slice();
    if ( xIsNext === true && squares[i] === null) {
    squares_copy[i] = "X";
    setSquares(squares_copy);
    setXisNext(false);  
  }
    if (( xIsNext === false && squares[i] === null)){
      squares_copy[i] = "O";
      setSquares(squares_copy);
      setXisNext(true);  
    }
  }
  function Reset_onclick(squares){
    const New_array=Array(9).fill(null);
    setSquares(New_array);
    setXisNext(true);
  }
    const winner = calculateWinner(squares);
    const draw = check_draw(squares);
    
    if (winner) {
      status = "Winner: " + winner;
   }
    
   else if (draw && !winner){
    status = "Draw !"
   }
   else {
      
      status = "Next Player " + (xIsNext ? "X" : "O" ) ; 
    }
  
  
  
  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className='status'>{status}</div>
      <Reset onResetClick={() => Reset_onclick(squares)} />
    </>
  );
};
