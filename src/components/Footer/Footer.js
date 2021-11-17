import React from 'react'
import twitch from '../../img/icons/twitch.svg'
import discord from '../../img/icons/discord.svg'
import twitter from '../../img/icons/twitter.svg'

export default function Footer() {
    return (
        <div id="footer" className="py-6 text-white bg-gray">
		<div className="flex flex-col items-center justify-center md:flex-row">
			<p className="py-3 pr-2 text-xs md:py-0 md:text-base md:pr-10">&copy; 2021 by Isle of Madden Dev Team. All rights reserved.</p>
			<ul className="flex">
				<li className="h-10 w-10 m-2.5">
					<a href="#" id="twitter"><img src={twitter}/></a>
				</li>
				<li className="h-10 w-10 m-2.5">
					<a href="#" id="twitch"><img src={twitch}/></a>
				</li>
				<li className="h-10 w-10 m-2.5">
					<a href="#" id="discord"><img src={discord}/></a>
				</li>
			</ul> 
		</div>
	</div>
    )
}