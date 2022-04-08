import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import cardinals from "../../img/logos/cardinals.svg"
import falcons from "../../img/logos/falcons.svg"
import panthers from "../../img/logos/panthers.svg"
import bears from "../../img/logos/bears.svg"
import cowboys from "../../img/logos/cowboys.svg"
import lions from "../../img/logos/lions.svg"
import packers from "../../img/logos/packers.svg"
import rams from "../../img/logos/rams.svg"
import vikings from "../../img/logos/vikings.svg"
import saints from "../../img/logos/saints.svg"
import giants from "../../img/logos/giants.svg"
import eagles from "../../img/logos/eagles.svg"
import sf from "../../img/logos/49ers.svg"
import seahawks from "../../img/logos/seahawks.svg"
import bucs from "../../img/logos/bucs.svg"
import wft from "../../img/logos/wft.svg"
import ravens from "../../img/logos/ravens.svg"
import bills from "../../img/logos/bills.svg"
import bengals from "../../img/logos/bengals.svg"
import browns from "../../img/logos/browns.svg"
import broncos from "../../img/logos/broncos.svg"
import texans from "../../img/logos/texans.svg"
import colts from "../../img/logos/colts.svg"
import jaguars from "../../img/logos/jaguars.svg"
import chiefs from "../../img/logos/chiefs.svg"
import raiders from "../../img/logos/raiders.svg"
import chargers from "../../img/logos/chargers.svg"
import dolphins from "../../img/logos/dolphins.svg"
import patriots from "../../img/logos/patriots.svg"
import jets from "../../img/logos/jets.svg"
import steelers from "../../img/logos/steelers.svg"
import titans from "../../img/logos/titans.svg"
import football from "../../img/football.jpg"


export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const dropdownnavContainer = `px-5 py-3 text-white ease-in-out hover:border-purple border-4 rounded-xl border-gray`;
  const navContainer = `px-3 py-2 mx-1 bg-lightgray bg-opacity-30 text-white duration-500 transition-border ease-in-out hover:border-purple border-4 rounded-xl border-gray`;
  const navLink = `font-bold`;
  const navActive = `text-white mx-1 bg-lightgray bg-opacity-30 font-bold border-purple border-4 rounded-xl px-3 py-2`;
  const teamLinkContainer =`m-1`;
  const teamDropdown = `w-full p-1 2xl:p-2 rounded-xl text-white duration-600 transition-all ease border-4 border-solid bg-lightgray bg-opacity-30 border-gray hover:border-purple flex items-center`;

  useEffect(() => {
    setActive(props.active);
  }, [props.active])

  return (
    <div className="hidden w-full bg-contain lg:flex " style={{ background: `url(${football})`, backgroundPosition:`center` }}>
      <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-80 ">
      <div className={`flex items-center  rounded-xl border-solid`}>
      <div className="grid grid-cols-8 grid-rows-2 gap-0">
              <a href="/team/Ravens" className={teamLinkContainer}><div className={teamDropdown}><img src={ravens} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Browns" className={teamLinkContainer}><div className={teamDropdown}><img src={browns} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Bengals" className={teamLinkContainer}><div className={teamDropdown}><img src={bengals} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Steelers" className={teamLinkContainer}><div className={teamDropdown}><img src={steelers} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Broncos" className={teamLinkContainer}><div className={teamDropdown}><img src={broncos} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Chiefs" className={teamLinkContainer}><div className={teamDropdown}><img src={chiefs} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Raiders" className={teamLinkContainer}><div className={teamDropdown}><img src={raiders} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Chargers" className={teamLinkContainer}><div className={teamDropdown}><img src={chargers} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Bills" className={teamLinkContainer}><div className={teamDropdown}><img src={bills} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Dolphins" className={teamLinkContainer}><div className={teamDropdown}><img src={dolphins} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Patriots" className={teamLinkContainer}><div className={teamDropdown}><img src={patriots} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Jets" className={teamLinkContainer}><div className={teamDropdown}><img src={jets} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Texans" className={teamLinkContainer}><div className={teamDropdown}><img src={texans} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Colts" className={teamLinkContainer}><div className={teamDropdown}><img src={colts} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Jaguars" className={teamLinkContainer}><div className={teamDropdown}><img src={jaguars} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Titans" className={teamLinkContainer}><div className={teamDropdown}><img src={titans} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              </div>
      <div className="m-5 w-36">
        <img src={logo}></img>
      </div>
      <div className="grid grid-cols-8 grid-rows-2 gap-0">
              <a href="/team/Bears" className={teamLinkContainer}><div className={teamDropdown}><img src={bears} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Lions" className={teamLinkContainer}><div className={teamDropdown}><img src={lions} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Packers" className={teamLinkContainer}><div className={teamDropdown}><img src={packers} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Vikings" className={teamLinkContainer}><div className={teamDropdown}><img src={vikings} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Cardinals" className={teamLinkContainer}><div className={teamDropdown}><img src={cardinals} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Rams" className={teamLinkContainer}><div className={teamDropdown}><img src={rams} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/49ers" className={teamLinkContainer}><div className={teamDropdown}><img src={sf} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Seahawks" className={teamLinkContainer}><div className={teamDropdown}><img src={seahawks} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Cowboys" className={teamLinkContainer}><div className={teamDropdown}><img src={cowboys} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Giants" className={teamLinkContainer}><div className={teamDropdown}><img src={giants} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Eagles" className={teamLinkContainer}><div className={teamDropdown}><img src={eagles} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Football Team" className={teamLinkContainer}><div className={teamDropdown}><img src={wft} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Falcons" className={teamLinkContainer}><div className={teamDropdown}><img src={falcons} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Panthers" className={teamLinkContainer}><div className={teamDropdown}><img src={panthers} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Saints" className={teamLinkContainer}><div className={teamDropdown}><img src={saints} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
              <a href="/team/Buccaneers" className={teamLinkContainer}><div className={teamDropdown}><img src={bucs} className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"></img></div></a>
            </div>
            </div>
      <div className="flex items-center mb-5">
        <div className={(active === "home") ? `${navActive}` : `${navContainer}`}>
          <a href="/" className={navLink}>HOME</a>
        </div>
        <div className={(active === "schedule") ? `${navActive}` : `${navContainer}`}>
          <a href="/schedule" className={navLink}>SCHEDULE</a>
        </div>
        <div className={(active === "players") ? `${navActive}` : `${navContainer}`}>
          <a href="/players" className={navLink}>PLAYERS</a>
        </div>
        <div className={(active === "leagueleaders") ? `${navActive}` : `${navContainer}`}>
          <a href="/leagueleaders" className={navLink}>STATS</a>
        </div>
        <div className={(active === "rules") ? `${navActive}` : `${navContainer}`}>
          <a href="/rules" className={navLink}>RULES</a>
        </div>
        <div className={(active === "about") ? `${navActive}` : `${navContainer}`}>
          <a href="/about" className={navLink}>ABOUT</a>
        </div>
      </div>
      </div>
    </div>
  );
}