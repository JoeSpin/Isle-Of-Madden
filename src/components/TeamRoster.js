import React, {useState, useEffect} from 'react'
import PlayerSearchTable from './PlayerSearchTable';

export default function TeamRoster(props) {
    const [data, setData] = useState([]); 
    useEffect(() => { 
        setData(props.data);
    }, [props.data])
    return (
        <div className="w-full">
            <PlayerSearchTable data={data} columns={"Team"} pageSize={10}/>
        </div>
    )
}
