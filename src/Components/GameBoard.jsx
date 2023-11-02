// import React,{ useState } from 'react';

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
function GameBoard({onSelectSquare , turns}) {

  let gameboard = initialGameBoard;
  
  for(const turn of turns){
    const { square , player } = turn;
    const { row , col }= square;
    gameboard[row][col]= player;
  }

    // const[gameboard , setGameboard]=useState(initialGameBoard);



    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameboard((prevGameboard)=>{
    //         const updatedBoard = [...prevGameboard.map(innerArray =>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //     return updatedBoard;
    // });

    // onSelectSquare();
    // }



  return (
   <ol id="game-board">
   {gameboard.map((row,rowIndex)=>
     <li key={rowIndex}>
     <ol>
        {row.map((playerSymbol, colIndex)=>
            <li key={colIndex}>
             <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
            </li>
        )}
     </ol>
    </li>
   )}
   </ol>
  )
}

export default GameBoard;

