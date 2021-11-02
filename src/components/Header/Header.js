import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
    return (
    <div id="header" className="flex flex-col items-center justify-end w-screen back">
		<Logo />
		<Navbar />
	</div>
    )
}