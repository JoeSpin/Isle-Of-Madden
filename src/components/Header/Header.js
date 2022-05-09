import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";


export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(props.active);
  }, [props.active])

  return (
    <div className={`${isOpen ? "h-screen fixed z-10 bg-gray1":""}`}>
    <div className="flex items-center">
      <img src={logo} alt="Isle of Madden" className="w-20 h-20 mx-5 my-1 md:w-16 md:h-16 lg:w-20 lg:h-20" />
      <ul className="hidden list-none md:flex">
      <li><a className="block w-full px-3 font-light border-r-2 border-solid lg:text-xl hover:text-black border-gray2 text-gray3" href="/">HOME</a></li>
      <li><a className="block w-full px-3 font-light border-r-2 border-solid lg:text-xl hover:text-black border-gray2 text-gray3" href="/schedule">SCHEDULE</a></li>
      <li><a className="block w-full px-3 font-light border-r-2 border-solid lg:text-xl hover:text-black border-gray2 text-gray3" href="/players">PLAYERS</a></li>
      <li><a className="block w-full px-3 font-light border-r-2 border-solid lg:text-xl hover:text-black border-gray2 text-gray3" href="/team">TEAMS</a></li>
      <li><a className="block w-full px-3 font-light border-r-2 border-solid lg:text-xl hover:text-black border-gray2 text-gray3" href="/leagueleaders">STATS</a></li>
      <li><a className="block w-full px-3 font-light border-r-2 border-solid lg:text-xl hover:text-black border-gray2 text-gray3" href="/rules">RULES</a></li>
      <li><a className="block w-full px-3 font-light lg:text-xl hover:text-black text-gray3" href="/about">ABOUT</a></li>
      </ul>
      <button className="ml-auto mr-5" onClick={() => setIsOpen(!isOpen)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 p-1 border-2 rounded-lg md:hidden justify-self-end border-gray2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </button>
    </div>
    <ul className={`${isOpen ? "":"flex"} flex-col items-center list-none md:hidden`}>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/">HOME</a></li>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/schedule">SCHEDULE</a></li>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/players">PLAYERS</a></li>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/team">TEAMS</a></li>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/leagueleaders">STATS</a></li>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/rules">RULES</a></li>
      <li><a className={`${isOpen ? "block":"hidden"} w-screen py-3 text-2xl font-light text-center text-black hover:bg-gray2`} href="/about">ABOUT</a></li>
      </ul>
    </div>
  );
}