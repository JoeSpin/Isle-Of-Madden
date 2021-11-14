import React from 'react'

export default function Navbar() {
    return (
        <div className="w-full">
            <ul id="navigation" className="flex items-center justify-center font-black">
			<li className="text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple">
				<a href="/">HOME</a>
			</li>
			<li className="text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple">
				<a href="/team">TEAMS</a>
			</li>
			<li className="text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple">
				<a href="/schedule">SCHEDULE</a>
			</li>
			<li className="text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple">
				<a href="/players">PLAYERS</a>
			</li>
			<li className="text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple">
				<a href="/rules">RULES</a>
			</li>
			<li className="text-base transition-colors duration-500 ease-in lg:mx-5 md:mx-2 md:px-2 lg:px-5 lg:text-xl hover:text-purple">
				<a href="/about">ABOUT</a>
			</li>
		</ul>
        </div>
    )
}