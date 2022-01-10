import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { useParams } from "react-router";
import colors  from "../resources/teamColorCodes.json";
import { convertIDToName } from "../resources/convertIDToName";

export default function GameStats() {
    const [homeData, setHomeData] = useState(); 
    const [awayData, setAwayData] = useState();
    const [gameData, setGameData] = useState();  
    const [isLoading, setIsLoading] = useState(true);
    const [winner, setWinner] = useState(0); 
    const { gameId }  = useParams();

    useEffect(() => {
        generateData()
        console.log(homeData); 
        console.log(awayData);
        console.log(gameData);
    }, [])

    const generateData = () => {
        let home = {
            defense: [],
            passing: [],
            rushing: [],
            receiving: []
        }; 
        let away = {
            defense: [],
            passing: [],
            rushing: [],
            receiving: []
        }; 
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/gamestats/${gameId}`).then(response => {
            setGameData(response.data.game[0]);
            console.log(response.data);
            if (response.data.game[0].homeScore > response.data.game[0].awayScore){
                setWinner(response.data.game[0].homeTeamId);
            }else {
                setWinner(response.data.game[0].awayTeamId);
            }
            for (const player of response.data.defenseNotables){
                if (player.teamId === response.data.game[0].homeTeamId){
                    home.defense.push(player);
                }else {
                    away.defense.push(player);
                }
            }
            for (const player of response.data.passing){
                if (player.teamId === response.data.game[0].homeTeamId){
                    home.passing.push(player);
                }else {
                    away.passing.push(player);
                }
            }
            for (const player of response.data.rushing){
                if (player.teamId === response.data.game[0].homeTeamId){
                    home.rushing.push(player); 
                }else { 
                    away.rushing.push(player);
                }
            }
            for (const player of response.data.receiving){
                if (player.teamId === response.data.game[0].homeTeamId){
                    home.receiving.push(player);
                }else {
                    away.receiving.push(player);
                }
            }
            setHomeData(home); 
            setAwayData(away);
            setIsLoading(false);
        })
    }

    const displayPassingStats = (player) =>{
        let output = `${player.fullName} ${player.passComp}/${player.passAtt}, ${player.passYds} Yds`; 
        if (player.passTDs === 1){ 
            output += `, ${player.passTDs} TD`; 
        }else if (player.passTDs > 1){
            output += `, ${player.passTDs} TDs`; 
        }
        if (player.passInts == 1){
            output += `, ${player.passInts} INT`; 
        }else if (player.passInts > 1){
            output += `, ${player.passInts} INTs`; 
        }
        return output;
    }

    const displayRushingStats = (player) => {
            let output = `${player.fullName} ${player.rushAtt} Att, ${player.rushYds} Yds`; 
            if (player.rushTDs == 1){
                output += `, ${player.rushTDs} TD`;
            }else if (player.rushTDs > 1){
                output += `, ${player.rushTDs} TDs`; 
            }
            if (player.rushFum == 1){
                output += `, ${player.rushFum} fumble`;
            }else if (player.rushFum > 1){
                output += `, ${player.rushFum} fumbles`; 
            }
            return output;
    }

    const displayReceivingStats = (player) => {
        let output = `${player.fullName} ${player.recCatches} Catch`; 
        if (player.recCatches > 1){
            output += "es";
        }
        output += `, ${player.recYds} Yds`; 
        if (player.recTDs == 1){
            output += `, ${player.recTDs} TD`; 
        } else if (player.recTDs > 1){
            output += `, ${player.recTDs} TDs`; 
        }

        if (player.rushFum == 1){
            output += `, ${player.rushFum} fumble`;
        }else if (player.rushFum > 1){
            output += `, ${player.rushFum} fumbles`;
        }

        return output;

    }

    const displayDefenseStats = (player) => {
        let output = `${player.fullName} ${player.defTotalTackles} Tackle`; 
        if (player.defTotalTackles > 1){
            output += "s";
        }
        if (player.defInts == 1){
            output += `, ${player.defInts} INT`
        }else if (player.defInts > 1){
            output += `, ${player.defInts} INTs`;
        }
        
        if (player.defForcedFum > 0){
            output += `, ${player.defForcedFum} FF`; 
        }

        return output;
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return ( 
        <div className="flex justify-center">
            <div className='flex w-3/6'>
                <div className='w-3/6' style={{backgroundColor: colors[convertIDToName(gameData.homeTeamId)]}}>
                    <div className='flex w-full justify-between'>
                        <h1 className='text-4xl'>{convertIDToName(gameData.homeTeamId)}</h1>
                        <h1 className='text-4xl pr-4'>{gameData.homeScore}</h1>                        
                    </div>
                    <div className='w-full'>
                        <h1 className='text-center'>Passing</h1>
                        <hr />
                        {homeData.passing.map(player =>(
                            <h5>{displayPassingStats(player)}</h5>
                        ))}
                        {console.log(homeData)}
                        <h1 className='text-center'>Rushing</h1>
                        <hr />
                        {homeData.rushing.map(player =>(
                            <h5>{displayRushingStats(player)}</h5>
                        ))} 
                        <h1 className='text-center'>Receiving</h1>
                        <hr /> 
                        {homeData.receiving.map(player => (
                            <h5>{displayReceivingStats(player)}</h5>
                        ))}
                        <h1 className='text-center'>Defense</h1>
                        <hr />
                        {homeData.defense.map(player => (
                            <h5>{displayDefenseStats(player)}</h5>
                        ))}
                    </div>
                </div>
                <div className='w-3/6' style={{backgroundColor: colors[convertIDToName(gameData.awayTeamId)]}}>
                    <div className='flex w-full justify-between'>
                        <h1 className='text-4xl pl-4'>{gameData.awayScore}</h1>
                        <h1 className='text-4xl'>{convertIDToName(gameData.awayTeamId)}</h1>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-center'>Passing</h1>
                        <hr />
                        {awayData.passing.map(player =>(
                            <h5 className='text-right'>{displayPassingStats(player)}</h5>
                        )
                        )}
                        <h1 className='text-center'>Rushing</h1>
                        <hr /> 
                        {awayData.rushing.map(player => (
                            <h5 className='text-right'>{displayRushingStats(player)}</h5>
                        ))}
                        <h1 className='text-center'>Receiving</h1>
                        <hr />
                        {awayData.receiving.map(player =>(
                            <h5 className='text-right'>{displayReceivingStats(player)}</h5>
                        ))}
                        <h1 className='text-center'>Defense</h1>
                        <hr /> 
                        {awayData.defense.map(player => (
                            <h5 className='text-right'>{displayDefenseStats(player)}</h5>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      

)}