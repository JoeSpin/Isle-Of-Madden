import React, {useState, useEffect} from 'react'
import PlayerSearchTable from './PlayerSearchTable';
import { defaultColumns } from '../resources/RosterColumns';

export default function TeamSchedule(props) {
    const [data, setData] = useState([]); 
    useEffect(() => { 
        setData(props.data);
    })

    return (
        <div>
            {data.map((week) => (
                <div>
                    {`${week.weekIndex}. ${week.homeScore} ${week.homeTeam} vs ${week.awayTeam} ${week.awayScore} `}
                </div>
            ))}
        </div>
    )
}
