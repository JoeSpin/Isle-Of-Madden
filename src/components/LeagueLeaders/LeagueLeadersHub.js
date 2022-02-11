import React, { useState, useEffect} from "react";
import axios from "axios";
import LeagueLeaderCard from "./LeagueLeaderCard";


export default function LeagueLeaders(){
    const [passingLeaders, setPassingLeaders] = useState([]);
    const [rushingLeaders, setRushingLeaders] = useState([]); 
    const [receivingLeaders, setReceivingLeaders] = useState([]); 
    const [tackleLeaders, setTackleLeaders] = useState([]); 
    const [intLeaders, setIntLeaders] = useState([]); 
    const [ffLeaders, setFFLeaders] = useState([]); 
    const [fgLeaders, setFGLeaders] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        axios.get('https://isle-of-madden-test.herokuapp.com/api/leagueleaders').then(response => {
            setPassingLeaders(response.data.passing);
            setRushingLeaders(response.data.rushing); 
            setReceivingLeaders(response.data.receiving); 
            setTackleLeaders(response.data.tackle); 
            setIntLeaders(response.data.int);
            setFFLeaders(response.data.forcedfum);
            setFGLeaders(response.data.fieldgoal);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getData(); 
    }, [])

    if (isLoading) {
        return <div></div>
    }

    return (
        <div className='flex flex-cols flex-wrap w-3/6' style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <LeagueLeaderCard players={passingLeaders} stat={'passing'}/> 
            <LeagueLeaderCard players={rushingLeaders} stat={'rushing'}/>
            <LeagueLeaderCard players={receivingLeaders} stat={'receiving'}/>
            <LeagueLeaderCard players={tackleLeaders} stat={'tackle'}/>
            <LeagueLeaderCard players={intLeaders} stat={'int'}/>
            <LeagueLeaderCard players={ffLeaders} stat={'ff'}/>
            <LeagueLeaderCard players={fgLeaders} stat={'fg'}/>
        </div>
    )
}