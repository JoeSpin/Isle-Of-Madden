import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import colors from "../../resources/hslTeamColorCodes.json";
import logo from "../../img/logo.png"

function HomeSchedule(props) {
    const [loading, setLoading] = useState(true);
    const [week, setWeek] = useState(1);
    const [games, setGames] = useState([]);
    const [activeButtonId, setActiveButtonId] = useState(1);
    const getDefaultWeek = async () => {
        let response = await axios.get(`https://isle-of-madden-test.herokuapp.com/api/leagueschedule/`);
        console.log(response.data.weekIndex);
        console.log(response.data);
        setGames(response.data.games);
        setWeek(response.data.weekIndex);
        setActiveButtonId(response.data.weekIndex);
        setLoading(false);
    }

    const inactiveButtonClass = 'px-3 mx-2 transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl';
    const activeButtonClass = 'px-3 mx-2 transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-lightgray bg-purple rounded-2xl'

    useEffect(() => {
        if (loading) {
            getDefaultWeek();
        }
    }, [])


    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center text-white App bg-gray">Loading...</div>;
    }

    const getLogo = (teamn) => {
        if (teamn === "Football Team") {
            return `wft.svg`
        } else if (teamn === "Buccaneers") {
            return 'bucs.svg'
        } else {
            return `${teamn.toLowerCase()}.svg`
        }
    }

    const fixWeek = (week) => {
        if (week < 19){
            return `Week ${week}`;
        }else if(week === 19){
            return 'Playoffs - Wild Card'
        }else if(week === 20){
            return 'Playoffs - Divisional Round'
        }else if(week === 21){
            return 'Playoffs - Conference Championships'
        }else if(week === 22){
            return 'Pro Bowl Week'
        }else if(week === 23){
        return 'Super Bowl Week'
        }
    }


    // flex flex-col items-center justify-center w-full p-2 mt-4 mb-4 ml-4 text-center rounded-l-3xl
    // flex flex-col items-center justify-center w-full p-2 mt-4 mb-4 mr-4 text-center rounded-r-3xl


    // flex items-center justify-center w-scheduleBox h-scheduleBox border-8 rounded-3xl border-purple
    // flex items-center justify-center w-scheduleBox h-scheduleBox border-8 rounded-3xl border-purple
    return (
        <div>
            <h1 className="mt-5 text-3xl font-bold text-center text-white">Welcome to Isle of Madden<br />{fixWeek(week)}</h1>
            <div className='flex flex-wrap items-center justify-center w-full'>
                <img src={logo} className="w-32 h-32 m-4 lg:hidden"></img>

                {games.map(game => {
                    let homeColors = colors[game.homeTeam];
                    let awayColors = colors[game.awayTeam];
                    let homeStyle = {} 
                    let awayStyle = {};
                    let homeLogoStyle = {}; 
                    let awayLogoStyle = {}; 
                    // Make the losing team's backgroundColor darker
                    if (game.weekStatus === 2){// away won
                        homeColors[2] = homeColors[2] * .2;
                        homeLogoStyle['filter'] = 'brightness(50%)'; 
                        homeStyle['backgroundColor'] = `hsl(${homeColors[0]}, ${homeColors[1]}%, ${homeColors[2]}%)`;
                        awayStyle['backgroundColor'] = `hsl(${awayColors[0]}, ${awayColors[1]}%, ${awayColors[2]}%)`; 
                    }else if (game.weekStatus === 3){ // home won
                        awayColors[2] = Math.floor(awayColors[2] * .2); 
                        awayLogoStyle['filter'] = 'brightness(50%)'; 
                        awayStyle['backgroundColor'] = `hsl(${awayColors[0]}, ${awayColors[1]}%, ${awayColors[2]}%)`; 
                        homeStyle['backgroundColor'] = `hsl(${homeColors[0]}, ${homeColors[1]}%, ${homeColors[2]}%)`;
                    }else { // in case of an unplayed game
                        awayStyle['backgroundColor'] = `hsl(${awayColors[0]}, ${awayColors[1]}%, ${awayColors[2]}%)`; 
                        homeStyle['backgroundColor'] = `hsl(${homeColors[0]}, ${homeColors[1]}%, ${homeColors[2]}%)`;
                    }
                    console.log(awayStyle); 
                    return (
                        <div className="flex justify-center w-full m-5 text-white border-8 rounded-3xl border-purple lg:w-1/4 bg-gray">
                            <div className='flex items-center justify-center w-scheduleBox h-scheduleBox ' >
                                <div className="flex flex-col items-center justify-center text-center w-9/10 h-9/10 rounded-3xl" style={awayStyle}>
                                    <div className='flex items-center justify-center w-20 h-20'>
                                        <img src={require(`../../img/logos/${getLogo(game.awayTeam)}`).default} style={awayLogoStyle}className="p-3" />
                                    </div>
                                    <h3 className='text-lg font-semibold'>{game.awayTeam}</h3>
                                    <h2 className='text-lg' >{game.awayScore}</h2>
                                </div>
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <p className='p-3 text-xl font-black'>@</p>
                            </div>
                            <div className='flex items-center justify-center w-scheduleBox h-scheduleBox ' >
                                <div className="flex flex-col items-center justify-center text-center w-9/10 h-9/10 rounded-3xl" style={homeStyle}>
                                    <div className='flex items-center justify-center w-20 h-20'>
                                        <img src={require(`../../img/logos/${getLogo(game.homeTeam)}`).default} style={homeLogoStyle} className="p-3" />
                                    </div>
                                    <h3 className='text-lg font-semibold' >{game.homeTeam}</h3>
                                    <h2 className='text-lg'>{game.homeScore}</h2>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>

    )
}

export default HomeSchedule;