import React from 'react'
import logo from '../img/logo.png'

export default function Header() {
    return (
        <div id="header" className="flex justify-center content-center flex-column w-screen">
		<a href="index.html" id="logo" style={{backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center',}}></a>
		<ul id="navigation" className="flex justify-center content-center flex-row w-screen">
			<li class="selected">
				<a href="/">home</a>
			</li>
			<li>
				<a href="/team">teams</a>
			</li>
			<li>
				<a href="/schedule">schedule</a>
			</li>
			<li>
				<a href="/players">players</a>
			</li>
			<li>
				<a href="/rules">rules</a>
			</li>
			<li>
				<a href="/about">about</a>
			</li>
		</ul>
	</div>
    )
}