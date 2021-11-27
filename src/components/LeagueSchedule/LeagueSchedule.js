import axios from 'axios';
import React, {useState, useEffect} from 'react'; 

function LeagueSchedule(props) {
    const [games, setGames] = useState([]);

    useEffect(() => { 
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/leagueschedule/${props.seasonIndex}/${props.weekIndex}`).then(response => { 
            setGames(response.data);
        })
    }, [props.weekIndex, props.seasonIndex])


    return (
        <div>
            {games.map(game=> { 
                <div> 
                    <p>{game.homeScore}</p>
                    <p>{game.homeTeam}</p>
                    <p>VS</p>
                    <p>{game.awayTeam}</p>
                    <p>{game.homeScore}</p>
                </div>
            })}
        </div>
    )
}

export default LeagueSchedule;