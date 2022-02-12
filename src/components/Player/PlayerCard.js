import React, {useState, useEffect} from 'react';
import teamColorCodes from '../../resources/teamColorCodes.json'
import { convertHeight, convertTrait } from '../../resources/ColumnAccessorFunctions';
import { useParams } from 'react-router';
import axios from 'axios';
import PlayerCoreAttributes from './PlayerCoreAttributes';
import WeeklyStats from './WeeklyStats';
import PlayerFullAttributes from './PlayerFullAttributes'; 

export default function PlayerCard(props) { 
    const [player, setPlayer] = useState();
    const [loading, setLoading] = useState(true);
    const [lowerComponent, setLowerComponent] = useState(""); 
    const [seasonStats, setSeasonStats] = useState(); 
    const [weeklyStats, setWeeklyStats] = useState([]); 
    let {playerId} = useParams();
    const getData = () => { 
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/player/${playerId}`).then(response => {
            if (response.data.player.teamName === "Football Team") { 
                response.data.player.teamName = 'wft';
            }else if (response.data.player.teamName === null){
                response.data.player.teamName = 'nfl'; 
            }
            setPlayer(response.data.player); 
            setSeasonStats(response.data.seasonStats);
            setWeeklyStats(response.data.weeklyStats);
            setLoading(false);
            setLowerComponent(<WeeklyStats position={response.data.player.position} playerId={response.data.player.playerId} teamcolor={teamColorCodes[response.data.player.teamName]} weeklystats={response.data.weeklyStats} />)
         })
    }
    useEffect(() => {
        getData();
    }, [playerId]);

    const showWeeklyStats = () => {
        setLowerComponent(
            <WeeklyStats position={player.position} playerId={player.playerId} teamcolor={teamColorCodes[player.teamName]} weeklystats={weeklyStats} />
        )
    }

    const showFullAttributes = () => {
        setLowerComponent(
            <PlayerFullAttributes playerprop={player} /> 
        )
    }

    const calcContract = (contract) => {
        const oneMil = 1000000; 
        if (contract / oneMil < 1) {  
          return `$${(contract / 1000).toFixed(2)}k`
        }
        else { 
          return `$${(contract / oneMil).toFixed(2)}M`
        }
          }

    const calcYearlySalary = (salary, length) => {
            return (salary/length).toFixed(2);
        }



    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
      }
   
    return (
        <div className="flex flex-col items-center dark:bg-gray dark:text-white">
            <div style={{backgroundColor: teamColorCodes[player.teamName]}} className="flex flex-wrap w-full lg:w-1/2 p-2 text-white rounded-3xl" style={{backgroundColor: teamColorCodes[player.teamName]}}>
                <div className='flex flex-col items-center justify-center w-1/3'>
                <div className='m-2 rounded-t-full bg-gray'>
                    <img src={`https://madden-assets-cdn.pulse.ea.com/madden22/portraits/128/${player.portraitId}.png`}></img>
                </div>
                <h3 className='text-2xl font-black'>{player.firstName} {player.lastName}</h3>
                <h3>{player.position} #{player.jerseyNum}</h3>
                </div>
                <div className='flex flex-col items-start justify-center w-1/3 text-xl'>
                    <div className='flex justify-between'>
                        <h5>Team: </h5>
                        <img src={require(`../../img/logos/${player.teamName.toLowerCase()}.svg`).default} style={{height: '28px', width: '40px'}}/>
                    </div>
                    <h5>Overall: {player.playerBestOvr}</h5>
                    <h5>Height: {convertHeight(player.height)}</h5>
                    <h5>Weight: {player.weight} lbs</h5>
                    <h5>Dev Trait: {convertTrait(player.devTrait)}</h5>
                    <h5>Age: {player.age}</h5>
                </div>
                <div className='flex flex-col items-start justify-center w-1/3 text-l'> 
                    <h5>Total Years: {player.contractLength}</h5>
                    <h5>Total Salary: {player.teamId !== 1 ? calcContract(player.contractSalary): '0'}</h5>
                    <h5>Bonus: {player.teamId !== 1 ? calcContract(player.contractBonus): '0'}</h5>
                    <h5>Years Left: {player.contractYearsLeft}</h5>
                    <h5>Yearly Salary: {player.teamId !== 1 ? calcContract(calcYearlySalary(player.contractSalary, player.contractLength)): '0'}</h5>   
                </div>
                
            </div>
            <PlayerCoreAttributes player={player} position={player.position}/> 
            <div className="flex justify-center">
                <button onClick={showWeeklyStats} className='px-3 mx-2 my-2 text-2xl transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl'>Weekly Stats</button>
                <button onClick={showFullAttributes} className='px-3 mx-2 my-2 text-2xl transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl'>Attributes</button>
            </div>
 

            {lowerComponent}
       
        </div>

    )    
}