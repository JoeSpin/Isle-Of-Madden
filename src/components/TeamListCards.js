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

/*
Future Update Ideas for this page: 
  Labels for Divisions // Sort by W/L // Show Records // Mobile Friendly
*/

export default function TeamListCards() {
  return (
    <div className="flex flex-row justify-around">
      <div id="nfc-north" className="flex flex-col h-3/4screen w-1/8">
      <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ packers } alt="" /></div>
          <h3>Green Bay Packers</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Packers"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ vikings } alt="" /></div>
          <h3>Minnesota Vikings</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Vikings"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bears } alt="" /></div>
          <h3>Chicago Bears</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Bears"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ lions } alt="" /></div>
          <h3>Detroit Lions</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Lions"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        </div>
        <div id="nfc-south" className="flex flex-col h-3/4screen w-1/8">
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bucs } alt="" /></div>
          <h3>Tampa Bay Buccaneers</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Buccaneers"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ saints } alt="" /></div>
          <h3>New Orleans Saints</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Saints"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ panthers } alt="" /></div>
          <h3>Carolina Panthers</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Panthers"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ falcons } alt="" /></div>
          <h3>Atlanta Falcons</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Falcons"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        </div>
        <div id="nfc-east" className="flex flex-col h-3/4screen w-1/8">
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ cowboys } alt="" /></div>
          <h3>Dallas Cowboys</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Cowboys"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ giants } alt="" /></div>
          <h3>New York Giants</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Giants"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ eagles } alt="" /></div>
          <h3>Philadelphia Eagles</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Eagles"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ wft } alt="" /></div>
          <h3>Washington Football Team</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Football Team"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        </div>
        <div id="nfc-west" className="flex flex-col h-3/4screen w-1/8">
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ rams } alt="" /></div>
          <h3>Los Angeles Rams</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Rams"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ cardinals } alt="" /></div>
          <h3>Arizona Cardinals</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Cardinals"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ sf } alt="" /></div>
          <h3>San Francisco 49ers</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/49ers"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ seahawks } alt="" /></div>
          <h3>Seattle Seahawks</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Seahawks"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
      </div>
      <div id="afc-north" className="flex flex-col h-3/4screen w-1/8">
      <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ ravens } alt="" /></div>
          <h3>Baltimore Ravens</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Ravens"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bengals } alt="" /></div>
          <h3>Cincinnati Bengals</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Bengals"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ steelers } alt="" /></div>
          <h3>Pittsburgh Steelers</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Steelers"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ browns } alt="" /></div>
          <h3>Cleveland Browns</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Browns"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        </div>
        <div id="afc-south" className="flex flex-col h-3/4screen w-1/8">
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ titans } alt="" /></div>
          <h3>Tennessee Titans</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Titans"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ colts } alt="" /></div>
          <h3>Indianapolis Colts</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Colts"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ jaguars } alt="" /></div>
          <h3>Jacksonville Jaguars</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Jaguars"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ texans } alt="" /></div>
          <h3>Houston Texans</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Texans"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        </div>
        <div id="afc-east" className="flex flex-col h-3/4screen w-1/8">
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bills } alt="" /></div>
          <h3>Buffalo Bills</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Bills"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ patriots } alt="" /></div>
          <h3>New England Patriots</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Patriots"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ jets } alt="" /></div>
          <h3>New York Jets</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Jets"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ dolphins } alt="" /></div>
          <h3>Miami Dolphins</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Dolphins"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        </div>
        <div id="afc-west" className="flex flex-col h-3/4screen w-1/8">
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ raiders } alt="" /></div>
          <h3>Las Vegas Raiders</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Raiders"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ chargers } alt="" /></div>
          <h3>Los Angeles Chargers</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Chargers"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ chiefs } alt="" /></div>
          <h3>Kansas City Chiefs</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Chiefs"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
        <div id="team-pro-card" className="h-1/4 m-1 p-2 bg-black bg-opacity-5 border-2 border-solid border-gray border-opacity-20 flex flex-col justify-center items-center rounded-lg">
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ broncos } alt="" /></div>
          <h3>Denver Broncos</h3>
          <div className="flex justify-around w-full">
          <form method="get" action="/team/Broncos"><button id="profile-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Profile</button></form>
          <button id="schedule-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Schedule</button>
          <button id="roster-btn" className="bg-black bg-opacity-5 border-gray border-opacity-5 border-solid border-2 hover:text-white py-1 px-1 mx-1 rounded-md hover:bg-purple duration-300">Roster</button>
          </div>
        </div>
      </div>
    </div>
  );
}
