import React, { useEffect, useState, useMemo } from 'react'; 
import { withRouter } from 'react-router';
import {useSortBy, useTable, usePagination } from 'react-table'; 
import { defaultColumns, qbColumns, hbColumns, fbColumns, teColumns, wrColumns, olColumns, dlColumns, lbColumns, dbColumns, stColumns } from '../resources/RosterColumns';
import '../resources/PlayerSearchTable.css';

function PlayerSearchTable(props){ 
    const [data, setData] = useState([]); 
    const [columns, setColumns] = useState([]); 
    const [pageSizeState, setPageSizeState] = useState();
    useEffect(()=> {
        setData(props.data); 
        if (props.columns == 'QB'){ 
            setColumns(qbColumns);
        }else if (props.columns === 'HB') {
            setColumns(hbColumns); 
        } else if (props.columns === 'FB') {
            setColumns(fbColumns); 
        }else if (props.columns === 'TE') { 
            setColumns(teColumns); 
        }else if (props.columns === 'WR') {
            setColumns(wrColumns); 
        }else if (props.columns === 'RT' || props.columns === 'RG' || props.columns === 'C' || props.columns === 'LG' || props.columns === 'LT') { 
            setColumns(olColumns);
        }else if (props.columns === 'RE' || props.columns === 'DT' || props.columns === 'LE') { 
            setColumns(dlColumns); 
        }else if (props.columns === "LOLB" || props.columns === "MLB" || props.columns === "ROLB") { 
            setColumns(lbColumns); 
        }else if (props.columns === "CB" || props.columns === "FS" || props.columns === "SS") { 
            setColumns(dbColumns); 
        }else if (props.columns === "K" || props.columns === "P") { 
            setColumns(stColumns);
        }else { 
            setColumns(defaultColumns); 
        }
    }, [props.data, props.columns])

    const onPageSelect = e => { 
        const page = Number(e.target.value) - 1; 
        gotoPage(page);
    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state
    } = useTable(
        {
            columns,
            data,
            initialState: { 
                pageIndex: 0, 
                pageSize: 30
            }

        },
        useSortBy,
        usePagination
    )
    
    return (
        <div className="flex items-center flex-col">
        <table {...getTableProps()} className=" w-3/5">
           <thead>
               {headerGroups.map((headerGroup) => (
                   <tr {...headerGroup.getHeaderGroupProps()}>
                       {
                           headerGroup.headers.map( column => (
                               <th {...column.getHeaderProps(column.getSortByToggleProps())} className="bg-gray bg-opacity-30">{column.render('Header')}</th>
                           ))
                       }
               </tr>
               ))}
           </thead>
           <tbody  {...getTableBodyProps()}>
              {page.map((row) => {
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
        <div className="flex items-center flex-col">
              <span className="h-full pt-5">Page{" "}<strong>{state.pageIndex + 1} of {pageOptions.length}</strong></span>
              <div>
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="px-3 py-1 my-5 mx-1 rounded-xl bg-gray bg-opacity-10 hover:bg-purple hover:text-white transition-colors duration-300 ease-in">{"First"}</button>
              <button onClick={previousPage} value="<" disabled={!canPreviousPage} className="px-3 py-1 my-5 mx-1 rounded-xl bg-gray bg-opacity-10 hover:bg-purple hover:text-white transition-colors duration-300 ease-in">{"Previous"}</button>
              <button onClick={nextPage} value=">" disabled={!canNextPage} className="px-3 py-1 my-5 mx-1 rounded-xl bg-gray bg-opacity-10 hover:bg-purple hover:text-white transition-colors duration-300 ease-in">{"Next"}</button>
              <button onClick={() => gotoPage(pageOptions.length-1)} value="Last" disabled={!canNextPage} className="px-3 py-1 my-5 mx-1 rounded-xl bg-gray bg-opacity-10 hover:bg-purple hover:text-white transition-colors duration-300 ease-in">{"Last"}</button>  
              </div>
        </div>
        </div>
    )
}
export default withRouter(PlayerSearchTable);