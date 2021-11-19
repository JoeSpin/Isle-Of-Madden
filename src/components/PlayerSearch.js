import React, { useEffect, useState} from 'react'; 
import axios from "axios";
import { withRouter } from 'react-router';
import PlayerSearchTable from './PlayerSearchTable'
import '../resources/PlayerSearch.css';

function PlayerSearch(){
    const [tableData, setTableData] = useState([]);
    const [tableColumns, setTableColumns] = useState(""); 
    const [searchName, setSearchName] = useState(""); 
    const [positionSelect, setPositionSelect] = useState(""); 
    const [teamSelect, setTeamSelect] = useState("");
    const [attribute, setAttribute] = useState("");  
   // const [tableIndex, setTableIndex] = useState(1); 
    useEffect(() => { 
        axios.get('https://isle-of-madden-test.herokuapp.com/api/allPlayers/').then(response => { 
            setTableData(response.data);
        })
        setTableColumns('default');
    },[])
    const updateTable = (event) => {
        let haveFirstQuery = false; 
        event.preventDefault();
        console.log(`Update Table is running\n${searchName}\n${positionSelect}\n${teamSelect}`); 
        let url = `https://isle-of-madden-test.herokuapp.com/api/playerSearch`;
        if (searchName !== "" || teamSelect !== "" || positionSelect !== "") { 
            url += "?"; 
            if (searchName !== "") {
                haveFirstQuery = true;
                url += `name=${searchName}`;
            }
            if (teamSelect !== ""){ 
                if (haveFirstQuery) { 
                    url += `&team=${teamSelect}`; 
                }else { 
                    haveFirstQuery = true;
                    url += `team=${teamSelect}`;
                }
            }
            if (positionSelect !== "" ) { 
                if (haveFirstQuery) { 
                    url += `&position=${positionSelect}`;
                } else { 
                    url += `position=${positionSelect}`;
                    haveFirstQuery = true;
                }
            }
        }
        
        axios.get(url).then(response => { 
            setTableData(response.data);
            setTableColumns(positionSelect);
        })
        
        console.log(`url ${url}`);
    }

    const updateSearchName = (event) => { 
        console.log('in search name')
        setSearchName(event.target.value); 
    }
    const updatePositionSelect = (event) => {
        console.log('in poistion'); 
        setPositionSelect(event.target.value); 
    }
    const updateTeamSelect = (event) => {
        console.log('in team') 
        setTeamSelect(event.target.value);
    }
    const updateAttribute = (event) => { 
        console.log('in att')
        setAttribute(event.target.value);
    }



    return ( 
        <div className="overflow-x-hidden dark:bg-gray">
        <div className="flex justify-center py-3">
        <form className="flex flex-col md:flex-row"> 
            <label className="font-semibold dark:text-white">Name: 
                <input type="text" placeholder="Enter name" name="nameSubmit" onChange={e => updateSearchName(e)} className="mx-3 text-black border-2 rounded-md" />
            </label>
            <label className="dark:text-white">Position: 
                <select id="positionSelect" name="positionSelect" onChange={e => updatePositionSelect(e)} className="mx-3 text-black">
                    <option value="Any">Any</option>
                    <option value="QB">QB</option>
                    <option value="HB">HB</option>
                    <option value="FB">FB</option>
                    <option value="TE">TE</option>
                    <option value="WR">WR</option>
                    <option value="RT">RT</option>
                    <option value="RG">RG</option>
                    <option value="C">C</option>
                    <option value="LG">LG</option>
                    <option value="LT">LT</option>
                    <option value="RE">RE</option>
                    <option value="DT">DT</option>
                    <option value="LE">LE</option>
                    <option value="LOLB">LOLB</option>
                    <option value="MLB">MLB</option>
                    <option value="ROLB">ROLB</option>
                    <option value="CB">CB</option>
                    <option value="FS">FS</option>
                    <option value="SS">SS</option>
                    <option value="K">K</option>
                    <option value="P">P</option>
                </select>
            </label>
            <label className="dark:text-white">Team:
                <select id="teamSelect" name="teamSelect" onChange={e => updateTeamSelect(e)} className="mx-3 text-black">
                    <option value="Any">Any</option>
                    <option value="980680711">ARI</option>
                    <option value="980680750">ATL</option>
                    <option value="980680764">BAL</option>
                    <option value="980680707">BUF</option>
                    <option value="980680760">CAR</option>
                    <option value="980680705">CHI</option>
                    <option value="980680706">CIN</option>
                    <option value="980680709">CLE</option>
                    <option value="980680747">DAL</option>
                    <option value="980680708">DEN</option>
                    <option value="980680757">DET</option>
                    <option value="980680759">GB</option>
                    <option value="980680768">HOU</option>
                    <option value="980680746">IND</option>
                    <option value="980680755">JAX</option>
                    <option value="980680745">KC</option>
                    <option value="980680744">LAC</option>
                    <option value="980680763">LAR</option>
                    <option value="980680762">LV</option>
                    <option value="980680748">MIA</option>
                    <option value="980680770">MIN</option>
                    <option value="980680761">NE</option>
                    <option value="980680765">NO</option>
                    <option value="980680753">NYG</option>
                    <option value="980680756">NYJ</option>
                    <option value="980680749">PHI</option>
                    <option value="980680767">PIT</option>
                    <option value="980680766">SEA</option>
                    <option value="980680704">SF</option>
                    <option value="980680710">TB</option>
                    <option value="980680769">TEN</option>
                    <option value="980680751">WAS</option>
                </select>
            </label>
            
            <button onClick={updateTable} className="px-3 py-1 mx-3 text-white transition-colors duration-300 ease-in bg-white rounded-xl bg-opacity-10 hover:bg-purple hover:text-white">Search</button>
        </form>
        <hr />
        </div>
        <PlayerSearchTable data={tableData} columns={tableColumns}/>
        </div>
    )

}
export default withRouter(PlayerSearch);