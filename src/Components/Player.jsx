import React from "react";
import { useState } from "react";
const Player = ({InitialName , symbol , isActive}) => {
    const [playerName , setPlayerName] = useState(InitialName);
    const[isEditing , setIsEditing] = useState(false);


    function handleEditClick() {
      setIsEditing((editing)=> !editing);
      console.log("works");
    }
    function handleChange(e){
    setPlayerName(e.target.value);
    }

    let editableplayerName =  <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit';
    if(isEditing){
      editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
      // btnCaption = 'Save';
    }
    return (  
        <li className={isActive? 'active' : undefined}>
          <span className="player">
           {editableplayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing?'Save': 'Edit'}</button>
        </li>
    );
}
 
export default Player;