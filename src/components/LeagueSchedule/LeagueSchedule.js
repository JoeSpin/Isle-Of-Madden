import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import colors from '../../resources/teamColorCodes.json';

function LeagueSchedule(props) {
    const [loading, setLoading] = useState(true);
    const [week, setWeek] = useState(1);
    const [games, setGames] = useState([]);
    const [activeButtonId, setActiveButtonId] = useState(1); 
    const getDefaultWeek = async () => {
        let response = await axios.get(`https://isle-of-madden-test.herokuapp.com/api/leagueschedule/`); 
        console.log(response.data.weekIndex);
        setGames(response.data.games);
        setWeek(response.data.weekIndex);
        setActiveButtonId(response.data.weekIndex);
        setLoading(false);
    }

    const getCustomWeek = async (event) => {
        if (event === 'dropdown') {
            let dropdownEl = document.querySelector("#weekDropdown");
            let weekIndex = dropdownEl.options[dropdownEl.selectedIndex].value; 
            let response = await axios.get(`https://isle-of-madden-test.herokuapp.com/api/leagueschedule/${weekIndex}`)
            setActiveButtonId(response.data.weekIndex);
            setWeek(response.data.weekIndex);
            setActiveButtonId(response.data.weekIndex);
            setGames(response.data.games); 
        }else {
            let weekIndex = event.target.id; 
            let response = await axios.get(`https://isle-of-madden-test.herokuapp.com/api/leagueschedule/${weekIndex}`); 
            setActiveButtonId(response.data.weekIndex);
            setWeek(response.data.weekIndex);
            setActiveButtonId(response.data.weekIndex);
            setGames(response.data.games); 
        }
        
 
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

    const inactiveButtonClass = 'px-3 mx-2 transition-colors duration-500 ease-in cursor-pointer hover:bg-purple hover:text-white  bg-lightgray rounded-2xl'; 
    const activeButtonClass = 'px-3 mx-2 transition-colors duration-500 ease-in cursor-pointer hover:text-white hover:bg-lightgray bg-purple rounded-2xl text-white'

    useEffect(() => { 
        if (loading) {
            getDefaultWeek();
        }
    }, [activeButtonId])

    const btnList = [
        {
            id: 1, 
            title: '1',
           
        },
        {
            id: 2, 
            title: '2',
           
        },
        {
            id: 3, 
            title: '3',
           
        },
        {
            id: 4, 
            title: '4',
           
        },
        {
            id: 5, 
            title: '5',
           
        },
        {
            id: 6, 
            title: '6',
           
        },
        {
            id: 7, 
            title: '7',
           
        },
        {
            id: 8, 
            title: '8',
           
        },
        {
            id: 9, 
            title: '9',
           
        },
        {
            id: 10, 
            title: '10',
           
        },
        {
            id: 11, 
            title: '11',
           
        },
        {
            id: 12, 
            title: '12',
           
        },
        {
            id: 13, 
            title: '13',
           
        },
        {
            id: 14, 
            title: '14',
           
        },
        {
            id: 15, 
            title: '15',
           
        },
        {
            id: 16, 
            title: '16',
           
        },{
            id: 17, 
            title: '17',
           
        },{
            id: 18, 
            title: '18',
           
        },{
            id: 19, 
            title: 'WC',
           
        },{
            id: 20, 
            title: 'DIV',
           
        },{
            id: 21, 
            title: 'CONF',
           
        },{
            id: 23, 
            title: 'SB',
           
        },
    ]

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

    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center text-white App bg-gray">Loading...</div>;
    }

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
            <div className='flex visible lg:hidden'>
                <select onChange={() => getCustomWeek('dropdown')} id='weekDropdown' className='m-auto'>
                    {btnList.map(btn => {
                        if (btn.id === activeButtonId){
                            return <option value={btn.id} selected={true}>{btn.title}</option>
                        }else {
                            return <option value={btn.id}>{btn.title}</option>
                        }
                    
                        
                        
                    })}
                </select>
            </div>
            <div className="flex-row flex-wrap justify-center hidden m-5 lg:flex">
                {btnList.map(btn =>{

                    if (btn.id === activeButtonId){
                        btn.className = activeButtonClass;
                    } 
                    else {
                        btn.className = inactiveButtonClass;
                    }
                    return (

                 
                    <button 
                     id={btn.id}
                     className={btn.className}
                     onClick={(event) => getCustomWeek(event)}
                     >{btn.title}</button>
                    )
                })}
            </div>
            <h1 className="m-5 text-3xl text-center">{fixWeek(week)}</h1>
            {games.map(game=> {
                return (
                    <div className="flex items-center justify-center w-11/12 m-1 text-white border-2 md:border-4 md:p-1 md:m-2 md:rounded-2xl border-purple lg:w-2/3">
                    <div className='flex items-center justify-center w-1/2 h-full ' >
                        <div className="flex items-center justify-between w-full pr-2 text-center md:pr-10 h-9/10 md:rounded-l-2xl" style={{backgroundColor: colors[game.awayTeam]}}>
                            <div className='flex items-center justify-center w-16 h-16 md:w-20 md:h-20'>
                                <img src={require(`../../img/logos/${getLogo(game.awayTeam)}`).default} className="p-3" />
                            </div>
                            <h3 className='font-normal md:text-lg md:font-semibold'>{game.awayTeam}</h3>
                            <h2 className='text-2xl font-black md:text-3xl' >{game.awayScore}</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-1/2 h-full' >
                        <div className="flex flex-row-reverse items-center justify-between w-full pl-2 text-center md:pl-10 h-9/10 md:rounded-r-2xl" style={{backgroundColor: colors[game.homeTeam]}}>
                            <div className='flex items-center justify-center w-16 h-16 md:w-20 md:h-20'>
                                <img src={require(`../../img/logos/${getLogo(game.homeTeam)}`).default} className="p-3" />
                            </div>
                            <h3 className='font-normal md:text-lg md:font-semibold' >{game.homeTeam}</h3>
                            <h2 className='text-2xl font-black md:text-3xl'>{game.homeScore}</h2>
                        </div>
                    </div>
                </div>
                    
            )})}

        </div>
        
    )
}

export default LeagueSchedule;