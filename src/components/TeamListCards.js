import React from "react";
import cardinals from "../img/logos/cardinals.svg"
import falcons from "../img/logos/falcons.svg"
import panthers from "../img/logos/panthers.svg"
import bears from "../img/logos/bears.svg"
import cowboys from "../img/logos/cowboys.svg"
import lions from "../img/logos/lions.svg"
import packers from "../img/logos/packers.svg"
import rams from "../img/logos/rams.svg"
import vikings from "../img/logos/vikings.svg"
import saints from "../img/logos/saints.svg"
import giants from "../img/logos/giants.svg"
import eagles from "../img/logos/eagles.svg"
import sf from "../img/logos/49ers.svg"
import seahawks from "../img/logos/seahawks.svg"
import bucs from "../img/logos/bucs.svg"
import wft from "../img/logos/wft.svg"
import ravens from "../img/logos/ravens.svg"
import bills from "../img/logos/bills.svg"
import bengals from "../img/logos/bengals.svg"
import browns from "../img/logos/browns.svg"
import broncos from "../img/logos/broncos.svg"
import texans from "../img/logos/texans.svg"
import colts from "../img/logos/colts.svg"
import jaguars from "../img/logos/jaguars.svg"
import chiefs from "../img/logos/chiefs.svg"
import raiders from "../img/logos/raiders.svg"
import chargers from "../img/logos/chargers.svg"
import dolphins from "../img/logos/dolphins.svg"
import patriots from "../img/logos/patriots.svg"
import jets from "../img/logos/jets.svg"
import steelers from "../img/logos/steelers.svg"
import titans from "../img/logos/titans.svg"

export default function TeamListCards() {
  return (
    <div className="flex flex-column justify-center content-center">
      <div id="nfc-teams">
        <div id="team-pro-card">
          <img src={ cardinals } alt="" />
          <h3>Arizona Cardinals</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ falcons } alt="" />
          <h3>Atlanta Falcons</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ panthers } alt="" />
          <h3>Carolina Panthers</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ bears } alt="" />
          <h3>Chicago Bears</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ cowboys } alt="" />
          <h3>Dallas Cowboys</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ lions } alt="" />
          <h3>Detroit Lions</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ packers } alt="" />
          <h3>Green Bay Packers</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ rams } alt="" />
          <h3>Los Angeles Rams</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ vikings } alt="" />
          <h3>Minnesota Vikings</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ saints } alt="" />
          <h3>New Orleans Saints</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ giants } alt="" />
          <h3>New York Giants</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ eagles } alt="" />
          <h3>Philadelphia Eagles</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ sf } alt="" />
          <h3>San Francisco 49ers</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ seahawks } alt="" />
          <h3>Seattle Seahawks</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ bucs } alt="" />
          <h3>Tampa Bay Buccaneers</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ wft } alt="" />
          <h3>Washington Football Team</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
      </div>
      <div id="afc-teams">
        <div id="team-pro-card">
          <img src={ ravens } alt="" />
          <h3>Baltimore Ravens</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ bills } alt="" />
          <h3>Buffalo Bills</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ bengals } alt="" />
          <h3>Cincinnati Bengals</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ browns } alt="" />
          <h3>Cleveland Browns</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ broncos } alt="" />
          <h3>Denver Broncos</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ texans } alt="" />
          <h3>Houston Texans</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ colts } alt="" />
          <h3>Indianapolis Colts</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ jaguars } alt="" />
          <h3>Jacksonville Jaguars</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ chiefs } alt="" />
          <h3>Kansas City Chiefs</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ raiders } alt="" />
          <h3>Las Vegas Raiders</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ chargers } alt="" />
          <h3>Los Angeles Chargers</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ dolphins } alt="" />
          <h3>Miami Dolphins</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ patriots } alt="" />
          <h3>New England Patriots</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ jets } alt="" />
          <h3>New York Jets</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ steelers } alt="" />
          <h3>Pittsburgh Steelers</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
        <div id="team-pro-card">
          <img src={ titans } alt="" />
          <h3>Tennessee Titans</h3>
          <button id="profile-btn">Profile</button>
          <button id="schedule-btn">Schedule</button>
          <button id="roster-btn">Roster</button>
        </div>
      </div>
    </div>
  );
}
