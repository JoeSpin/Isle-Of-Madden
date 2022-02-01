import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CoachCard from "./CoachCard";
import TeamRoster from "./TeamRoster";
import TeamSchedule from "./TeamSchedule";
import TeamStats from "./TeamStats";
import colors  from "../resources/teamColorCodes.json";

export default function TeamCard(props) {
  const [isLoading, setLoading] = useState(true);
  const [team, setTeamData] = useState();
  const [teamWeeklyStats, setTeamWeeklyStats] = useState();
  const [teamSchedule, setTeamSchedule] = useState([]);
  const [teamComponent, setTeamComponent] = useState("");
  const [roster, setRoster] = useState([]); 
  const { tn } = useParams();

  const showTeamRoster = () => {
    setTeamComponent(<TeamRoster data={roster}/>)
  }
  const showTeamSchedule = () => {
    console.log("in schedule");
    setTeamComponent(<TeamSchedule data={teamSchedule}/>)
  }
  const showTeamStats = () => {
    setTeamComponent(<TeamStats weeklyStats={teamWeeklyStats} teamColor={colors[team.teamName]}/>)
  }
  useEffect(() => {
    axios.get(`https://isle-of-madden-test.herokuapp.com/api/team/${tn}`).then(response => {
      setTeamData(response.data.teamInfo[0]);
      console.log(response.data);
      setTeamWeeklyStats(response.data.teamStats);
      setRoster(response.data.roster);
      setTeamSchedule(response.data.schedule);
      setLoading(false);
      setTeamComponent(<TeamSchedule data={response.data.schedule}/>)
    });
  }, [tn]);
  if (isLoading) {
    return <div className="py-16 text-5xl font-extrabold text-center App dark:bg-gray dark:text-white">Loading...</div>;
  }

  const calcCap = (capAvail) => {
  const oneMil = 1000000; 
  if (capAvail / oneMil < 1) {  
    return `$${capAvail / 1000}k`
  }
  else { 
    return `$${team.capAvailable / oneMil}M`
  }
    }

  const getLogo = (teamn) => {
    if (teamn === "Football Team"){ 
      return `wft.svg` 
    } else if (teamn === "Buccaneers"){
      return 'bucs.svg'
    } else {
      return `${teamn.toLowerCase()}.svg`
    } 
  }

 


  return (
    <div className="flex justify-center py-6 App dark:bg-gray dark:text-white">
      <div id="body" className="flex flex-col items-center">
        <div id="teamcard" style={{backgroundColor: colors[team.teamName]}}className="flex flex-wrap justify-center p-5 text-white rounded-xl">
          <img src={require(`../../src/img/logos/${getLogo(team.teamName)}`).default} className="w-1/3 sm:w-1/5" />
          <h1 className="w-full text-4xl font-black text-center">{team.cityName} {team.teamName}</h1>
          <CoachCard />
          <h3 className="w-1/2 text-center">{team.divisionName}</h3>
          <h3 className="w-1/2 text-center">Overall: {team.teamOvr}</h3>
          <h3 className="w-1/2 text-center">Record: ({team.totalWins} - {team.totalLosses} - {team.totalTies})</h3>
          <h3 className="w-1/2 text-center">Cap Space: {calcCap(team.capAvailable)}</h3>
        </div>
        <div id="teamlinks">
          <ul id="navigation" className="flex items-center justify-center pt-5 font-black">
          <li className="px-3 mx-2 text-xl transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl">
          <a onClick={showTeamSchedule}>SCHEDULE</a>
          </li>
          <li className="px-3 mx-2 text-xl transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl">
          <a onClick={showTeamRoster}>ROSTER</a>
          </li>
          <li className="px-3 mx-2 text-xl transition-colors duration-500 ease-in cursor-pointer hover:text-black hover:bg-purple bg-lightgray rounded-2xl">
          <a onClick={showTeamStats}>STATS</a>
          </li>
          </ul>
        </div>
        <div className="w-full">
          {teamComponent}
        </div>
	    </div>
    </div>
  );
}
