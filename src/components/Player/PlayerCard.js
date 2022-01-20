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
    let {rosterId} = useParams();
    const getData = () => { 
        axios.get(`https://isle-of-madden-test.herokuapp.com/api/player/${rosterId}`).then(response => {
            setPlayer(response.data.player); 
            setSeasonStats(response.data.seasonStats);
            setWeeklyStats(response.data.weeklyStats);
            setLoading(false);
            setLowerComponent(<WeeklyStats position={response.data.player.position} rosterid={response.data.player.rosterId} teamcolor={teamColorCodes[response.data.player.teamName]} weeklystats={response.data.weeklyStats} />)
         })
    }
    useEffect(() => {
        console.log(rosterId);
        getData();
        console.log(player);

    }, [rosterId]);

    const showWeeklyStats = () => {
        setLowerComponent(
            <WeeklyStats position={player.position} rosterid={player.rosterId} teamcolor={teamColorCodes[player.teamName]} weeklystats={weeklyStats} />
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
          return `$${contract / 1000}k`
        }
        else { 
          return `$${contract / oneMil}M`
        }
          }

    const calcYearlySalary = (salary, length) => {
            return salary/length;
        }

    

    if (loading) {
        return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
      }
   
    return (
        <div className="flex flex-col items-center dark:bg-gray dark:text-white">
            <div style={{backgroundColor: teamColorCodes[player.teamName]}} className="flex flex-wrap w-1/2 p-2 text-white rounded-3xl" style={{backgroundColor: teamColorCodes[player.teamName]}}>
                <div className='flex flex-col items-center justify-center w-1/3'>
                <div className='m-2 rounded-t-full bg-gray'>
                    <img src={`https://madden-assets-cdn.pulse.ea.com/madden22/portraits/128/${player.portraitId}.png`}></img>
                </div>
                <h3 className='text-2xl font-black'>{player.firstName} {player.lastName}</h3>
                <h3>{player.position} #{player.jerseyNum}</h3>
                </div>
                <div className='flex flex-col items-start justify-center w-1/3 text-xl'>
                    <h5>Overall: {player.playerBestOvr}</h5>
                    <h5>Height: {convertHeight(player.height)}</h5>
                    <h5>Weight: {player.weight} lbs</h5>
                    <h5>Dev Trait: {convertTrait(player.devTrait)}</h5>
                </div>
                <div className='flex flex-col items-start justify-center w-1/3 text-l'> 
                    <h5>Total Years: {player.contractLength}</h5>
                    <h5>Total Salary: {calcContract(player.contractSalary)}</h5>
                    <h5>Bonus: {calcContract(player.contractBonus)}</h5>
                    <h5>Years Left: {player.contractYearsLeft}</h5>
                    <h5>Yearly Salary: {calcContract(calcYearlySalary(player.contractSalary, player.contractLength))}</h5>   
                </div>
                
            </div>
            <PlayerCoreAttributes player={player} position={player.position}/> 
            <button onClick={showWeeklyStats}>Weekly</button>
            <button onClick={showFullAttributes}>Attributes</button> 

            {lowerComponent}
       
        </div>

    )    
}