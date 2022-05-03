import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CoachCard from "./CoachCard";
import TeamRoster from "./TeamRoster";
import TeamSchedule from "./TeamSchedule";
import TeamStats from "./TeamStats";
import colors  from "../resources/teamColorCodes.json";
import Helmet from "react-helmet";

export default function TeamCard(props) {
  const [isLoading, setLoading] = useState(true);
  const [team, setTeamData] = useState();
  const [teamWeeklyStats, setTeamWeeklyStats] = useState();
  const [teamSchedule, setTeamSchedule] = useState([]);
  const [teamComponent, setTeamComponent] = useState("");
  const [roster, setRoster] = useState([]); 
  const [coach, setCoach] = useState(""); 
  const { tn } = useParams();
  const navContainer = `px-5 py-3 mx-3 my-2 text-white duration-500 transition-border ease-in-out hover:border-white cursor-pointer border-4 rounded-xl border-purple`;
  const navLink = `text-xl font-bold`;
  const navActive = `text-white text-xl font-bold border-purple border-4 rounded-xl px-5 py-3`;

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
      setTeamWeeklyStats(response.data.teamStats);
      setRoster(response.data.roster);
      setTeamSchedule(response.data.schedule);
      setLoading(false);
      setCoach(response.data.coach[0].coachName); 
      setTeamComponent(<TeamSchedule data={response.data.schedule}/>)
    });
  }, [tn]);
  if (isLoading) {
    return <div className="py-16 text-5xl font-extrabold text-center text-white App bg-gray">Loading...</div>;
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
    <div className="py-6 text-white bg-gray">
      <Helmet>
        <title>{`Isle of Madden - ${team.teamName}`}</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div style={{borderColor: colors[team.teamName]}} className="w-4/5 border-8 md:w-3/5 rounded-3xl">
        <div id="teamcard" style={{backgroundColor: colors[team.teamName]}} className="flex flex-col items-center py-5 m-2 text-white rounded-xl">
          <img src={require(`../../src/img/logos/${getLogo(team.teamName)}`).default} className="w-32 p-3" />
          <h1 className="w-full text-2xl font-black text-center">{team.cityName} {team.teamName}</h1>
          <CoachCard coach={coach}/>
          <h3 className="text-center">{team.divisionName}</h3>
          <h3 className="text-center">Overall: {team.teamOvr}</h3>
          <h3 className="text-center">Record: ({team.totalWins} - {team.totalLosses} - {team.totalTies})</h3>
          <h3 className="text-center">Cap Space: {calcCap(team.capAvailable)}</h3>
        </div>
        </div>
        <div id="teamlinks">
          <ul id="navigation" className="flex items-center justify-center pt-5 font-black">
          <li className={navContainer} onClick={showTeamSchedule}>
          <a className={navLink} onClick={showTeamSchedule}>SCHEDULE</a>
          </li>
          <li className={navContainer} onClick={showTeamRoster} >
          <a className={navLink} onClick={showTeamRoster}>ROSTER</a>
          </li>
          <li className={navContainer} onClick={showTeamStats}>
          <a className={navLink} onClick={showTeamStats}>STATS</a>
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
