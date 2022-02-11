import React, { useEffect, useState } from "react";
import { passingCols, rushingCols,  receivingCols, tackleCols, intCols, ffCols, fgCols } from "./LeagueLeaderColumns";
import { useTable } from "react-table";

export default function LeagueLeaderCard(props){ 
    const [data, setData] = useState([]); 
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("");

    useEffect(() => {
        setData(props.players);
        if (props.stat == "passing"){
            setTitle('Passing Leaders');
            setColumns(passingCols);
        }else if (props.stat == "rushing"){
            setTitle('Rushing Leaders');
            setColumns(rushingCols);
        }else if (props.stat == "receiving"){
            setTitle('Receiving Leaders');
            setColumns(receivingCols);
        }else if (props.stat == "tackle"){
            setTitle("Tackle Leaders")
            setColumns(tackleCols);
        }else if(props.stat == "int"){
            setTitle("Interception Leaders");
            setColumns(intCols);
        }else if (props.stat == "ff"){
            setTitle("Forced Fumble Leaders");
            setColumns(ffCols);
        }else if (props.stat == "fg"){
            setTitle("Kicking Leaders");
            setColumns(fgCols);
        }
        setIsLoading(false);
    }, [props.players])

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable (
        {
            columns,
            data
        }
    )
    

    if (isLoading){
        return (
            <></>
        )
    }

    
    return (
        <div className='flex flex-col w-1/2 dark:text-white '>

            <h1 className='text-center'>{title}</h1>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
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