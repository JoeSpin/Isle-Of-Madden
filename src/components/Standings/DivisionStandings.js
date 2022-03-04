import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { standingsColumns } from "./StandingsColums";
import { useTable } from "react-table";

export default function DivisionStandings() {
    const [division, setDivision] = useState("NFC West")
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [columns, setColumns] = useState(standingsColumns);

    const getData = () => {
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/divisionstandings/${division}`).then(response => {
            setData(response.data.standings); 
            setIsLoading(false);
        })
    }

    const updateDivision = (event) => {
        setDivision(event.target.value);
    }

    useEffect(() => {
        getData();
    }, [division])

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
        return <div className="py-16 text-5xl font-extrabold text-center App bg-gray text-white">Loading...</div>;
    }

    return (
        <div>
            <h1 className='text-center'>{division} Standings</h1>
            <div>
                <select onChange={(updateDivision)}>
                    <option>NFC West</option>
                    <option>NFC East</option>
                    <option>NFC North</option>
                    <option>NFC South</option>
                    <option>AFC West</option>
                    <option>AFC East</option>
                    <option>AFC North</option>
                    <option>AFC South</option>
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