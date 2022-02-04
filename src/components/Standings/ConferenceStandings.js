import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { standingsColumns } from "./StandingsColums";
import { useTable } from "react-table";

export default function ConferenceStandings() {
    const [conference, setConference] = useState("NFC");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(standingsColumns);
    const getData = () => {
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/conferencestandings/${conference}`).then(response => {
            setData(response.data.standings);
            setIsLoading(false);
        })
    }

    const updateConference = (event) => {
        setConference(event.target.value);
    }

    useEffect(() => {
        getData();
    }, [conference])


    
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable (
        {
            columns,
            data,
        }
    )
    
    if (isLoading) {
        return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
      }

    return (
        <div>
            <h1 className='text-center'>{conference} Standings</h1>
            <div>
                <select onChange={(updateConference)}>
                    <option>NFC</option>
                    <option>AFC</option>
                </select>
            </div>
            <table {...getTableProps()}> 
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => { 
                        prepareRow(row);
                        return ( 
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => { 
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}