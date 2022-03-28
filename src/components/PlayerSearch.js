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
        <div className="overflow-x-hidden bg-gray">
        <div className="flex justify-center py-3">
        <form className="flex flex-col md:flex-row"> 
            <label className="font-semibold py-1 text-white">Name: 
                <input type="text" placeholder="Enter name" name="nameSubmit" onChange={e => updateSearchName(e)} className="mx-3 text-black border-2 rounded-md" />
            </label>
            <label className="py-1 text-white">Position: 
                <select id="positionSelect" name="positionSelect" onChange={e => updatePositionSelect(e)} className="mx-3 text-black">
                    <option value="Any">Any</option>
                    <optgroup label="Grouped Positions"> 
                        <option value="OL">OL</option>
                        <option value="DL">DL</option>
                        <option value="LB">LB</option>
                        <option value="DB">DB</option>
                        <option value="ST">Special Teams</option>
                    </optgroup>
                    <optgroup label="Individual Positions"> 
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
                    </optgroup>
                </select>
            </label>
            <label className="py-1 text-white">Team:
                <select id="teamSelect" name="teamSelect" onChange={e => updateTeamSelect(e)} className="mx-3 text-black">
                    <option value="Any">Any</option>
                    <option value="979369991">ARI</option>
                    <option value="979370030">ATL</option>
                    <option value="979370044">BAL</option>
                    <option value="979369987">BUF</option>
                    <option value="979370040">CAR</option>
                    <option value="979369985">CHI</option>
                    <option value="979369986">CIN</option>
                    <option value="979369989">CLE</option>
                    <option value="979370027">DAL</option>
                    <option value="979369988">DEN</option>
                    <option value="979370037">DET</option>
                    <option value="979370039">GB</option>
                    <option value="979370048">HOU</option>
                    <option value="979370026">IND</option>
                    <option value="979370035">JAX</option>
                    <option value="979370025">KC</option>
                    <option value="979370024">LAC</option>
                    <option value="979370043">LAR</option>
                    <option value="979370042">LV</option>
                    <option value="979370028">MIA</option>
                    <option value="979370050">MIN</option>
                    <option value="979370041">NE</option>
                    <option value="979370045">NO</option>
                    <option value="979370033">NYG</option>
                    <option value="979370036">NYJ</option>
                    <option value="979370029">PHI</option>
                    <option value="979370047">PIT</option>
                    <option value="979370046">SEA</option>
                    <option value="979369984">SF</option>
                    <option value="979369990">TB</option>
                    <option value="979370049">TEN</option>
                    <option value="979370031">WAS</option>
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