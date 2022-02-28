import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react'; 

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

    const inactiveButtonClass = 'px-3 mx-2 transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl'; 
    const activeButtonClass = 'px-3 mx-2 transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-lightgray bg-purple rounded-2xl'

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


    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
    }

    return (
        <div className='m-auto lg:w-1/2'>
            <div className='flex visible lg:hidden'>
                <select onChange={event => getCustomWeek('dropdown')} id='weekDropdown' className='m-auto'>
                    {btnList.map(btn => {
                        if (btn.id === activeButtonId){
                            return <option value={btn.id} selected={true}>{btn.title}</option>
                        }else {
                            return <option value={btn.id}>{btn.title}</option>
                        }
                    
                        
                        
                    })}
                </select>
            </div>
            <div className="flex-row flex-wrap justify-center hidden m-auto lg:flex">
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
            <h1 className="text-3xl text-center dark:text-white">Week {week}</h1>
            {games.map(game=> {
                return (
                        <div className="flex flex-row py-2 m-auto bg-white rounded bg-opacity-10 hover:bg-purple hover:bg-opacity-100 dark:text-white">
                            <div className="w-1/5 text-center ">
                                <h2 className='ml-3'>{game.awayScore}</h2>
                            </div>
                            <div className="w-1/5 pl-3 text-center">
                                <h3>{game.awayTeam}</h3>
                            </div>
                            <div className="w-1/5 text-center">
                                <p>@</p>
                            </div>
                            <div className="w-1/5 text-center ">
                                <h3 className='mr-3'>{game.homeTeam}</h3>
                            </div>
                            <div className="w-1/5 text-center ">
                                <h2>{game.homeScore}</h2>
                            </div>
                        </div>
                    
            )})}

        </div>
        
    )
}

export default LeagueSchedule;