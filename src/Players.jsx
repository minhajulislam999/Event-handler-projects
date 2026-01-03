import {useEffect, useState } from "react";

export default function Players(){

    const [Players, setPlayers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);
    return(

        <div className="card">
            <h2>Players: {Players.length}</h2>
            
                <ul>
                    {
                        Players.map(player => <li>{player.name}</li>
                
                )
                    }
                </ul>
        </div>
    )
}