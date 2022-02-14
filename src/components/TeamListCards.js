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
  const defaultTeamCard = 'h-1/4 m-2 bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-10 border-2 border-solid border-gray border-opacity-20 rounded-lg hover:bg-purple transition ease-in-out delay-300ms text-white font-bold'
  const defaultTeamCardLink = 'flex flex-col justify-center items-center w-full h-full'
  const teamLabel ='flex text-center dark:text-white text-black font-base text-sm lg:font-bold'
  return (
    <div className="flex w-screen">
    <div className="flex flex-col items-center justify-around w-1/2 lg:h-screen lg:items-start lg:flex-row dark:bg-gray">
      <div id="nfc-north" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
        <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">NFC North</h2></div>
      <div className={`${defaultTeamCard}`}>
        <a href='/team/Packers' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ packers } alt="" /></div>
          <h3 className={`${teamLabel}`}>Green Bay</h3><h3 className={`${teamLabel}`}>Packers</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Vikings' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ vikings } alt="" /></div>
          <h3 className={`${teamLabel}`}>Minnesota</h3><h3 className={`${teamLabel}`}>Vikings</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Bears' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bears } alt="" /></div>
          <h3 className={`${teamLabel}`}>Chicago</h3><h3 className={`${teamLabel}`}>Bears</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Lions' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ lions } alt="" /></div>
          <h3 className={`${teamLabel}`}>Detroit</h3><h3 className={`${teamLabel}`}>Lions</h3>
        </a>
        </div>
        </div>
        <div id="nfc-south" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
          <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">NFC South</h2></div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Buccaneers' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bucs } alt="" /></div>
          <h3 className={`${teamLabel}`}>Tampa Bay</h3><h3 className={`${teamLabel}`}>Buccaneers</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Saints' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ saints } alt="" /></div>
          <h3 className={`${teamLabel}`}>New Orleans</h3><h3 className={`${teamLabel}`}>Saints</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Panthers' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ panthers } alt="" /></div>
          <h3 className={`${teamLabel}`}>Carolina</h3><h3 className={`${teamLabel}`}>Panthers</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Falcons' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ falcons } alt="" /></div>
          <h3 className={`${teamLabel}`}>Atlanta</h3><h3 className={`${teamLabel}`}>Falcons</h3>
        </a>
        </div>
        </div>
        <div id="nfc-east" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
          <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">NFC East</h2></div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Cowboys' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ cowboys } alt="" /></div>
          <h3 className={`${teamLabel}`}>Dallas</h3><h3 className={`${teamLabel}`}>Cowboys</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Giants' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ giants } alt="" /></div>
          <h3 className={`${teamLabel}`}>New York</h3><h3 className={`${teamLabel}`}>Giants</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Eagles' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ eagles } alt="" /></div>
          <h3 className={`${teamLabel}`}>Philadelphia</h3><h3 className={`${teamLabel}`}>Eagles</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Football Team' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ wft } alt="" /></div>
          <h3 className={`${teamLabel}`}>Washington</h3><h3 className={`${teamLabel}`}>Football Team</h3>
        </a>
        </div>
        </div>
        <div id="nfc-west" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
          <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">NFC West</h2></div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Rams' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ rams } alt="" /></div>
          <h3 className={`${teamLabel}`}>Los Angeles</h3><h3 className={`${teamLabel}`}>Rams</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Cardinals' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ cardinals } alt="" /></div>
          <h3 className={`${teamLabel}`}>Arizona</h3><h3 className={`${teamLabel}`}>Cardinals</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/49ers' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ sf } alt="" /></div>
          <h3 className={`${teamLabel}`}>San Francisco</h3><h3 className={`${teamLabel}`}>49ers</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Seahawks' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ seahawks } alt="" /></div>
          <h3 className={`${teamLabel}`}>Seattle</h3><h3 className={`${teamLabel}`}>Seahawks</h3>
        </a>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center justify-around w-1/2 lg:items-start lg:flex-row dark:bg-gray">
      <div id="afc-north" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
        <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">AFC North</h2></div>
      <div className={`${defaultTeamCard}`}>
        <a href='/team/Ravens' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ ravens } alt="" /></div>
          <h3 className={`${teamLabel}`}>Baltimore</h3><h3 className={`${teamLabel}`}>Ravens</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Bengals' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bengals } alt="" /></div>
          <h3 className={`${teamLabel}`}>Cincinnati</h3><h3 className={`${teamLabel}`}>Bengals</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Steelers' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ steelers } alt="" /></div>
          <h3 className={`${teamLabel}`}>Pittsburgh</h3><h3 className={`${teamLabel}`}>Steelers</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Browns' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ browns } alt="" /></div>
          <h3 className={`${teamLabel}`}>Cleveland</h3><h3 className={`${teamLabel}`}>Browns</h3>
        </a>
        </div>
        </div>
        <div id="afc-south" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
          <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">AFC South</h2></div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Titans' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ titans } alt="" /></div>
          <h3 className={`${teamLabel}`}>Tennessee</h3><h3 className={`${teamLabel}`}>Titans</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Colts' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ colts } alt="" /></div>
          <h3 className={`${teamLabel}`}>Indianapolis</h3><h3 className={`${teamLabel}`}>Colts</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Jaguars' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ jaguars } alt="" /></div>
          <h3 className={`${teamLabel}`}>Jacksonville</h3><h3 className={`${teamLabel}`}>Jaguars</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Texans' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ texans } alt="" /></div>
          <h3 className={`${teamLabel}`}>Houston</h3><h3 className={`${teamLabel}`}>Texans</h3>
        </a>
        </div>
        </div>
        <div id="afc-east" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
          <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">AFC East</h2></div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Bills' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ bills } alt="" /></div>
          <h3 className={`${teamLabel}`}>Buffalo</h3><h3 className={`${teamLabel}`}>Bills</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Patriots' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ patriots } alt="" /></div>
          <h3 className={`${teamLabel}`}>New England</h3><h3 className={`${teamLabel}`}>Patriots</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Jets' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ jets } alt="" /></div>
          <h3 className={`${teamLabel}`}>New York</h3><h3 className={`${teamLabel}`}>Jets</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Dolphins' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ dolphins } alt="" /></div>
          <h3 className={`${teamLabel}`}>Miami</h3><h3 className={`${teamLabel}`}>Dolphins</h3>
        </a>
        </div>
        </div>
        <div id="afc-west" className="flex flex-col w-3/4 md:w-2/3 h-3/4screen lg:w-1/5">
          <div><h2 className="pt-5 text-2xl dark:text-white font-semi-bold">AFC West</h2></div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Raiders' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ raiders } alt="" /></div>
          <h3 className={`${teamLabel}`}>Las Vegas</h3><h3 className={`${teamLabel}`}>Raiders</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Chargers' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ chargers } alt="" /></div>
          <h3 className={`${teamLabel}`}>Los Angeles</h3><h3 className={`${teamLabel}`}>Chargers</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Chiefs' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ chiefs } alt="" /></div>
          <h3 className={`${teamLabel}`}>Kansas City</h3><h3 className={`${teamLabel}`}>Chiefs</h3>
        </a>
        </div>
        <div className={`${defaultTeamCard}`}>
          <a href='/team/Broncos' className={`${defaultTeamCardLink}`}>
          <div className="h-logo w-logo"><img className="h-logo w-logo" src={ broncos } alt="" /></div>
          <h3 className={`${teamLabel}`}>Denver</h3><h3 className={`${teamLabel}`}>Broncos</h3>
        </a>
        </div>
      </div>
    </div>
    </div>
  );
}
