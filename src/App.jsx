import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";
function App() {
  const[activePlayer ,setActivePlayer]=useState('X');
  const [gameTurns , setGameTurns ] = useState([]);
  
  function handleSelectSquare(rowIndex , colIndex){
    setActivePlayer((currentActivePlayer)=> currentActivePlayer==='X'? 'O' : 'X');
    setGameTurns( prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player ==='X'){
         currentPlayer= 'O';
      }
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
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
    </div>
    <Log turns={gameTurns}/>
    </main>
  )
}

export default App

