import React, {useState, useEffect} from 'react'
import PlayerSearchTable from './PlayerSearchTable';
import { defaultColumns } from '../resources/RosterColumns';

export default function TeamSchedule(props) {
    const [data, setData] = useState([]); 
    let index = 1;
    useEffect(() => {

        setData(props.data);
    })
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
        <div className="w-full">
            { data.map((week) => {
                if (week.weekIndex == index) {
                    index++ 
                    return ( 
                        <div className="flex flex-row bg-white bg-opacity-10 rounded m-2 py-2">
                            <div className="w-1/5 text-center ">
                                <h2>{week.awayScore}</h2>
                            </div>
                            <div className="w-1/5 text-center">
                                <h3>{week.awayTeam}</h3>
                            </div>
                            <div className="w-1/5 text-center">
                                <p>VS</p>
                            </div>
                            <div className="w-1/5 text-center">
                                <h3>{week.homeTeam}</h3>
                            </div>
                            <div className="w-1/5 text-center">
                                <h2>{week.homeScore}</h2>
                            </div>
                        </div>
                    )
                }else {
                    index+= 2; 
                    return (
                    <>
                    <div className="bg-gray bg-opacity-10 rounded m-2 py-2">
                        <h3 className="text-center">BYE</h3>
                    </div>
                    <div className="flex flex-row bg-white bg-opacity-10 rounded m-2 py-2">
                            <div className="w-1/5 text-center ">
                                <h2>{week.awayScore}</h2>
                            </div>
                            <div className="w-1/5 text-center">
                                <h3>{week.awayTeam}</h3>
                            </div>
                            <div className="w-1/5 text-center">
                                <p>VS</p>
                            </div>
                            <div className="w-1/5 text-center">
                                <h3>{week.homeTeam}</h3>
                            </div>
                            <div className="w-1/5 text-center">
                                <h2>{week.homeScore}</h2>
                            </div>
                        </div>
                        </>
                    )}
            })}
        </div>
    )
}
