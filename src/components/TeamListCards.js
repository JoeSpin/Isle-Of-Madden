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
  const flexCenter=`flex flex-col items-center justify-center`;
  const teamLinkContainer =`m-2 text-sm font-medium`;
  const gridTemplate = `grid grid-cols-2 grid-rows-2 p-2`;
  const teamDropdown = `w-full p-1 rounded-xl text-white transition-all ease-in-out border-4 border-solid border-purple hover:bg-purple hover:border-gray flex items-center`;

  return (
    <div className="">
    <div className={`flex justify-center items-center p-3 bg-gray`}>
            <div className="flex flex-col items-center justify-center w-full pb-3">
              <div className={flexCenter}>
              <div><h4 className="font-bold text-white">AFC North</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Ravens" className={teamLinkContainer}><div className={teamDropdown}><img src={ravens} className="w-12 h-12"></img></div></a>
              <a href="/team/Browns" className={teamLinkContainer}><div className={teamDropdown}><img src={browns} className="w-12 h-12"></img></div></a>
              <a href="/team/Bengals" className={teamLinkContainer}><div className={teamDropdown}><img src={bengals} className="w-12 h-12"></img></div></a>
              <a href="/team/Steelers" className={teamLinkContainer}><div className={teamDropdown}><img src={steelers} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">AFC West</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Broncos" className={teamLinkContainer}><div className={teamDropdown}><img src={broncos} className="w-12 h-12"></img></div></a>
              <a href="/team/Chiefs" className={teamLinkContainer}><div className={teamDropdown}><img src={chiefs} className="w-12 h-12"></img></div></a>
              <a href="/team/Raiders" className={teamLinkContainer}><div className={teamDropdown}><img src={raiders} className="w-12 h-12"></img></div></a>
              <a href="/team/Chargers" className={teamLinkContainer}><div className={teamDropdown}><img src={chargers} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">AFC East</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Bills" className={teamLinkContainer}><div className={teamDropdown}><img src={bills} className="w-12 h-12"></img></div></a>
              <a href="/team/Dolphins" className={teamLinkContainer}><div className={teamDropdown}><img src={dolphins} className="w-12 h-12"></img></div></a>
              <a href="/team/Patriots" className={teamLinkContainer}><div className={teamDropdown}><img src={patriots} className="w-12 h-12"></img></div></a>
              <a href="/team/Jets" className={teamLinkContainer}><div className={teamDropdown}><img src={jets} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">AFC South</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Texans" className={teamLinkContainer}><div className={teamDropdown}><img src={texans} className="w-12 h-12"></img></div></a>
              <a href="/team/Colts" className={teamLinkContainer}><div className={teamDropdown}><img src={colts} className="w-12 h-12"></img></div></a>
              <a href="/team/Jaguars" className={teamLinkContainer}><div className={teamDropdown}><img src={jaguars} className="w-12 h-12"></img></div></a>
              <a href="/team/Titans" className={teamLinkContainer}><div className={teamDropdown}><img src={titans} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">NFC North</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Bears" className={teamLinkContainer}><div className={teamDropdown}><img src={bears} className="w-12 h-12"></img></div></a>
              <a href="/team/Lions" className={teamLinkContainer}><div className={teamDropdown}><img src={lions} className="w-12 h-12"></img></div></a>
              <a href="/team/Packers" className={teamLinkContainer}><div className={teamDropdown}><img src={packers} className="w-12 h-12"></img></div></a>
              <a href="/team/Vikings" className={teamLinkContainer}><div className={teamDropdown}><img src={vikings} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">NFC West</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Cardinals" className={teamLinkContainer}><div className={teamDropdown}><img src={cardinals} className="w-12 h-12"></img></div></a>
              <a href="/team/Rams" className={teamLinkContainer}><div className={teamDropdown}><img src={rams} className="w-12 h-12"></img></div></a>
              <a href="/team/49ers" className={teamLinkContainer}><div className={teamDropdown}><img src={sf} className="w-12 h-12"></img></div></a>
              <a href="/team/Seahawks" className={teamLinkContainer}><div className={teamDropdown}><img src={seahawks} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">NFC East</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Cowboys" className={teamLinkContainer}><div className={teamDropdown}><img src={cowboys} className="w-12 h-12"></img></div></a>
              <a href="/team/Giants" className={teamLinkContainer}><div className={teamDropdown}><img src={giants} className="w-12 h-12"></img></div></a>
              <a href="/team/Eagles" className={teamLinkContainer}><div className={teamDropdown}><img src={eagles} className="w-12 h-12"></img></div></a>
              <a href="/team/Football Team" className={teamLinkContainer}><div className={teamDropdown}><img src={wft} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            <div className={flexCenter}>
              <div><h4 className="font-bold text-white">NFC South</h4></div>
              <div className={gridTemplate}>
              <a href="/team/Falcons" className={teamLinkContainer}><div className={teamDropdown}><img src={falcons} className="w-12 h-12"></img></div></a>
              <a href="/team/Panthers" className={teamLinkContainer}><div className={teamDropdown}><img src={panthers} className="w-12 h-12"></img></div></a>
              <a href="/team/Saints" className={teamLinkContainer}><div className={teamDropdown}><img src={saints} className="w-12 h-12"></img></div></a>
              <a href="/team/Buccaneers" className={teamLinkContainer}><div className={teamDropdown}><img src={bucs} className="w-12 h-12"></img></div></a>
              </div>
            </div>
            </div>
          </div>
        </div>
  );
}
