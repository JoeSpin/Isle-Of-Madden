import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

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

  return (
    <div className="App">
        <div id="body">
		<h1><span>{team.cityName} {team.teamName}</span></h1>
		<div id="teamcard">
        <h2>{team.divisionName}</h2>
      <h3>Record: ({team.totalWins} - {team.totalLosses} - {team.totalTies})</h3>
      <h3>Overall: {team.ovrRating}</h3>
      <h3>Cap Space: {calcCap(team.capAvailable)}</h3>

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
