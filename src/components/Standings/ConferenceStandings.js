import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { standingsColumns } from "./StandingsColums";
import { useTable } from "react-table";

export default function ConferenceStandings(props) {
    const [conference, setConference] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(standingsColumns);
    const [titleColor, setTitleColor] = useState(""); 
    const getData = () => {
        console.log(`${props.conferenceprop} confprop`)
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/conferencestandings/${props.conferenceprop}`).then(response => {
            setData(response.data.standings);
            if (props.conferenceprop === 'NFC'){
                setTitleColor('Blue');
            }else if (props.conferenceprop === 'AFC'){
                setTitleColor('Red');
            }
            setIsLoading(false);
        })
    }

    const updateConference = (event) => {
        setConference(event.target.value);
    }

    useEffect(() => {
        getData();
    }, [props.conference])


    if (isLoading) {
        return <div className="py-16 text-5xl font-extrabold text-center App bg-gray text-white">Loading...</div>;
      }

    return (
        <div className='flex flex-col'>
            <div className = 'w-100' >
                <h1 className='text-center' style={{backgroundColor: titleColor}}>{props.conferenceprop}</h1>
            </div>
            {data.map(team => (
                <div className = 'w-100'>
                    <h4>{team.teamName}</h4>
                    <p>{team.totalWins}-{team.totalLosses}-{team.totalTies} ({team.confWins}-{team.confLosses}-{team.confTies})</p>
                </div>
            ))}
        </div>
    )
}