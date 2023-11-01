import React,{ useState } from 'react';

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
function GameBoard({onSelectSquare , activePlayerSymbol}) {
    const[gameboard , setGameboard]=useState(initialGameBoard);



    function handleSelectSquare(rowIndex,colIndex){
        setGameboard((prevGameboard)=>{
            const updatedBoard = [...prevGameboard.map(innerArray =>[...innerArray])];
            updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
        return updatedBoard;
    });

    onSelectSquare();
    }



  return (
   <ol id="game-board">
   {gameboard.map((row,rowIndex)=>
     <li key={rowIndex}>
     <ol>
        {row.map((playerSymbol, colIndex)=>
            <li key={colIndex}>
             <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
            </li>
        )}
     </ol>
    </li>
   )}
   </ol>
  )
}

export default GameBoard;

