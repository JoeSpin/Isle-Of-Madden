import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
    return (
    <div id="header" className="flex flex-col items-center justify-start w-screen back pb-5 overflow-hidden">
		<Logo />
		<Navbar />
	</div>
    )
}