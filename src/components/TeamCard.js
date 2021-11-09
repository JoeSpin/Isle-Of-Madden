import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CoachCard from "./CoachCard";

export default function TeamCard(props) {
        const [isLoading, setLoading] = useState(true);
        const [team, setTeamData] = useState();
        const { tn } = useParams();

  useEffect(() => {
    axios.get(`http://isle-of-madden-test.herokuapp.com/api/team/${tn}`).then(response => {
      setTeamData(response.data[0]);
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div className="App">Loading...</div>;
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
    <div className="App flex justify-center">
        <div id="body" className="w-1/2 flex items-center flex-col">
		<div id="teamcard" className="bg-black bg-opacity-5 rounded-xl w-full flex flex-wrap p-5 justify-center">
      <img src={require(`../../src/img/logos/${getLogo(team.teamName)}`).default} className="w-1/6 " />
      <h1 className="w-full text-center text-4xl font-black"><span>{team.cityName} {team.teamName}</span></h1>
      <CoachCard />
      <h3 className="w-1/2 text-center">{team.divisionName}</h3>
      <h3 className="w-1/2 text-center">Overall: {team.ovrRating}</h3>
      <h3 className="w-1/2 text-center">Record: ({team.totalWins} - {team.totalLosses} - {team.totalTies})</h3>
      <h3 className="w-1/2 text-center">Cap Space: {calcCap(team.capAvailable)}</h3>
		</div>
		<div id="teamlinks">
			<a href="schedule.html">Schedule</a>
			<a href="roster.html">Roster</a>
			<a href="stats.html">Stats</a>
		</div>
	</div>
      

    </div>
  );
}
