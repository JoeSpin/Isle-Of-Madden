import React, { useEffect, useState } from 'react';
import {qbGameColumns, hbGameColumns, wrGameColumns, teGameColumns, dfGameColumns, pGameColumns, kGameColumns } from '../../resources/GameStatsColumns';
import {useTable} from 'react-table'

export function PlayerPerGameStats(props) { 
    const [data, setData] = useState([]); 
    const [position, setPosition] = useState(""); 
    const [columns, setColumns] = useState([]);
    useEffect(() => { 

        setData(props.games); 
        setPosition(props.position); 
        if (position === "QB") { 
            setColumns(qbGameColumns);
        }else if (position === "HB" || position === "FB") { 
            setColumns(hbGameColumns);
        }else if (position === "TE") { 
            setColumns(teGameColumns);
        }else if (position === "WR"){ 
            setColumns(wrGameColumns);
        }else if (position === "LT" || position === "LG" || position === "C" || position == "RG" || position === "RT"){ 
        }else if (position === "P") { 
            setColumns(pGameColumns);
        }else if (position === "K"){ 
            setColumns(kGameColumns);
        }else { 
            setColumns(dfGameColumns);
        };
    }, [props.games]);

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

    
    return ( 
        <div className='flex justify-center'> 
            <table {...getTableProps()} style={{
                backgroundColor: props.teamcolor,
                border: '1px solid black',
                width: '50%'
            }}> 
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()} className='p-2'>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => { 
                        prepareRow(row);
                        return ( 
                            <tr {...row.getRowProps()} style={{border: '1px solid black'}}>
                                {row.cells.map((cell) => { 
                                    return <td {...cell.getCellProps()} style={{textAlign: 'center'}}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}