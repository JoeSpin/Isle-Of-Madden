import React, { useEffect, useState } from "react";
import { passingCols, rushingCols,  receivingCols, tackleCols, intCols, ffCols, fgCols } from "./LeagueLeaderColumns";

export default function LeagueLeaderCard(props){ 
    const [players, setPlayers] = useState([]); 
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setPlayers(props.players);
        if (props.stat == "passing"){
            setColumns(passingCols);
        }else if (props.stat == "rushing"){
            setColumns(rushingCols);
        }else if (props.stat == "receiving"){
            setColumns(receivingCols);
        }else if (props.stat == "tackle"){
            setColumns(tackleCols);
        }else if(props.stat == "int"){
            setColumns(intCols);
        }else if (props.stat == "ff"){
            setColumns(ffCols);
        }else if (props.stat == "fg"){
            setColumns(fgCols);
        }
        setIsLoading(false);
    }, [props.players])

    if (isLoading){
        return (
            <></>
        )
    }

    return (
        <div className='flex border-solid border-2 border-purple text-white w-1/2'>
            <div className='flex w-full flex-nowrap'>
                <div className="w-1/4">
                    <h1>Name</h1>
                </div>
                <div className="w-1/4">
                    <h1>{columns[0].Header}</h1>
                </div>
                <div className="w-1/4">
                    <h1>{columns[1].Header}</h1>
                </div>
                <div className="w-1/4">
                    <h1>{columns[2].Header}</h1>
                </div>
            </div>
            <div>
                <div>
                    test
                </div>
            </div>
        </div>
    )
}