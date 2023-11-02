import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function derivedactivePlayer(gameturns){
  let currentPlayer = 'X';
  if(gameturns.length > 0 && gameturns[0].player ==='X'){
     currentPlayer= 'O';
  }
   
  return currentPlayer;
  
}
function App() {
  // const[activePlayer ,setActivePlayer]=useState('X');
  const [gameTurns , setGameTurns ] = useState([]);

  const activePlayer = derivedactivePlayer(gameTurns);

  let gameboard = initialGameBoard;
  
  for(const turn of gameTurns){
    const { square , player } = turn;
    const { row , col }= square;
    gameboard[row][col]= player;
  } 


   let winner; 

  for(const combination of WINNING_COMBINATIONS ){
   const firstSquare=gameboard[combination[0].row][combination[0].column];
   const secoundSquare=gameboard[combination[1].row][combination[1].column];
   const thirdSquare=gameboard[combination[2].row][combination[2].column];
   
   if(firstSquare && firstSquare === secoundSquare && firstSquare=== thirdSquare)
   {
    winner = firstSquare;
   }
 
 
  }
  
  function handleSelectSquare(rowIndex , colIndex){
    // setActivePlayer((currentActivePlayer)=> currentActivePlayer==='X'? 'O' : 'X');
    setGameTurns( prevTurns => {
    
      const currentPlayer = derivedactivePlayer(prevTurns);


      let updatedTurns = [{square:{row:rowIndex , col:colIndex}, player:currentPlayer},...prevTurns]
      return updatedTurns;
    }
    );
  }

  return (
    <main>
    <div  id="game-container">
      <ol id="players" className="highlight-player">
        <Player InitialName="Player 1" symbol="X" isActive={activePlayer ==='X'}/>
        <Player InitialName="Player 2" symbol="O" isActive={activePlayer ==='O'}/>
      </ol>
      {winner && <p>you Won this !! {winner}</p>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameboard}/>
    </div>
    <Log turns={gameTurns}/>
    </main>
  )
}

export default App

