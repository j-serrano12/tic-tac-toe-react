import {useState} from "react";

export default function Player({name, symbol}){
    const [playerName, setPlayerName] = useState(name);
    const [isEdited, setIsEdited] = useState(false)

    const handleChange = (event) => setPlayerName(event.target.value);
    const handleClick = () => setIsEdited(editing => !editing);

    return (
        <li>
            {isEdited ?
            <input type="text" required value={playerName} onChange={handleChange}/>
            :
            <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{isEdited ? 'Save' : 'Edit'}</button>
        </li>
    )
}