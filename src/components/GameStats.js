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
    const teamIDToName = new Map([
		[980680704, '49ers'],
		[980680705, 'Bears'],
		[980680706, 'Bengals'],
		[980680707, 'Bills'],
		[980680708, 'Broncos'],
		[980680709, 'Browns'],
		[980680710, 'Buccaneers'],
		[980680711, 'Cardinals'],
		[980680744, 'Chargers'],
		[980680745, 'Chiefs'],
		[980680746, 'Colts'],
		[980680747, 'Cowboys'],
		[980680748, 'Dolphins'],
		[980680749, 'Eagles'],
		[980680750, 'Falcons'],
		[980680751, 'Football Team'],
		[980680753, 'Giants'],
		[980680755, 'Jaguars'],
		[980680756, 'Jets'],
		[980680757, 'Lions'],
		[980680759, 'Packers'],
		[980680760, 'Panthers'],
		[980680761, 'Patriots'],
		[980680762, 'Raiders'],
		[980680763, 'Rams'],
		[980680764, 'Ravens'],
		[980680765, 'Saints'],
		[980680766, 'Seahawks'],
		[980680767, 'Steelers'],
		[980680768, 'Texans'],
		[980680769, 'Titans'],
		[980680770, 'Vikings'],
	]);
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
            <div className='flex items-center justify-center w-full dark:bg-gray rounded-3xl'>
                <div className='flex flex-col items-center w-1/3 p-2 m-2 border-8 dark:text-white rounded-3xl h-3/4screen' style={{borderColor: colors[convertIDToName(gameData.awayTeamId)]}}>
                    <div className='flex items-center justify-between w-full p-5 mb-5 rounded-xl h-1/6' style={{backgroundColor: colors[convertIDToName(gameData.awayTeamId)]}}>
                    <div className="flex items-center justify-between w-3/5">
                    <img src={require(`../../src/img/logos/${getLogo(teamIDToName.get(gameData.awayTeamId))}`).default} className="w-20 ml-5" />
                        <h2 className='ml-5 text-4xl font-semibold text-white'>{teamIDToName.get(gameData.awayTeamId)}</h2>
                    </div>
                        <h2 className='text-4xl font-extrabold'>{gameData.awayScore}</h2>                        
                    </div>
                    <div className='w-full h-3/5'>
                        <h3 className='text-xl font-bold text-center'>Passing</h3>
                        <hr className="w-1/6 m-auto" />
                        {awayData.passing.map(player =>(
                            <h5 className='text-center'>{displayPassingStats(player)}</h5>
                        ))}
                        {console.log(homeData)}
                        <h3 className='text-xl font-bold text-center'>Rushing</h3>
                        <hr className="w-1/6 m-auto" />
                        {awayData.rushing.map(player =>(
                            <h5 className='text-center'>{displayRushingStats(player)}</h5>
                        ))} 
                        <h3 className='text-xl font-bold text-center'>Receiving</h3>
                        <hr className="w-1/6 m-auto" /> 
                        {awayData.receiving.map(player => (
                            <h5 className='text-center'>{displayReceivingStats(player)}</h5>
                        ))}
                        <h3 className='text-xl font-bold text-center'>Defense</h3>
                        <hr className="w-1/6 m-auto" />
                        {awayData.defense.map(player => (
                            <h5 className='text-center'>{displayDefenseStats(player)}</h5>
                        ))}
                        </div>
                </div>
                <div className='flex flex-col items-center w-1/3 p-2 m-2 border-8 dark:text-white rounded-3xl h-3/4screen' style={{borderColor: colors[convertIDToName(gameData.homeTeamId)]}}>
                    <div className='flex items-center justify-between w-full p-5 mb-5 rounded-xl h-1/6' style={{backgroundColor: colors[convertIDToName(gameData.homeTeamId)]}}>
                    <div className="flex items-center justify-between w-3/5">
                    <img src={require(`../../src/img/logos/${getLogo(teamIDToName.get(gameData.homeTeamId))}`).default} className="w-20 ml-5 " />
                        <h2 className='ml-5 text-4xl font-semibold text-white'>{teamIDToName.get(gameData.homeTeamId)}</h2>
                    </div>
                        <h2 className='text-4xl font-extrabold'>{gameData.homeScore}</h2>                        
                    </div>
                    <div className='w-full h-3/5'>
                        <h3 className='text-xl font-bold text-center'>Passing</h3>
                        <hr className="w-1/6 m-auto" />
                        {homeData.passing.map(player =>(
                            <h5 className='text-center'>{displayPassingStats(player)}</h5>
                        ))}
                        {console.log(homeData)}
                        <h3 className='text-xl font-bold text-center'>Rushing</h3>
                        <hr className="w-1/6 m-auto" />
                        {homeData.rushing.map(player =>(
                            <h5 className='text-center'>{displayRushingStats(player)}</h5>
                        ))} 
                        <h3 className='text-xl font-bold text-center'>Receiving</h3>
                        <hr className="w-1/6 m-auto" /> 
                        {homeData.receiving.map(player => (
                            <h5 className='text-center'>{displayReceivingStats(player)}</h5>
                        ))}
                        <h3 className='text-xl font-bold text-center'>Defense</h3>
                        <hr className="w-1/6 m-auto" />
                        {homeData.defense.map(player => (
                            <h5 className='text-center'>{displayDefenseStats(player)}</h5>
                        ))}
                        </div>
                </div>
                </div>
            </div>
      

)}