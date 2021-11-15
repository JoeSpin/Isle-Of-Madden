import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CoachCard from "./CoachCard";
import TeamRoster from "./TeamRoster";
import TeamSchedule from "./TeamSchedule";
import TeamStats from "./TeamStats";

export default function TeamCard(props) {
        const [isLoading, setLoading] = useState(true);
        const [team, setTeamData] = useState();
        const [teamComponent, setTeamComponent] = useState("");
        const { tn } = useParams();

  useEffect(() => {
    axios.get(`http://isle-of-madden-test.herokuapp.com/api/team/${tn}`).then(response => {
      setTeamData(response.data.teamInfo[0]);
      setTeamComponent(<TeamSchedule />)
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div className="text-3xl font-extrabold text-center App">Loading...</div>;
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

  const showTeamRoster = () => {
    setTeamComponent(<TeamRoster />)
  }
  const showTeamSchedule = () => {
    setTeamComponent(<TeamSchedule />)
  }
  const showTeamStats = () => {
    setTeamComponent(<TeamStats />)
  }


  return (
    <div className="flex justify-center py-6 App">
        <div id="body" className="flex flex-col items-center">
		<div id="teamcard" className="flex flex-wrap justify-center w-full p-5 bg-black bg-opacity-5 rounded-xl">
      <img src={require(`../../src/img/logos/${getLogo(team.teamName)}`).default} className="w-1/6 " />
      <h1 className="w-full text-4xl font-black text-center"><span>{team.cityName} {team.teamName}</span></h1>
      <CoachCard />
      <h3 className="w-1/2 text-center">{team.divisionName}</h3>
      <h3 className="w-1/2 text-center">Overall: {team.ovrRating}</h3>
      <h3 className="w-1/2 text-center">Record: ({team.totalWins} - {team.totalLosses} - {team.totalTies})</h3>
      <h3 className="w-1/2 text-center">Cap Space: {calcCap(team.capAvailable)}</h3>
		</div>
		<div id="teamlinks">
      <ul id="navigation" className="flex items-center justify-center pt-5 font-black">
      <li className="px-3 mx-2 text-base transition-colors duration-500 ease-in hover:text-purple">
			<a onClick={showTeamSchedule}>SCHEDULE</a>
      </li>
      <li className="px-3 mx-2 text-base transition-colors duration-500 ease-in hover:text-purple">
			<a onClick={showTeamRoster}>ROSTER</a>
      </li>
      <li className="px-3 mx-2 text-base transition-colors duration-500 ease-in hover:text-purple">
			<a onClick={showTeamStats}>STATS</a>
      </li>
      </ul>
		</div>
    <div>
      {teamComponent}
    </div>
	</div>
      

    </div>
  );
}
