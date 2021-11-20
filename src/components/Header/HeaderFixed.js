import React from "react";
import logo from "../../img/logo.png";
const { useState } = React;

export default function HeaderFixed() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  const navlink = `text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple ${isOpen ? "text-5xl text-center py-2" : ""}`;

  return (
    <div className={`absolute top-0 z-10 bg-opacity-50 bg-gray ${isOpen ? "h-screen absolute z-40 bg-gray bg-opacity-100" : ""}`}>
    <div className={`flex flex-col justify-between w-screen overflow-x-hidden text-white md:items-center md:pb-5 md:justify-start ${isOpen ? "h-screen" : ""}`}>
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
            <li className={`${navlink}`}>
              <a href="/">HOME</a>
            </li>
            <li className={`${navlink}`}>
              <a href="/team">TEAMS</a>
            </li>
            <li className={`${navlink}`}>
              <a href="/players">PLAYERS</a>
            </li>
            <li className={`${navlink}`}>
              <a href="/rules">RULES</a>
            </li>
            <li className={`${navlink}`}>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
      </div>
    </div>
    </div>
  );
}
/* dark:bg-gray */