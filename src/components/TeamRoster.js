import React, {useState, useEffect} from 'react'
import PlayerSearchTable from './PlayerSearchTable';

export default function TeamRoster(props) {
    const [data, setData] = useState([]); 
    useEffect(() => { 
        setData(props.data);
        console.log(TeamRosterColumns);
    })
    return (
        <div className="w-screen">
            <PlayerSearchTable data={data} columns={"Team"} pageSize={10}/>
        </div>
    )
}
