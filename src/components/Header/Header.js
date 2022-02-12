import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";


export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(''); 

  useEffect(() => {
    setActive(props.active);
  }, [props.active])



  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  const navlink = `text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple ${isOpen ? "text-5xl text-center py-2" : ""}`;
  const activeNav = `text-base transition-colors duration-500 ease-in text-purple lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-white ${isOpen ? "text-5xl text-center py-2" : ""}`;
  return (
    <div className={`flex flex-col justify-between w-screen overflow-x-hidden dark:bg-gray dark:text-white md:items-center md:pb-5 md:justify-start ${isOpen ? "h-screen absolute z-20" : ""}`}>
    <div
      id="header"
      className={`flex flex-col justify-between w-screen overflow-x-hidden dark:bg-gray dark:text-white md:items-center md:pb-5 md:justify-start ${isOpen ? "h-screen absolute z-20" : ""}`}
    >
      <div className="flex items-center justify-between w-full md:flex-col">
        <img src={logo} className="w-20 py-3 ml-8 md:py-5 md:pl-0 md:w-32" />
        <div className="float-right py-5 pr-8 md:py-0">
          <button
            className="flex flex-col items-center justify-center w-10 h-10 group md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        </div>
        <div
          className={`md:flex ${isOpen ? "w-screen py-5 content flex justify-center items-start h-full" : "hidden"}`}
        >
          <ul
            id="navigation"
            className={`flex font-black h-full justify-around md:h-auto md:items-center md:justify-center md:flex ${
              isOpen ? "flex-col" : "hidden"
            }`}
          >
            <li className={(props.active === "home") ? `${activeNav}` : `${navlink}`}>
              <a href="/">HOME</a>
            </li>
            <li className={(props.active === "teams") ?`${activeNav}` : `${navlink}`}>
              <a href="/team">TEAMS</a>
            </li>
            <li className={(props.active === "players")? `${activeNav}` : `${navlink}`}>
              <a href="/players">PLAYERS</a>
            </li>
            <li className={(props.active === 'schedule') ? `${activeNav}`: `${navlink}`}>
              <a href='/schedule'>SCHEDULE</a>
            </li>
            <li className={(props.active === 'leagueleaders')? `${activeNav}` : `${navlink}`}>
              <a href='/leagueleaders'>LEAGUE LEADERS</a>
            </li>
            <li className={(props.active === "rules")? `${activeNav}` : `${navlink}`}>
              <a href="/rules">RULES</a>
            </li>
            <li className={(props.active === "about")? `${activeNav}` : `${navlink}`}>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
      </div>
    </div>
    </div>
  );
}