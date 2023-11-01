import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
function App() {
  const[activePlayer ,setActivePlayer]=useState('X');
  
  function handleSelectSquare(){
    setActivePlayer((currentActivePlayer)=> currentActivePlayer==='X'? 'O' : 'X');
  }

  return (
    <main>
    <div  id="game-container">
      <ol id="players" className="highlight-player">
        <Player InitialName="Player 1" symbol="X" isActive={activePlayer ==='X'}/>
        <Player InitialName="Player 2" symbol="O" isActive={activePlayer ==='O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
    </main>
  )
}

export default App

