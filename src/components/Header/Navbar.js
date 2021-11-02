import React from 'react'

export default function Navbar() {
    return (
        <div className="w-1/2">
            <ul id="navigation" className="flex justify-center items-center font-black">
			<li className="mx-5 px-5 text-xl hover:text-purple transition-colors">
				<a href="/">HOME</a>
			</li>
			<li className="mx-5 px-5 text-xl hover:text-purple transition-colors">
				<a href="/team">TEAMS</a>
			</li>
			<li className="mx-5 px-5 text-xl hover:text-purple transition-colors">
				<a href="/schedule">SCHEDULE</a>
			</li>
			<li className="mx-5 px-5 text-xl hover:text-purple transition-colors">
				<a href="/players">PLAYERS</a>
			</li>
			<li className="mx-5 px-5 text-xl hover:text-purple transition-colors">
				<a href="/rules">RULES</a>
			</li>
			<li className="mx-5 px-5 text-xl hover:text-purple transition-colors">
				<a href="/about">ABOUT</a>
			</li>
		</ul>
        </div>
    )
}
