import React, {useState, useEffect} from 'react'
import PlayerSearchTable from './PlayerSearchTable';
import { defaultColumns } from '../resources/RosterColumns';
import { Link } from 'react-router-dom';

export default function TeamSchedule(props) {
    const [data, setData] = useState([]); 
    let index = 1;
    useEffect(() => {
        console.log(props.data);
        setData(props.data);
    }, [props.data])
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
        <div className="flex flex-col items-center justify-center w-full">
            { data.map((week) => {
                if (week.weekIndex == index) {
                    index++ 
                    return ( 
                       <Link className='w-1/2 m-5 duration-300 ease-in-out md:w-1/3 bg-gray2 hover:bg-purple rounded-2xl' to={`/game/${week.scheduleId}`}>
                        <div className="flex items-center justify-around">
                                <div className="flex flex-col items-center justify-center">
                                    <img className='w-16 h-16 m-4' src={require(`../../src/img/logos/${getLogo(week.awayTeam)}`).default}></img>
                                    <h2 className='m-2 text-2xl font-black'>{week.awayScore}</h2>
                                </div>
                                    <p className='text-3xl font-black'>@</p>
                                <div className="flex flex-col items-center justify-center">
                                    <img className='w-16 h-16 m-4' src={require(`../../src/img/logos/${getLogo(week.homeTeam)}`).default}></img>
                                    <h2 className='m-2 text-2xl font-black'>{week.homeScore}</h2>
                                </div>
                            </div>
                        </Link>
                    )
                }else {
                    index+= 2; 
                    return (
                    <div className='flex flex-col items-center justify-around w-full'>
                        <div className="py-2 m-2 rounded">
                            <h3 className='px-48 py-16 text-3xl font-black rounded-2xl bg-gray2'>BYE</h3>
                        </div>
                        <Link className='w-1/2 m-5 duration-300 ease-in-out md:w-1/3 bg-gray2 hover:bg-purple rounded-2xl' to={`/game/${week.scheduleId}`}>
                        <div className="flex items-center justify-around">
                                <div className="flex flex-col items-center justify-center">
                                    <img className='w-16 h-16 m-4' src={require(`../../src/img/logos/${getLogo(week.awayTeam)}`).default}></img>
                                    <h2 className='m-2 text-2xl font-black'>{week.awayScore}</h2>
                                </div>
                                    <p className='text-3xl font-black'>@</p>
                                <div className="flex flex-col items-center justify-center">
                                    <img className='w-16 h-16 m-4' src={require(`../../src/img/logos/${getLogo(week.homeTeam)}`).default}></img>
                                    <h2 className='m-2 text-2xl font-black'>{week.homeScore}</h2>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )}
            })}
        </div>
    )
}
