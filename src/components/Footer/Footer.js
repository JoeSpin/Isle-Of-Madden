import React, {useState, useEffect} from "react";
import twitch from '../../img/icons/twitch.svg'
import discord from '../../img/icons/discord.svg'
import twitter from '../../img/icons/twitter.svg'

export default function Footer(props) {
const [isOpen, setIsOpen] = useState(false);  
const [active, setActive] = useState('');
const navLink = `text-4xl text-white font-bold`;

  useEffect(() => {
    setActive(props.active);
  }, [props.active])
    return (
		<div className="flex items-center justify-center w-full">
        <div id="footer" className="py-6">
		<div className="flex flex-col items-center justify-center">
		<ul className="flex px-5 mb-2 bg-purple rounded-2xl">
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
			<p className="m-5 text-xs text-center md:py-0 md:text-sm">&copy; 2022 by Isle of Madden Dev Team.<br></br> This site is not recognized, sponsored, endorsed or affiliated with the National Football League (NFL), National Football League Players' Association (NFLPA) or EA Sports. All NFL team logos are registered trademarks of the NFL and their respective clubs.</p>
		</div>
	</div>
	</div>
    )
}