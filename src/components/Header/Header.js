import React from "react";
import logo from "../../img/logo.png";
const { useState } = React;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const navlink = `text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple ${isOpen ? "text-5xl text-center" : ""}`;

  return (
    <div
      id="header"
      className="flex flex-col justify-between w-screen overflow-hidden md:items-center md:pb-5 md:justify-start"
    >
      <div className="flex items-center justify-between w-full md:flex-col">
        <img src={logo} className="w-24 py-5 pl-8 md:pl-0 md:w-32" />
        <div className="float-right py-5 pr-5 md:py-0">
          <button
            className="flex flex-col items-center justify-center w-12 h-12 border-2 border-black rounded group md:hidden"
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
          className={`md:flex ${isOpen ? "w-screen py-5 content flex justify-center items-center" : "hidden"}`}
        >
          <ul
            id="navigation"
            className={`flex flex-grow font-black md:items-center md:justify-center md:flex ${
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
              <a href="/schedule">SCHEDULE</a>
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
  );
}