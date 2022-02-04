import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import ConferenceStandings from "./ConferenceStandings";
import DivisionStandings from "./DivisionStandings";
import LeagueStandings from "./LeagueStandings";

export default function Standings(){
    const [standingsComponent, setStandingsComponent] = useState("");
    
    const showLeagueStandings = () =>{
        setStandingsComponent(<LeagueStandings />)
    }

    const showConferenceStandings = () => {
        console.log('test');
        setStandingsComponent(<ConferenceStandings />);
    }
    
    const showDivisionStandings = () => {
        setStandingsComponent(<DivisionStandings />);
    }

    useEffect(() => {
        showLeagueStandings();
    }, [])

    return (
        <div className='w-3/6' style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <div className='flex w-full justify-between'>
                <button onClick={showLeagueStandings}>League</button>
                <button onClick={showConferenceStandings}>Conference</button>
                <button onClick={showDivisionStandings}>Division</button>
            </div>
            <div className='flex w-full'>
                {standingsComponent}
            </div>
           
        </div>
    )
}