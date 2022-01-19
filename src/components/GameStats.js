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
    const getLogo = (teamn) => {
        if (teamn === "Football Team"){ 
          return `wft.svg` 
        } else if (teamn === "Buccaneers"){
          return 'bucs.svg'
        } else {
          return `${teamn.toLowerCase()}.svg`
        } 
      }

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
        <div className="flex justify-center w-screen">
            <div className='flex items-center justify-center w-full bg-gray rounded-3xl'>
                <div className='flex flex-col items-center w-1/4 p-2 m-1 text-white rounded-3xl h-3/4screen'>
                    <div className='flex items-center justify-between w-full p-5 mb-5 rounded-xl h-1/6' style={{backgroundColor: colors[convertIDToName(gameData.awayTeamId)]}}>
                    <div className="flex w-1/2">
                    <img src={require(`../../src/img/logos/${getLogo(convertIDToName(gameData.awayTeamId))}`).default} className="w-1/3 ml-5" />
                        <h1 className='ml-5 text-4xl font-semibold'>{convertIDToName(gameData.awayTeamId)}</h1>
                    </div>
                        <h1 className='text-4xl font-extrabold'>{gameData.awayScore}</h1>                        
                    </div>
                    <div className='w-full h-3/5'>
                        <h1 className='text-xl font-bold text-center'>Passing</h1>
                        <hr className="w-1/6 m-auto" />
                        {awayData.passing.map(player =>(
                            <h5 className='text-center'>{displayPassingStats(player)}</h5>
                        ))}
                        {console.log(homeData)}
                        <h1 className='text-xl font-bold text-center'>Rushing</h1>
                        <hr className="w-1/6 m-auto" />
                        {awayData.rushing.map(player =>(
                            <h5 className='text-center'>{displayRushingStats(player)}</h5>
                        ))} 
                        <h1 className='text-xl font-bold text-center'>Receiving</h1>
                        <hr className="w-1/6 m-auto" /> 
                        {awayData.receiving.map(player => (
                            <h5 className='text-center'>{displayReceivingStats(player)}</h5>
                        ))}
                        <h1 className='text-xl font-bold text-center'>Defense</h1>
                        <hr className="w-1/6 m-auto" />
                        {awayData.defense.map(player => (
                            <h5 className='text-center'>{displayDefenseStats(player)}</h5>
                        ))}
                        </div>
                </div>
                <div className='flex flex-col items-center w-1/4 p-2 m-1 text-white rounded-3xl h-3/4screen'>
                    <div className='flex items-center justify-between w-full p-5 mb-5 rounded-xl h-1/6' style={{backgroundColor: colors[convertIDToName(gameData.homeTeamId)]}}>
                    <div className="flex w-1/2">
                    <img src={require(`../../src/img/logos/${getLogo(convertIDToName(gameData.homeTeamId))}`).default} className="w-1/3 ml-5" />
                        <h1 className='ml-5 text-4xl font-semibold'>{convertIDToName(gameData.homeTeamId)}</h1>
                    </div>
                        <h1 className='text-4xl font-extrabold'>{gameData.homeScore}</h1>                        
                    </div>
                    <div className='w-full h-3/5'>
                        <h1 className='text-xl font-bold text-center'>Passing</h1>
                        <hr className="w-1/6 m-auto" />
                        {homeData.passing.map(player =>(
                            <h5 className='text-center'>{displayPassingStats(player)}</h5>
                        ))}
                        {console.log(homeData)}
                        <h1 className='text-xl font-bold text-center'>Rushing</h1>
                        <hr className="w-1/6 m-auto" />
                        {homeData.rushing.map(player =>(
                            <h5 className='text-center'>{displayRushingStats(player)}</h5>
                        ))} 
                        <h1 className='text-xl font-bold text-center'>Receiving</h1>
                        <hr className="w-1/6 m-auto" /> 
                        {homeData.receiving.map(player => (
                            <h5 className='text-center'>{displayReceivingStats(player)}</h5>
                        ))}
                        <h1 className='text-xl font-bold text-center'>Defense</h1>
                        <hr className="w-1/6 m-auto" />
                        {homeData.defense.map(player => (
                            <h5 className='text-center'>{displayDefenseStats(player)}</h5>
                        ))}
                        </div>
                </div>
                </div>
            </div>
      

)}