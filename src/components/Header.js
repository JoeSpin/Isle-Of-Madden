import React from 'react'

export default function Header() {
    return (
        <div id="header">
		<a href="index.html" class="logo">
			<img src="..\img\logo.png" alt="iom-logo" />
		</a>
		<ul id="navigation">
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