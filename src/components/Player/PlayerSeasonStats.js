import React, {useState, useEffect} from 'react';

function PlayerSeasonStats(props) {
    const [position, setPosition] = useState(""); 
    const [stats, setStats] = useState({}); 

    useEffect(() => { 
        setPosition(props.position);
        setStats(props.stats);
    }, [props.position, props.stats]);


    return ( 
        <div>
            <div>
               
            </div>


        </div>
    )
}