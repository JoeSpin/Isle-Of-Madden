import React, {useState, useEffect} from "react";
import twitch from '../../img/icons/twitch.svg'
import discord from '../../img/icons/discord.svg'
import twitter from '../../img/icons/twitter.svg'

export default function Footer(props) {
const hamburgerLine = `w-8 h-1 my-1 rounded-full bg-white transition ease transform duration-300`;
const [isOpen, setIsOpen] = useState(false);  
const [active, setActive] = useState('');
const navLink = `text-4xl text-white font-bold`;

  useEffect(() => {
    setActive(props.active);
  }, [props.active])
    return (
		<div className="flex items-center justify-center bg-gray">
		<div className={`z-50 bg-purple xl:hidden ${isOpen ? "h-screen w-screen fixed left-0 top-0 overflow-hidden flex flex-col justify-between items-center bg-purple opacity-100" : "w-16 h-16 rounded-full fixed bottom-5"}`}>
		<div className={`${isOpen ? "flex justify-around items-center text-center flex-col h-full " : "hidden"}`}>
			<div><a href="/" className={navLink}>HOME</a></div>
			<div><a href="/team"  className={navLink}>TEAMS</a></div>
			<div><a href="/schedule" className={navLink}>SCHEDULE</a></div>
			<div><a href="/players" className={navLink}>PLAYERS</a></div>
			<div><a href="/leagueleaders" className={navLink}>STATS</a></div>
			<div><a href="/rules" className={navLink}>RULES</a></div>
			<div><a href="/about" className={navLink}>ABOUT</a></div>
			<ul className="flex">
				<li className="h-10 w-10 m-2.5">
					<a href="https://twitter.com/IsleOfMadden" id="twitter"><img src={twitter}/></a>
				</li>
				<li className="h-10 w-10 m-2.5 mx-10">
					<a href="https://www.twitch.tv/IsleOfMadden" id="twitch"><img src={twitch}/></a>
				</li>
				<li className="h-10 w-10 m-2.5">
					<a href="https://discord.gg/T9SPCtzhg4" id="discord"><img src={discord}/></a>
				</li>
			</ul> 
		</div>
		<button className="flex flex-col items-center justify-center w-16 h-16 bg-opacity-50 border-4 border-black border-opacity-50 rounded-full group" onClick={() => setIsOpen(!isOpen)}>
            <div className={`${hamburgerLine} ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}/>
            <div className={`${hamburgerLine} ${isOpen ? "hidden" : ""}`}/>
            <div className={`${hamburgerLine} ${isOpen ? "-rotate-45 -translate-y-1.5 " : ""}`}/>
        </button>
		</div>
		<div className="w-full h-32 bg-gray xl:hidden"></div>
        <div id="footer" className="hidden py-6 text-white xl:block bg-gray">
		<div className="flex flex-col items-center justify-center md:flex-row">
			<p className="py-3 pr-2 text-xs md:py-0 md:text-base md:pr-10">&copy; 2022 by Isle of Madden Dev Team. All rights reserved.</p>
			<ul className="flex">
				<li className="h-10 w-10 m-2.5">
					<a href="https://twitter.com/IsleOfMadden" id="twitter"><img src={twitter}/></a>
				</li>
				<li className="h-10 w-10 m-2.5">
					<a href="https://www.twitch.tv/IsleOfMadden" id="twitch"><img src={twitch}/></a>
				</li>
				<li className="h-10 w-10 m-2.5">
					<a href="https://discord.gg/T9SPCtzhg4" id="discord"><img src={discord}/></a>
				</li>
			</ul> 
		</div>
	</div>
	</div>
    )
}