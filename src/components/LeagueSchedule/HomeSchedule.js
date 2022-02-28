import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import colors  from "../../resources/teamColorCodes.json";
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


    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
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

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <img src={logo} className="w-32 h-32 m-4"></img>
            <h1 className="text-3xl text-center dark:text-white">Welcome to Isle of Madden<br/>Week {week}</h1>
            {games.map(game=> {
                return (
                        <div className="flex justify-center w-full m-2 lg:w-1/2 bg-gray dark:text-white">
                            <div className='flex items-center justify-center w-1/3 border-8 rounded-l-3xl border-purple'>
                            <div className="flex flex-col items-center justify-center w-full p-2 mt-4 mb-4 ml-4 text-center rounded-l-3xl" style={{backgroundColor: colors[game.awayTeam]}}>
                                <div className='flex items-center justify-center w-24 h-24'>
                                <img src={require(`../../img/logos/${getLogo(game.awayTeam)}`).default} className="w-32 p-3" />
                                </div>
                                <h3 className='text-lg font-semibold'>{game.awayTeam}</h3>
                                <h2 className='text-lg'>{game.awayScore}</h2>
                            </div>
                            </div>
                            <div className={`flex items-center justify-center bg-purple`}>
                                <p className='p-3 text-xl font-black'>@</p>
                            </div>
                            <div className='flex items-center justify-center w-1/3 border-8 rounded-r-3xl border-purple'>
                            <div className="flex flex-col items-center justify-center w-full p-2 mt-4 mb-4 mr-4 text-center rounded-r-3xl" style={{backgroundColor: colors[game.homeTeam]}}>
                                <div className='flex items-center justify-center w-24 h-24'>
                                <img src={require(`../../img/logos/${getLogo(game.homeTeam)}`).default} className="w-32 p-3" />
                                </div>
                                <h3 className='text-lg font-semibold'>{game.homeTeam}</h3>
                                <h2 className='text-lg'>{game.homeScore}</h2>
                            </div>
                            </div>
                        </div>
                    
            )})}
        </div>
        
    )
}

export default HomeSchedule;